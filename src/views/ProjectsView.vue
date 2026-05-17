<template>
  <div class="wrap">
    <div class="page-head">
      <h1 class="page-title">Mes projets</h1>
      <p class="page-sub">Quelques projets réalisés pendant ma formation</p>
    </div>

    <div class="proj-grid" v-if="projects.length">
      <div
        v-for="project in projects"
        :key="project.id"
        class="proj-card"
        :class="'accent-' + project.color"
      >
        <img
          v-if="project.thumbnail"
          :src="project.thumbnail"
          :alt="project.title"
          class="proj-thumbnail"
        />

        <h3 class="proj-title">{{ project.title }}</h3>
        <p class="proj-desc">{{ project.description }}</p>

        <div class="proj-techs">
          <span
            v-for="tech in project.techs"
            :key="tech"
            class="tech-pill"
          >
            {{ tech }}
          </span>
        </div>

        <div class="proj-footer">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-live"
          >
            Voir le site
          </a>
          <router-link
            :to="'/projets/' + project.id"
            class="btn-detail"
          >
            Voir le détail ->
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/data/projects'

export default {
  name: 'ProjectsView',

  data() {
    return {
      projects: projects.map((project) => ({
        ...project,
        description: project.summary,
      })),
    }
  },
}
</script>

<style scoped>
.wrap {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 3rem var(--content-gutter);
}

.page-head {
  margin-bottom: 2.5rem;
}

.page-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #2c2c2a;
  margin-bottom: 0.4rem;
}

.page-sub {
  font-size: 14px;
  color: #5f5e5a;
}

.proj-thumbnail {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  margin-bottom: 1rem;
}

.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.proj-card {
  background: #fff;
  border: 0.5px solid #d3d1c7;
  border-radius: 14px;
  padding: 1.4rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.proj-card:hover {
  transform: translateY(-4px);
}

.proj-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 14px 14px 0 0;
}

.accent-purple::before { background: #7f77dd; }
.accent-teal::before { background: #1d9e75; }
.accent-coral::before { background: #d85a30; }
.accent-pink::before { background: #d4537e; }

.proj-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #2c2c2a;
  margin-bottom: 8px;
}

.proj-desc {
  font-size: 13px;
  color: #5f5e5a;
  line-height: 1.6;
  margin-bottom: 14px;
}

.proj-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-pill {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  border: 0.5px solid #d3d1c7;
  color: #5f5e5a;
}

.proj-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 0.5px solid #d3d1c7;
}

.btn-live,
.btn-detail {
  font-size: 13px;
  color: #7f77dd;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-live:hover,
.btn-detail:hover {
  opacity: 0.7;
}
</style>
