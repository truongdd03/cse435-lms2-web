<template>
    <h2 class="text-center m-3">Local Information</h2>
    <TabView v-model:activeIndex="active">
        <TabPanel header="Meeting Notes">
            <NotesPanel></NotesPanel>
        </TabPanel>
        <TabPanel header="Discussion">
        </TabPanel>
        <TabPanel header="Dialog w/ Customer">
        </TabPanel>
        <TabPanel header="Documents">
            <DocumentsPanel></DocumentsPanel>
        </TabPanel>
    </TabView>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import NotesPanel from '../components/LocalView/NotesPanel/NotesPanel.vue';
import DocumentsPanel from '../components/LocalView/DocumentsPanel/DocumentsPanel.vue';

const active = ref(0);
</script>

<style>
.p-tabview-header {
    background-color: rgb(23, 29, 33);
}
</style>