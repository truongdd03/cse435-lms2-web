<template>
    <div class="m-3 flex" v-if="permissionStore.isAdmin">
        <Button class="ml-auto" style="order: 2" label="New Note" @click="displayAddNote = true" outlined></Button>
    </div>
    <Accordion :activeIndex="0">
        <AccordionTab v-for="note in useNotesStore().notes" :key="note.timestamp">
            <template #header>
                <i class="pi pi-calendar" style="font-size: 1.3rem"></i>
                <h3 class="ml-2 mr-2">{{ note.date }}</h3>
            </template>
            <span v-html="note.content" />
        </AccordionTab>
    </Accordion>

    <!-- Pop-up to add note -->
    <AddNote v-if="displayAddNote" @close="displayAddNote = false"></AddNote>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
import AddNote from './AddNote.vue';
import { onBeforeMount, ref } from 'vue';
import { usePermissionStore } from '../../../stores/permission';
import { useNotesStore } from '@/stores/note';

const displayAddNote = ref(false);
const permissionStore = ref(usePermissionStore());

onBeforeMount(async () => {
    await useNotesStore().fetchNotes();
});

</script>
