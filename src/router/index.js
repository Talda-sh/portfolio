import { createRouter, createWebHashHistory } from 'vue-router'

// On importe toutes les vues
import HomeView      from '../views/HomeView.vue'
import ProjectsView  from '../views/ProjectsView.vue'
import ProjectDetail from '../views/ProjectDetail.vue' // manquait !
import SkillsView    from '../views/SkillsView.vue'
import ContactView   from '../views/ContactView.vue'

const routes = [
  { path: '/',             name: 'Home',          component: HomeView },
  { path: '/projets',      name: 'Projects',      component: ProjectsView },
  { path: '/projets/:id',  name: 'ProjectDetail', component: ProjectDetail }, // manquait !
  { path: '/competences',  name: 'Skills',        component: SkillsView },
  { path: '/contact',      name: 'Contact',       component: ContactView },
]

const router = createRouter({
   history: createWebHashHistory(),
  routes,
})

export default router