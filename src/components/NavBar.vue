<template>
  <header class="navbar">
    <div class="navbar-inner">
      <div class="logo">T.</div>
      <nav class="nav-links">
        <router-link to="/">Accueil</router-link>
        <router-link to="/projets">Projets</router-link>
        <router-link to="/competences">Compétences</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fafaf8;
  border-bottom: 1px solid #D3D1C7;
  padding: 0 2rem;
}

.navbar-inner {
  max-width: 820px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  color: #7F77DD;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-size: 14px;
  color: #5F5E5A;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #7F77DD;
}
</style>