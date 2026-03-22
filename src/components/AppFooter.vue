<template>
  <footer class="footer">
    <div class="footer-inner">

      <!-- Nom / logo -->
      <span class="footer-logo">Talda Nzoussi</span>

      <!-- Texte central -->
      <span class="footer-copy">
        <!-- computed year = l'année actuelle automatiquement -->
        Portfolio {{ year }}
      </span>

      <!-- Liens -->
      <div class="footer-links">
        <a href="mailto:nzoussitaldaruth@gmail.com">Email</a>
        <a href="https://github.com/Talda-sh" target="_blank">GitHub</a>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    // Récupère automatiquement l'année en cours
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer {
  border-top: 0.5px solid #D3D1C7;
  padding: 1.5rem 2rem;
  margin-top: 2rem;
}

.footer-inner {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.footer-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #7F77DD;
}

.footer-copy {
  font-size: 12px;
  color: #5F5E5A;
}

.footer-links {
  display: flex;
  gap: 1.2rem;
}

.footer-links a {
  font-size: 12px;
  color: #5F5E5A;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #7F77DD;
}
</style>