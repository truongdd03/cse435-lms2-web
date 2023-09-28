<template>
    <Card>
        <template #title>Project Description</template>
        <template #content>
            <Button class="m-2" label="Description (PDF)" outlined @click="openProject"></Button>
            <Button class="m-2" label="SRS" outlined></Button>
            <Button class="m-2" label="Prototype" outlined></Button>
            <Button class="m-2" label="Bibliography" outlined></Button>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';

import Project from '/assets/2023-LMS-GM-Agrawal.pdf';

const openProject = () => {
    window.open(Project);
}
</script>