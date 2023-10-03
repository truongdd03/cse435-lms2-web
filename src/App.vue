<template>
  <div class="navbar" id="navbar">
    <NavBar class="mb-3"></NavBar>
  </div>
  <div style="height: 65px;"></div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

let prevScrollPos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar")!.style.top = "10px";
  } else {
    document.getElementById("navbar")!.style.top = "-70px";
  }
  prevScrollPos = currentScrollPos;
}
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 10;
  width: calc(100% - 40px);
  transition: top 0.4s;
}
</style>