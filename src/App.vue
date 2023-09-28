<template>
  <NavBar class="mb-3"></NavBar>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>