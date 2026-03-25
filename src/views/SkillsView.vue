<template>
  <div class="wrap">

    <!-- ===== TITRE DE LA PAGE ===== -->
    <div class="page-head">
      <h1 class="page-title">Compétences</h1>
      <p class="page-sub">Mes technologies et outils maîtrisés</p>
    </div>

    <!-- ===== GRILLE DE CATÉGORIES ===== -->
    <!-- v-for = on boucle sur chaque catégorie de compétences -->
    <div class="skills-grid">
      <div
        v-for="category in skillCategories"
        :key="category.name"
        class="skill-category"
      >
        <!-- Titre de la catégorie avec sa couleur -->
        <h3
          class="cat-title"
          :style="{ color: category.color }"
        >
          {{ category.name }}
        </h3>

        <!-- Barre de compétence pour chaque skill -->
        <div
          v-for="skill in category.skills"
          :key="skill.name"
          class="skill-item"
        >
          <!-- Nom + pourcentage -->
          <div class="skill-top">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-pct">{{ skill.level }}%</span>
          </div>

          <!-- Barre de progression -->
          <div class="skill-track">
            <div
              class="skill-fill"
              :style="{
                width: skill.level + '%',
                background: category.color
              }"
            ></div>
          </div>

        </div>
      </div>
    </div>

    <!-- ===== EN APPRENTISSAGE ===== -->
    <div class="learning-box">
      <h3 class="learning-title">En apprentissage</h3>
      <div class="learning-tags">
        <span
          v-for="tech in learning"
          :key="tech"
          class="tag t-purple"
        >
          {{ tech }}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SkillsView',

  data() {
    return {
      // Catégories de compétences avec leurs couleurs
      skillCategories: [
        {
          name: 'Langages',
          color: '#7F77DD',
          skills: [
            { name: 'HTML / CSS',   level: 80 },
            { name: 'Python',       level: 70 },
            { name: 'SQL / MySQL',  level: 65 },
            { name: 'PHP',          level: 60 },
            { name: 'JavaScript',   level: 55 },
          ],
        },
        {
          name: 'Systèmes',
          color: '#D85A30',
          skills: [
            { name: 'Linux Debian / Ubuntu', level: 70 },
            { name: 'Windows Server',        level: 65 },
          ],
        },
        {
          name: 'Outils',
          color: '#1D9E75',
          skills: [
            { name: 'Git',                level: 65 },
            { name: 'VMware Workstation', level: 60 },
            { name: 'Figma',              level: 55 },
            { name: 'Laragon',            level: 60 },
          ],
        },
        {
          name: 'Réseaux',
          color: '#D4537E',
          skills: [
            { name: 'TCP/IP',   level: 60 },
            { name: 'VLAN',     level: 50 },
            { name: 'Routage',  level: 50 },
          ],
        },
      ],

      // Technologies en cours d'apprentissage
      learning: ['React', 'Vue.js', 'Symfony', 'FastAPI'],
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

/* Grille 2 colonnes */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  margin-bottom: 2.5rem;
}

/* Carte d'une catégorie */
.skill-category {
  background: #fff;
  border: 0.5px solid #D3D1C7;
  border-radius: 14px;
  padding: 1.4rem;
}

/* Titre de la catégorie */
.cat-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Une ligne de compétence */
.skill-item {
  margin-bottom: 1rem;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.skill-name {
  font-size: 13px;
  font-weight: 500;
  color: #2C2C2A;
}

.skill-pct {
  font-size: 12px;
  color: #5F5E5A;
}

/* Fond gris de la barre */
.skill-track {
  height: 5px;
  background: #F1EFE8;
  border-radius: 10px;
  overflow: hidden;
}

/* Remplissage coloré de la barre */
.skill-fill {
  height: 100%;
  border-radius: 10px;
  /* Transition pour animer la barre au chargement */
  transition: width 1s ease;
}

/* Boîte "en apprentissage" */
.learning-box {
  background: #F1EFE8;
  border-radius: 14px;
  padding: 1.4rem;
}

.learning-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #2C2C2A;
  margin-bottom: 1rem;
}

.learning-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Tags (réutilisés depuis HomeView) */
.tag { padding: 5px 14px; border-radius: 20px; font-size: 12px; font-weight: 500; }
.t-purple { background: #EEEDFE; color: #534AB7; }
</style>