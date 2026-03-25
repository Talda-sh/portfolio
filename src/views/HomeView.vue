<template>
  <div class="wrap">

    <!-- ===== SECTION HERO ===== -->
    <section class="hero">
      <div class="hero-text">
        <p class="hero-greeting">Bonjour, je suis</p>
        <h1 class="hero-name">Talda<span class="dot-accent">.</span></h1>
        <p class="hero-role">Développeur Web</p>
        <p class="hero-desc">
         Je suis Talda NZOUSSI, étudiante en Bachelor Informatique à Orléans,
  passionnée par le développement web, l'administration système et les
  réseaux informatiques. Rigoureuse, curieuse et organisée, j'aime relever
  des défis techniques et apprendre de nouvelles technologies.
        </p>
        <div class="hero-tags">
          <span class="tag t-purple">Python / FastAPI</span>
          <span class="tag t-teal">PHP / MySQL</span>
          <span class="tag t-coral">Linux / Nginx</span>
          <span class="tag t-pink">Vue.js</span>
        </div>
        <div class="hero-btns">
          <router-link to="/projets" class="btn-main">Voir mes projets</router-link>
          <router-link to="/contact" class="btn-sec">Me contacter</router-link>
        </div>
      </div>
      <div class="hero-avatar">
        <img src="@/assets/photo.jpg" alt="Photo de profil" class="avatar-img" />
      </div>
    </section>

    <!-- ===== CENTRES D'INTÉRÊT ===== -->
    <section class="interests">
      <h2 class="interests-title">Centres d'intérêt</h2>

      <div class="interest-row">
        <img src="@/assets/interests/gym.png" alt="Gymnastique" class="interest-img" />
        <div class="interest-content">
          <span class="interest-tag t-teal">Gymnastique</span>
          <h3 class="interest-name">Ancienne athlète de haut niveau</h3>
          <p class="interest-desc">
            Ancienne membre de l'équipe nationale du Congo, j'ai remporté plusieurs médailles d'or en championnat. La gymnastique m'a appris la discipline, la persévérance et le dépassement de soi — des valeurs que j'applique aussi dans mes projets informatiques.
          </p>
        </div>
      </div>

      <div class="interest-row reverse">
        <img src="@/assets/interests/video.png" alt="Montage vidéo" class="interest-img" />
        <div class="interest-content">
          <span class="interest-tag t-purple">Montage vidéo</span>
          <h3 class="interest-name">Raconter des histoires en images</h3>
          <p class="interest-desc">
            Passionnée par la création vidéo, j'aime assembler des images, des sons et des effets pour raconter une histoire. Ce sens du détail et de l'esthétique se retrouve aussi dans ma façon de concevoir des interfaces web.
          </p>
        </div>
      </div>

      <div class="interest-row">
        <img src="@/assets/interests/photo.jpeg" alt="Photographie" class="interest-img" />
        <div class="interest-content">
          <span class="interest-tag t-coral">Photographie</span>
          <h3 class="interest-name">Capturer l'instant</h3>
          <p class="interest-desc">
            J'aime capturer des moments uniques et jouer avec la lumière et les perspectives. La photographie m'a appris à observer le monde différemment et à chercher la meilleure façon de présenter les choses.
          </p>
        </div>
      </div>

    </section>
<section class="about">

  <h2 class="about-title">À propos de moi</h2>

  <!-- Grille de 2 cartes -->
  <div class="about-cards">

    <!-- Carte 1 : Passion tech -->
    <div class="about-card">
      <img src="@/assets/tech.jpg" alt="Passion technologie" class="about-card-img" />
      <div class="about-card-body">
        <p class="about-desc">
          Passionnée par les nouvelles technologies, je consacre mon temps libre
          à explorer de nouveaux outils et frameworks pour enrichir mes compétences.
          Chaque projet est pour moi une opportunité d'apprendre et de progresser.
        </p>
      </div>
    </div>

    <!-- Carte 2 : Job étudiant -->
    <div class="about-card">
      <img src="@/assets/drive.jpg" alt="Auchan Drive" class="about-card-img" />
      <div class="about-card-body">
        <p class="about-desc">
          En parallèle de mes études, je travaille comme préparatrice de commandes
          chez Auchan Drive, une expérience qui renforce mon sens de l'organisation,
          ma rigueur et mon esprit d'équipe au quotidien.
        </p>
      </div>
    </div>

  </div>

  <!-- Langues -->
  <div class="about-langs">
    <div class="lang-item">
      <span class="lang-name">Français</span>
      <span class="lang-level t-teal">Natif</span>
    </div>
    <div class="lang-item">
      <span class="lang-name">Anglais</span>
      <span class="lang-level t-purple">Courant</span>
    </div>
  </div>

