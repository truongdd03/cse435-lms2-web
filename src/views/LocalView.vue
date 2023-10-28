<template>
    <h2 class="text-center m-3">Local Information</h2>
    <TabView v-model:activeIndex="active">
        <TabPanel header="Meeting Notes">
            <NotesPanel></NotesPanel>
        </TabPanel>
    </TabView>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import NotesPanel from '../components/LocalView/NotesPanel/NotesPanel.vue';

const active = ref(0);
</script>