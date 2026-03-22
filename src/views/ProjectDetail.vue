<template>
  <div class="wrap">

    <!-- Bouton retour -->
    <router-link to="/projets" class="back-btn">← Retour aux projets</router-link>

    <!-- Si le projet existe -->
    <div v-if="project">

      <!-- En-tête du projet -->
      <div class="detail-head">
        <h1 class="detail-title">{{ project.title }}</h1>
        <div class="detail-techs">
          <span
            v-for="tech in project.techs"
            :key="tech"
            class="tech-pill"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Description complète -->
      <div class="detail-section">
        <h2 class="section-title">Description</h2>
        <p class="detail-desc">{{ project.description }}</p>
      </div>

      <!-- Ce que j'ai fait (liste des étapes) -->
      <div class="detail-section">
        <h2 class="section-title">Ce que j'ai réalisé</h2>
        <ul class="detail-list">
          <li
            v-for="item in project.details"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>

     <!-- Captures d'écran -->
<div class="detail-section" v-if="project.screenshots.length > 0">
  <h2 class="section-title">Captures d'écran</h2>
  <div class="screenshots-grid">
    <div
      v-for="(screen, index) in project.screenshots"
      :key="index"
      class="screenshot-item"
    >
      <!-- Image cliquable -->
      <img
        :src="screen.src"
        :alt="screen.caption"
        class="screenshot"
        @click="openImage(screen.src)"
      />
      <!-- Légende sous l'image -->
      <p class="screenshot-caption">{{ screen.caption }}</p>
    </div>
  </div>
</div>
    </div>

    <!-- Si le projet n'existe pas -->
    <div v-else class="not-found">
      <p>Projet introuvable.</p>
      <router-link to="/projets">Retour aux projets</router-link>
    </div>
    <!-- Lightbox : s'affiche quand on clique sur une image -->
