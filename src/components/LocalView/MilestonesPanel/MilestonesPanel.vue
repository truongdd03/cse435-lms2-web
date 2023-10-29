<template>
    <div class="flex justify-content-center mt-5 mb-5">
        <div class="w-6">
            <VCalendar :attributes="attributes" :columns="columns" isDark="true" color="blue" borderless expanded />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, type Ref } from 'vue';
import { useScreens } from 'vue-screen-utils';
import { useNotesStore } from '@/stores/note';
import { getMilestones } from '@/utils/firebase';

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const columns = mapCurrent({ lg: 2 }, 1);

const attributes: Ref<any[]> = ref([
  {
    highlight: true,
    dates: new Date(),
    popover: {
        label: "Today"
    }
  },
  {
    highlight: 'red',
    dates: new Date('October 16, 2023'),
    popover: {
        label: "Meeting w/ Customer"
    }
  }
]);

onBeforeMount(async () => {
    const meetingNotes = await useNotesStore().fetchNotes();
    meetingNotes.forEach((note) => {
        attributes.value.push({
            dot: true,
            dates: new Date(note.date),
            popover: {
                label: "Group Meeting"
            }
        });
    });

    const milestones = await getMilestones();
    milestones.forEach((milestone) => {
        let color = 'yellow';
        const date = new Date(milestone.date);
        if (date < new Date()) {
            color = 'green';
        }
        attributes.value.push({
            highlight: color,
            dates: date,
            popover: {
                label: milestone.label,
            }
        });
    });
});
</script>

<style>
.vc-arrow, .vc-title, .vc-nav-item, .vc-nav-title, .vc-nav-arrow {
    background-color: transparent;
}
</style>