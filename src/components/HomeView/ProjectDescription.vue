<template>
    <div class="flex">
        <img
            class="hidden lg:inline-flex image"
            draggable="false"
            :src="image"
        />
        <Card class="lg:ml-5 flex align-items-center flex-grow-1">
            <template #title>Project Description</template>
            <template #content>
                <div class="mb-3">
                    <h3 class="mb-1">Background:</h3>
                    <p>In recent years, the automotive industry has witnessed a profound transformation
                    driven by advancements in technology to enhance both driver convenience and safety.
                    These advancements have revolutionized the driving experience, making vehicles smarter, 
                    safer, and more user-friendly than ever before.</p>
                </div>
                <div class="mb-3">
                    <h3 class="mb-1">Brief Description:</h3>
                    <p>The objective of this project is to develop a Lane Management System (LMS).
                    This includes the implementation of a suite of advancements features: Lane Keeping
                    System (LKS), Lane Departure Warning Systems (LDWS), and Lane Centering Systems (LCS).
                    LMS will integrate data from various sensors for precise lane detection to provide assistance
                    in positioning the vehicle within a lane.</p>
                </div>
                <Button class="m-2" icon="pi pi-external-link" label="Full Description (PDF)" outlined @click="openProject"></Button>
                <Button class="m-2" label="SRS" outlined></Button>
                <Button class="m-2" label="Prototype" outlined @click="navigate('prototype')"></Button>
                <Button class="m-2" label="Bibliography" outlined @click="navigate('bibliography')"></Button>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';

import Project from '/assets/2023-LMS-GM-Agrawal.pdf';
import image from '/assets/images/highway.jpeg';
import { useRouter } from 'vue-router';

const router = useRouter();

const openProject = () => {
    window.open(Project);
}

const navigate = (path: string) => {
    router.push({path: path});
}
</script>

<style scoped>
.image {
    max-width: 400px;
    object-fit: cover;
}
</style>