</section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
/* scoped = ce CSS s'applique UNIQUEMENT à ce composant */

/* Conteneur centré avec largeur max */
.wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Layout hero : texte à gauche, avatar à droite */
.hero {
  display: grid;
  grid-template-columns: 1fr auto; /* 1fr = prend tout l'espace dispo, auto = taille de l'avatar */
  align-items: center;
  gap: 2.5rem;
}

/* Petite accroche verte au dessus du nom */
.hero-greeting {
  font-size: 14px;
  color: #7F77DD;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

/* Nom en grand avec police Syne */
.hero-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 1;
  color: #2C2C2A;
  margin-bottom: 0.4rem;
}

/* Le point rose après le nom */
.dot-accent {
  color: #D4537E;
}

/* Sous-titre métier */
.hero-role {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #5F5E5A;
  margin-bottom: 1rem;
}

/* Description */
.hero-desc {
  font-size: 14px;
  color: #5F5E5A;
  max-width: 420px;
  line-height: 1.75;
  margin-bottom: 1.4rem;
}

/* Conteneur des tags */
.hero-tags {
  display: flex;
  flex-wrap: wrap; /* passe à la ligne si pas assez de place */
  gap: 8px;
  margin-bottom: 1.8rem;
}

/* Style de base pour tous les tags */
.tag {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

/* Couleurs des tags */
.t-purple { background: #EEEDFE; color: #534AB7; }
.t-teal   { background: #E1F5EE; color: #0F6E56; }
.t-coral  { background: #FAECE7; color: #993C1D; }
.t-pink   { background: #FBEAF0; color: #993556; }

/* Conteneur des boutons */
.hero-btns {
  display: flex;
  gap: 12px;
}

/* Style partagé des deux boutons */
.btn-main,
.btn-sec {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

/* Bouton principal : fond violet */
.btn-main {
  background: #7F77DD;
  color: #fff;
}
.btn-main:hover { opacity: 0.85; }

/* Bouton secondaire : contour violet */
.btn-sec {
  background: transparent;
  color: #7F77DD;
  border: 1.5px solid #7F77DD;
}
.btn-sec:hover { background: #EEEDFE; }

/* Conteneur de la photo */
.hero-avatar {
  width: 220px;  /* était 160px, on agrandit */
  height: 220px; /* était 160px, on agrandit */
  border-radius: 28px;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid #EEEDFE;
}

/* L'image remplit tout le conteneur */
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* recadre l'image sans la déformer */
  object-position: center top; /* centre sur le haut (le visage) */
}

/* ===== CENTRES D'INTÉRÊT ===== */
.interests {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 0.5px solid #D3D1C7;
}

.interests-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2C2C2A;
  margin-bottom: 2rem;
}

/* Ligne photo + texte */
.interest-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 0.5px solid #D3D1C7;
}

/* Ligne inversée — texte à gauche, photo à droite */
.interest-row.reverse {
  grid-template-columns: 1fr 280px;
}

.interest-row.reverse .interest-img {
  order: 2;
}

.interest-row.reverse .interest-content {
  order: 1;
}

.interest-row:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

/* Photo */
.interest-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
}


/* Tag coloré */
.interest-tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.8rem;
}

.interest-name {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #2C2C2A;
  margin-bottom: 0.8rem;
}

.interest-desc {
  font-size: 14px;
  color: #5F5E5A;
  line-height: 1.75;
}

/* Responsive mobile */
@media (max-width: 640px) {
  .interest-row,
  .interest-row.reverse {
    grid-template-columns: 1fr;
  }
  .interest-row.reverse .interest-img,
  .interest-row.reverse .interest-content {
    order: unset;
  }
}
/* ===== À PROPOS ===== */
.about {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 0.5px solid #D3D1C7;
}

.about-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2C2C2A;
  margin-bottom: 1.8rem;
}

/* Grille 2 cartes */
.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 2rem;
}

/* Carte */
.about-card {
  background: #fff;
  border: 0.5px solid #D3D1C7;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.about-card:hover {
  transform: translateY(-4px);
}

/* Image de la carte */
.about-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Texte de la carte */
.about-card-body {
  padding: 1.2rem;
}

.about-desc {
  font-size: 13px;
  color: #5F5E5A;
  line-height: 1.75;
}

/* Langues */
.about-langs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-name {
  font-size: 14px;
  font-weight: 500;
  color: #2C2C2A;
}

.lang-level {
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 640px) {
  .about-cards {
    grid-template-columns: 1fr;
  }
}  
</style>