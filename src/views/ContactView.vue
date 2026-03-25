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
          <!-- Carte LinkedIn -->
     
       <a href="https://www.linkedin.com/in/talda-nzoussi-800b2838b/" target="_blank" class="contact-card">
    <div class="cc-icon" style="background:#E6F1FB; color:#0077B5">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </div>
  
  <div>
    <div class="cc-label">LinkedIn</div>
    <div class="cc-val">linkedin.com/in/talda-nzoussi</div>
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

       <button type="submit" class="submit-btn" :disabled="loading || sent">
  {{ sent ? 'Message envoyé ✓' : loading ? 'Envoi en cours...' : 'Envoyer' }}
  <p v-if="error" class="error-msg">
  Une erreur est survenue. Réessaie plus tard.
</p>
</button>
      </form>

    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactView',

  data() {
    return {
      sent: false,
      error: false,
      loading: false,
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },

  methods: {
    handleSubmit() {
      this.loading = true
      this.error = false

      emailjs.send(
        'service_fwu48uf',
        'template_4tic9wg',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        },
        'DnHx9B18vfbXpGefW'
      )
      .then(() => {
        this.sent = true
        this.loading = false
        this.form = { name: '', email: '', message: '' }
        setTimeout(() => { this.sent = false }, 4000)
      })
      .catch(() => {
        this.error = true
        this.loading = false
      })
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

.error-msg {
  font-size: 13px;
  color: #D85A30;
  margin-top: 8px;
}
/* Responsive mobile */
@media (max-width: 640px) {
  .contact-layout { grid-template-columns: 1fr; }
}
</style>