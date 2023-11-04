<template>
    <Message class="mb-3">Clicking on each milestone shows its submission.</Message>

    <Dialog v-model:visible="visible" modal :header="selectedEvent?.title" style="min-width: 50vw;">
        <div v-if="selectedEvent?.file">
            <Button icon="pi pi-external-link" :label="selectedEvent.file" link @click="openPDF('/~truongd1/assets/files/' + selectedEvent.file)" />
        </div>
        <span v-else v-html="selectedEvent?.content" />
    </Dialog>
    <div class="flex justify-content-center">
        <div style="width: 800px;">
            <FullCalendar :options="calendarOptions">
            </FullCalendar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, type Ref } from 'vue';
import { useNotesStore } from '@/stores/note';
import { getMilestones } from '@/utils/firebase';

import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';

import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const visible = ref(false);
const selectedEvent: Ref<{title: string, content: string, file: string} | null> = ref(null);

const openPDF = (file: string) => {
    window.open(file);
}

const calendarOptions: Ref<any> = ref({
    plugins: [ dayGridPlugin, interactionPlugin ],
    initialView: 'dayGridMonth',
    events: [],
    eventClick: (info: any) => {
        visible.value = true;
        selectedEvent.value = {
            title: info.event.title,
            content: info.event.extendedProps.content,
            file: info.event.extendedProps.file,
        };
    },
    initialDate: "2023-10-01",
});

const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toISOString().split('T')[0];
}

onBeforeMount(async () => {
    const meetingNotes = await useNotesStore().fetchNotes();
    meetingNotes.forEach((note) => {
        calendarOptions.value.events.push({
            date: formatDate(note.date),
            title: "Group Meeting",
            content: note.content,
        });
    });

    const milestones = await getMilestones();
    milestones.forEach((milestone) => {
        let color = milestone.color;
        let label = milestone.label;
        if (!milestone.color) {
            color = 'orange';
            const date = new Date(milestone.date);
            if (date < new Date()) {
                color = 'green';
            }
        }
        calendarOptions.value.events.push({
            date: formatDate(milestone.date),
            title: label,
            color,
            file: milestone.file,
        });
    });
});
</script>

<style>
.fc-event-main {
    cursor: pointer;
}
</style>