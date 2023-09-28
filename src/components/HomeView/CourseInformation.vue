<template>
    <div class="flex">
        <Card class="md:mr-5 flex align-items-center">
            <template #title>About CSE 435 - Software Engineering</template>
            <template #content>
                <p>Software lifecycle including specification, design, coding, testing, and verification of a software product. Stepwise refinement and traceability. Software maintenance and documentation.</p>
                <Button class="m-2 mt-3" label="Website" outlined @click="openUrl('https://www.cse.msu.edu/~cse435/')"></Button>
                <Button class="m-2" label="Dr. Betty H.C. Cheng" outlined @click="openUrl('http://www.cse.msu.edu/~chengb/')"></Button>
            </template>
        </Card>
        <img
            class="hidden md:inline-flex image"
            draggable="false"
            :src="image"
        />
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';

import image from '/assets/images/cse435.jpeg';

const openUrl = (url: string) => {
    window.open(url, '_blank');
}
</script>

<style scoped>
.image {
    max-width: 400px;
    object-fit: cover;
}
</style>