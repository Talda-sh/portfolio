<template>
  <div class="wrap">

    <!-- ===== TITRE DE LA PAGE ===== -->
    <div class="page-head">
      <h1 class="page-title">Contact</h1>
      <p class="page-sub">Tu veux discuter d'un projet ou d'une opportunité ? Écris-moi !</p>
    </div>

    <div class="contact-layout">

      <!-- ===== COLONNE GAUCHE : liens de contact ===== -->
      <div class="contact-info">

        <!-- Carte email -->
        <a href="mailto:nzoussitaldaruth@gmail.com" class="contact-card">
          <div class="cc-icon" style="background:#EEEDFE; color:#534AB7">@</div>
          <div>
            <div class="cc-label">Email</div>
            <div class="cc-val">nzoussitaldaruth@gmail.com</div>
          </div>
        </a>

        <!-- Carte GitHub -->
        <a href="https://github.com/Talda-sh" target="_blank" class="contact-card">
          <div class="cc-icon" style="background:#E1F5EE; color:#0F6E56">G</div>
          <div>
            <div class="cc-label">GitHub</div>
            <div class="cc-val">github.com/Talda-sh</div>
          </div>
        </a>

        <!-- Carte localisation -->
        <div class="contact-card">
          <div class="cc-icon" style="background:#FAECE7; color:#993C1D">📍</div>
          <div>
            <div class="cc-label">Localisation</div>
            <div class="cc-val">Orléans / Paris</div>
          </div>
        </div>

      </div>

      <!-- ===== COLONNE DROITE : formulaire ===== -->
      <form class="contact-form" @submit.prevent="handleSubmit">
        <!-- @submit.prevent = intercepte la soumission et empêche le rechargement de page -->

        <div class="form-group">
          <label for="name">Nom</label>
          <!-- v-model = lie la valeur du champ à la variable dans data() -->
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Ton prénom"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="ton@email.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Ton message..."
            required
          ></textarea>
        </div>

        <!-- Le bouton change de texte selon si le message est envoyé -->
        <button type="submit" class="submit-btn" :disabled="sent">
          {{ sent ? 'Message   envoyé ✓' : 'Envoyer' }}
        </button>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',

  data() {
    return {
      sent: false, // devient true après envoi
      // Objet lié au formulaire via v-model
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },

  methods: {
    handleSubmit() {
      // Pour l'instant on simule l'envoi
      // Plus tard tu pourras brancher EmailJS ou ton API FastAPI ici
      console.log('Formulaire envoyé :', this.form)
      this.sent = true

      // Réinitialise le formulaire après 3 secondes
      setTimeout(() => {
        this.sent = false
        this.form = { name: '', email: '', message: '' }
      }, 3000)
    },
  },
}
</script>

<style scoped>
.wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.page-head {
  margin-bottom: 2.5rem;
}

.page-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #2C2C2A;
  margin-bottom: 0.4rem;
}

.page-sub {
  font-size: 14px;
  color: #5F5E5A;
}

/* Layout 2 colonnes */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: start;
}

/* Colonne gauche */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Carte de contact */
.contact-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 0.5px solid #D3D1C7;
  border-radius: 12px;
  padding: 14px 18px;
  text-decoration: none;
  transition: transform 0.15s;
}

.contact-card:hover {
  transform: translateX(4px);
}

/* Icône ronde colorée */
.cc-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}

.cc-label {
  font-size: 11px;
  color: #5F5E5A;
  margin-bottom: 2px;
}

.cc-val {
  font-size: 13px;
  font-weight: 500;
  color: #2C2C2A;
}

/* Formulaire */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 13px;
  font-weight: 500;
  color: #2C2C2A;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 0.5px solid #D3D1C7;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  color: #2C2C2A;
  background: #fff;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s;
}

/* Bordure violette quand le champ est actif */
.form-group input:focus,
.form-group textarea:focus {
  border-color: #7F77DD;
}

/* Bouton d'envoi */
.submit-btn {
  padding: 11px 28px;
  background: #7F77DD;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.2s;
}

.submit-btn:hover:not(:disabled) { opacity: 0.85; }

/* Bouton désactivé après envoi */
.submit-btn:disabled {
  background: #1D9E75;
  cursor: default;
}

/* Responsive mobile */
@media (max-width: 640px) {
  .contact-layout { grid-template-columns: 1fr; }
}
</style>