<template>
    <h2 class="text-center m-3">Local Information</h2>
    <TabView v-model:activeIndex="active" :scrollable="true">
        <TabPanel header="Milestones">
            <MilestonesPanel></MilestonesPanel>
        </TabPanel>
        <TabPanel header="Meeting Notes">
            <NotesPanel></NotesPanel>
        </TabPanel>
        <!-- <TabPanel header="Discussion">
        </TabPanel> -->
        <TabPanel header="Dialog w/ Customer">
            <Button icon="pi pi-external-link" label="SRS_Feedback" link
                @click="openPDF('/~truongd1/assets/files/SRS_Feedback.pdf')" />
        </TabPanel>
        <TabPanel header="Statistics">
            <StatisticsPanel></StatisticsPanel>
        </TabPanel>
    </TabView>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import NotesPanel from '../components/LocalView/NotesPanel/NotesPanel.vue';
import StatisticsPanel from '../components/LocalView/StatisticsPanel/StatisticsPanel.vue';
import MilestonesPanel from '../components/LocalView/MilestonesPanel/MilestonesPanel.vue';

const active = ref(0);

const openPDF = (file: string) => {
    window.open(file);
}
</script>

<style>
.p-tabview-header {
    background-color: rgb(23, 29, 33);
}
</style>