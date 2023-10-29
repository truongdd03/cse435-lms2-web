<template>
    <div class="notFoundWrapper flex align-items-center justify-content-center">
        <div class="mr-4">
            <img :src="Image" style="filter: invert(100%);" />
        </div>
        <div>
            <h1>Lane Management System</h1>
            <h2>Oops! Page not found!</h2>
            <Button label="Go Home" class="mt-3" @click="router.push({path: 'home'})"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Image from '/assets/images/404.png';

import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.notFoundWrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgb(23, 29, 33);
    z-index: 1000;
}
</style>