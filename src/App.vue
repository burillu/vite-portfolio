

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <router-view :key="$route.path"></router-view>
  </main>
  <footer class="mt-4">
    <AppFooter />
  </footer>
</template>

<script>

import { store } from './store.js';

import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';
//import AppMain from './pages/main/AppMain.vue';

export default {
  name: "App",
  projects: [],
  data() {
    return {
      store
    };
  },

  components: { AppHeader, AppFooter }
}

</script>

<style scoped></style>

