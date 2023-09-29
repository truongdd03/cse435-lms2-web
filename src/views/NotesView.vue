<template>
    <div class="flex justify-content-center align-items-center m-3">
        <h2 style="order: 1">Meeting Notes</h2>
        <Button class="ml-auto" style="order: 2" label="New Note" @click="displayAddNote = true"></Button>
    </div>
    <Accordion :activeIndex="0">
        <AccordionTab v-for="note in notes" :key="note.timestamp">
            <template #header>
                <i class="pi pi-calendar" style="font-size: 1.3rem"></i>
                <h3 class="ml-2 mr-2">{{ note.date }}</h3>
            </template>
            <span v-html="note.content" />
        </AccordionTab>
    </Accordion>

    <div>
        <p v-if="notes.length == 0" class="text-center text-color-secondary">Nothing's here yet.</p>
    </div>

    <!-- Pop-up to add note -->
    <AddNote v-if="displayAddNote" @close="displayAddNote = false" @save="getNotes"></AddNote>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
import AddNote from '../components/NotesView/AddNote.vue';
import { onBeforeMount, ref, type Ref } from 'vue';
import { getRemote, type Note } from '@/utils/firebase';

const displayAddNote = ref(false);
const notes: Ref<Array<Note>> = ref([]);

onBeforeMount(async () => {
    await getNotes();
});

const getNotes = async () => {
    notes.value = await getRemote();
}
</script>
