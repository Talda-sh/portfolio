<template>
  <div id="app">
    <NavBar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer affiché sur toutes les pages -->
    <AppFooter />
  </div>
</template>

<script>
import NavBar    from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { NavBar, AppFooter },
}
</script>

<style>
/* ===== RESET GLOBAL ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: #fafaf8;
  color: #2C2C2A;
}

/* ===== ANIMATION DE TRANSITION ENTRE PAGES ===== */

/* Page qui entre : commence invisible et décalée plus bas */
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px); /* était 12px */
}

/* Page qui sort : finit invisible */
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* était -8px */
}

/* Durée plus longue pour mieux voir l'effet */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* était 0.3s */
}
</style>