<div class="lightbox" v-if="lightboxImage" @click="lightboxImage = null">
  <div class="lightbox-inner" @click.stop>
    <!-- Bouton fermer -->
    <button class="lightbox-close" @click="lightboxImage = null">✕</button>
    <!-- Image en grand -->
    <img :src="lightboxImage" class="lightbox-img" />
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',

  data() {
    
    return {
      // Base de données de tous les projets avec leurs détails
      // Tu ajouteras tes vraies screenshots dans src/assets/screenshots/
      lightboxImage: null,
      allProjects: [
        {
  id: 1,
  title: 'Serveur Web Debian / Nginx',
  description: 'Conception et sécurisation d\'une infrastructure web complète sous Debian 12 pour un club de Water-Polo. Comparaison de 4 serveurs web, optimisation de Nginx, sécurisation SSH et automatisation des sauvegardes.',
  techs: ['Linux', 'Debian 12', 'Nginx', 'SSH', 'Bash', 'VMware'],
  details: [
    'Création de deux machines virtuelles Debian 12 (serveur et client) sous VMware',
    'Installation et comparaison de 4 serveurs web : Apache, Nginx, Lighttpd et Caddy',
    'Tests de performance avec Apache Benchmark — Nginx sélectionné avec 1075 requêtes/s',
    'Optimisation de Nginx : compression gzip, keepalive, logs d\'accès',
    'Sécurisation SSH : connexion par clé uniquement, accès root désactivé',
    'Script d\'archivage automatique des logs avec cron (exécution quotidienne)',
  ],
  screenshots: [
    { src: require('@/assets/screenshots/nginx/nginx1.png'), caption: 'Test de communication réseau — ping réussi entre la VM client (192.168.75.129) et la VM serveur (192.168.75.130)' },
    { src: require('@/assets/screenshots/nginx/nginx2.png'), caption: 'Comparaison des performances — Nginx gagnant avec 1075 requêtes/s et le temps de réponse le plus bas (9.3 ms)' },
    { src: require('@/assets/screenshots/nginx/nginx3.png'), caption: 'Page HTML personnalisée affichée dans le navigateur — confirmation que Nginx fonctionne correctement' },
    { src: require('@/assets/screenshots/nginx/nginx4.png'), caption: 'Script d\'archivage automatique des logs Nginx — exécuté chaque jour à 1h via cron' },
    { src: require('@/assets/screenshots/nginx/nginx5.png'), caption: 'Vérification des archives créées dans /archive — logs compressés au format .tar.gz' },
  ],
},
       {
  id: 2,
  title: 'Infrastructure Active Directory',
  description: 'Mise en place d\'une infrastructure Windows Server 2008 complète avec Active Directory pour gérer les utilisateurs, les politiques de sécurité et les profils itinérants dans un environnement virtualisé VMware.',
  techs: ['Windows Server 2008', 'Active Directory', 'GPO', 'VMware'],
  details: [
    'Création du domaine talda.local et configuration du contrôleur de domaine',
    'Création de 3 utilisateurs dans une OU dédiée (Utilisateurs_Talda)',
    'Configuration des stratégies de mot de passe (longueur min 10 caractères, historique 5 mots de passe, verrouillage après 3 tentatives)',
    'Mise en place de la délégation de contrôle pour un utilisateur non-administrateur',
    'Configuration des profils itinérants — vérifiés sur 2 machines clientes',
    'Sauvegarde complète du serveur (8.67 Go) vers un disque secondaire',
  ],
 screenshots: [
  { src: require('@/assets/screenshots/active-directory/ad1.png'), caption: 'Structure Active Directory — domaine talda.local avec les utilisateurs créés dans l\'OU Utilisateurs_Talda' },
  { src: require('@/assets/screenshots/active-directory/ad2.png'), caption: 'Stratégies de mot de passe — longueur minimale 10 caractères, historique 5 mots de passe, verrouillage après 3 tentatives' },
  { src: require('@/assets/screenshots/active-directory/ad3.png'), caption: 'Test de sécurité — mot de passe trop simple refusé par la politique du domaine' },
  { src: require('@/assets/screenshots/active-directory/ad4.png'), caption: 'Sauvegarde complète réussie — 8.67 Go transférés vers le disque secondaire' },
  { src: require('@/assets/screenshots/active-directory/ad5.png'), caption: 'Profils itinérants — le fichier test.txt créé sur Client-10 est retrouvé automatiquement sur Client-10B' },
],
},
        {
          id: 3,
          title: 'Site Web Dynamique',
          description: 'Site web responsive multi-pages développé avec PHP et MySQL, avec une page d\'administration sécurisée et un mode jour/nuit.',
          techs: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
          details: [
            'Site responsive présentant plusieurs pages',
            'Formulaire connecté à une base de données MySQL',
            'Page administration sécurisée (affichage et suppression des données)',
            'Intégration d\'un mode Jour/Nuit',
          ],
          screenshots: [],
        },
        {
          id: 4,
          title: 'Jeu du Pendu — Python',
          description: 'Jeu du pendu en ligne de commande développé en Python avec gestion des vies, sélection aléatoire de mots et construction progressive du pendu.',
          techs: ['Python'],
          details: [
            'Conception du jeu avec gestion des vies et des erreurs',
            'Sélection aléatoire de mots depuis un fichier texte',
            'Construction progressive du pendu à chaque mauvaise réponse',
            'Création automatique et remplissage d\'un fichier de mots',
          ],
          screenshots: [],
        },
      ],
    }
  },

  computed: {
    // Récupère le projet dont l'id correspond à l'URL
    // this.$route.params.id = le :id dans l'URL (/projets/1 → id = "1")
    project() {
      const id = parseInt(this.$route.params.id)
      return this.allProjects.find(p => p.id === id)
    },
  },

  methods: {
  // Ouvre la lightbox avec l'image cliquée
  openImage(src) {
    this.lightboxImage = src
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

/* Bouton retour */
.back-btn {
  display: inline-block;
  font-size: 13px;
  color: #7F77DD;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: opacity 0.2s;
}
.back-btn:hover { opacity: 0.7; }

/* En-tête */
.detail-head {
  margin-bottom: 2.5rem;
}

.detail-title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #2C2C2A;
  margin-bottom: 1rem;
}

.detail-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-pill {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  border: 0.5px solid #D3D1C7;
  color: #5F5E5A;
}

/* Section */
.detail-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #2C2C2A;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #EEEDFE;
}

.detail-desc {
  font-size: 14px;
  color: #5F5E5A;
  line-height: 1.8;
}

/* Liste de ce qui a été fait */
.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-list li {
  font-size: 14px;
  color: #2C2C2A;
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.6;
}

/* Puce colorée devant chaque item */
.detail-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7F77DD;
}

/* Grille de screenshots */
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}

.screenshot {
  width: 100%;
  border-radius: 10px;
  border: 0.5px solid #D3D1C7;
  cursor: pointer;
  transition: transform 0.2s;
}

.screenshot:hover { transform: scale(1.02); }

.not-found {
  text-align: center;
  color: #5F5E5A;
  margin-top: 3rem;
}

/* Conteneur image + légende */
.screenshot-item {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 0.5px solid #D3D1C7;
  border-radius: 12px;
  overflow: hidden;
}

/* Image */
.screenshot {
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 0;
  border: none;
}

.screenshot:hover { transform: scale(1.02); }

/* Légende */
.screenshot-caption {
  padding: 10px 14px;
  font-size: 12px;
  color: #5F5E5A;
  line-height: 1.5;
  border-top: 0.5px solid #D3D1C7;
  background: #fafaf8;
}
/* Fond sombre derrière l'image */
.lightbox {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
}

/* Conteneur de l'image */
.lightbox-inner {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
}

/* Image en grand */
.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 10px;
  display: block;
}

/* Bouton fermer */
.lightbox-close {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #7F77DD;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.lightbox-close:hover { opacity: 0.8; }
</style>