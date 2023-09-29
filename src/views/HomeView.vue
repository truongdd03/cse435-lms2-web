<template>
    <LandingPage></LandingPage>
    <ProjectDescription id="projectDescription"></ProjectDescription>
    <CourseInformation class="mt-3"></CourseInformation>
    <TeamInformation class="mt-3"></TeamInformation>
</template>

<script setup lang="ts">
import LandingPage from '@/components/HomeView/LandingPage.vue';
import ProjectDescription from '../components/HomeView/ProjectDescription.vue';
import CourseInformation from '../components/HomeView/CourseInformation.vue';
import TeamInformation from '../components/HomeView/TeamInformation.vue';
</script>