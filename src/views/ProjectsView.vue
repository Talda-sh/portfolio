<template>
  <div class="wrap">

    <!-- ===== TITRE DE LA PAGE ===== -->
    <div class="page-head">
      <h1 class="page-title">Mes projets</h1>
      <p class="page-sub">Quelques projets réalisés pendant ma formation</p>
    </div>

    <!-- ===== GRILLE DE PROJETS ===== -->
    <div class="proj-grid" v-if="projects.length">
      <div
        v-for="project in projects"
        :key="project.id"
        class="proj-card"
        :class="'accent-' + project.color"
      >
        <!-- Titre du projet -->
        <h3 class="proj-title">{{ project.title }}</h3>

        <!-- Description -->
        <p class="proj-desc">{{ project.description }}</p>

        <!-- Tags des technologies utilisées -->
        <div class="proj-techs">
          <span
            v-for="tech in project.techs"
            :key="tech"
            class="tech-pill"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Bouton INSIDE la carte, donc inside le v-for -->
        <div class="proj-footer">
          <router-link
            :to="'/projets/' + project.id"
            class="btn-detail"
          >
            Voir le détail →
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProjectsView',

  data() {
  return {
    projects: [
      {
        id: 1,
        title: 'Serveur Web Debian / Nginx',
        description: 'Installation et configuration d\'un serveur Nginx sur Debian. Optimisation des performances, tests de charge et sécurisation (pare-feu, permissions, HTTPS).',
        techs: ['Linux', 'Debian', 'Nginx', 'HTTPS'],
        color: 'coral',
      },
      {
        id: 2,
        title: 'Infrastructure Active Directory',
        description: 'Création d\'un domaine Active Directory sous Windows Server, gestion des stratégies de groupe (GPO), profils itinérants et délégation d\'administration.',
        techs: ['Windows Server', 'Active Directory', 'GPO'],
        color: 'purple',
      },
      {
        id: 3,
        title: 'Site Web Dynamique',
        description: 'Site responsive multi-pages avec formulaire connecté à une base de données, page d\'administration sécurisée et mode Jour/Nuit.',
        techs: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
        color: 'teal',
      },
      {
        id: 4,
        title: 'Jeu du Pendu — Python',
        description: 'Jeu du pendu en ligne de commande avec gestion des vies, sélection aléatoire de mots depuis un fichier texte et construction progressive du pendu.',
        techs: ['Python'],
        color: 'pink',
      },
    ],
  }
}, 
}
</script>

<style scoped>
.wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* En-tête de la page */
.page-head {
  margin-bottom: 2.5rem;
}

.page-title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #2C2C2A;
  margin-bottom: 0.4rem;
}

.page-sub {
  font-size: 14px;
  color: #5F5E5A;
}

/* Grille responsive : 2 colonnes sur grand écran */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

/* Carte projet */
.proj-card {
  background: #fff;
  border: 0.5px solid #D3D1C7;
  border-radius: 14px;
  padding: 1.4rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
}

/* Légère élévation au survol */
.proj-card:hover {
  transform: translateY(-4px);
}

/* Bande colorée en haut de chaque carte selon la couleur du projet */
.proj-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  border-radius: 14px 14px 0 0;
}

/* Couleurs des bandes */
.accent-purple::before { background: #7F77DD; }
.accent-teal::before   { background: #1D9E75; }
.accent-coral::before  { background: #D85A30; }
.accent-pink::before   { background: #D4537E; }

.proj-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #2C2C2A;
  margin-bottom: 8px;
}

.proj-desc {
  font-size: 13px;
  color: #5F5E5A;
  line-height: 1.6;
  margin-bottom: 14px;
}

/* Conteneur des technos */
.proj-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Pill de techno */
.tech-pill {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  border: 0.5px solid #D3D1C7;
  color: #5F5E5A;
}

/* Séparateur entre description et bouton */
.proj-footer {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 0.5px solid #D3D1C7;
}

/* Lien vers la page détail */
.btn-detail {
  font-size: 13px;
  color: #7F77DD;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-detail:hover { opacity: 0.7; }
</style>