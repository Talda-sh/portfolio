<template>
  <div class="wrap">
    <router-link to="/projets" class="back-btn"><- Retour aux projets</router-link>

    <div v-if="project">
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
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          Voir le site
        </a>
      </div>

      <div class="detail-section">
        <h2 class="section-title">Description</h2>
        <p class="detail-desc">{{ project.description }}</p>
      </div>

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

      <div
        v-if="project.screenshots.length > 0"
        class="detail-section"
      >
        <h2 class="section-title">Captures d'écran</h2>
        <div class="screenshots-grid">
          <div
            v-for="(screen, index) in project.screenshots"
            :key="index"
            class="screenshot-item"
          >
            <img
              :src="screen.src"
              :alt="screen.caption"
              class="screenshot"
              @click="openImage(screen.src)"
            />
            <p class="screenshot-caption">{{ screen.caption }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <p>Projet introuvable.</p>
      <router-link to="/projets">Retour aux projets</router-link>
    </div>

    <div v-if="lightboxImage" class="lightbox" @click="lightboxImage = null">
      <div class="lightbox-inner" @click.stop>
        <button class="lightbox-close" @click="lightboxImage = null">X</button>
        <img :src="lightboxImage" alt="Aperçu du projet" class="lightbox-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectById } from '@/data/projects'

export default {
  name: 'ProjectDetail',

  data() {
    return {
      lightboxImage: null,
    }
  },

  computed: {
    project() {
      return getProjectById(this.$route.params.id)
    },
  },

  methods: {
    openImage(src) {
      this.lightboxImage = src
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.wrap {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 3rem var(--content-gutter);
}

.back-btn {
  display: inline-block;
  font-size: 13px;
  color: #7f77dd;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: opacity 0.2s;
}

.back-btn:hover {
  opacity: 0.7;
}

.detail-head {
  margin-bottom: 2.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 600;
  color: #7f77dd;
  text-decoration: none;
  transition: opacity 0.2s;
}

.project-link:hover {
  opacity: 0.75;
}

.detail-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #2c2c2a;
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
  border: 0.5px solid #d3d1c7;
  color: #5f5e5a;
}

.detail-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #2c2c2a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eeedfe;
}

.detail-desc {
  font-size: 14px;
  color: #5f5e5a;
  line-height: 1.8;
}

.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-list li {
  font-size: 14px;
  color: #2c2c2a;
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.6;
}

.detail-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7f77dd;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}

.not-found {
  text-align: center;
  color: #5f5e5a;
  margin-top: 3rem;
}

.screenshot-item {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 0.5px solid #d3d1c7;
  border-radius: 12px;
  overflow: hidden;
}

.screenshot {
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
  border: none;
}

.screenshot:hover {
  transform: scale(1.02);
}

.screenshot-caption {
  padding: 10px 14px;
  font-size: 12px;
  color: #5f5e5a;
  line-height: 1.5;
  border-top: 0.5px solid #d3d1c7;
  background: #fafaf8;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
}

.lightbox-inner {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
}

.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 10px;
  display: block;
}

.lightbox-close {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #7f77dd;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.lightbox-close:hover {
  opacity: 0.8;
}
</style>
