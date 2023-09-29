<template>
  <div class="navbar">
    <NavBar class="mb-3"></NavBar>
  </div>
  <div style="height: 65px;"></div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 10;
  width: calc(100% - 40px);
}
</style>