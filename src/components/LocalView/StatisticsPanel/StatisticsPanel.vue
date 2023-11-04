<template>
    <div class="flex m-3 mb-3">
        <h3><b>Number of Meetings:</b> {{ meetingNotes.length }}</h3>
        <h3 class="ml-auto"><b>Total Meeting Time:</b> {{ meetingTime }} (mins)</h3>
    </div>
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
</template>

<script setup lang="ts">
import Chart from 'primevue/chart';

import { ref, onMounted, type Ref } from "vue";
import { useNotesStore } from '@/stores/note';
import type { Note } from '@/utils/firebase';

const meetingNotes: Ref<Note[]> = ref([]);
const meetingTime = ref(0);

onMounted(async () => {
    meetingNotes.value = await useNotesStore().fetchNotes();

    chartData.value = setChartData();

    console.log(chartData.value);
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    const len = meetingNotes.value.length;
    const labels: string[] = [];
    const data: number[] = [];
    
    let loop = new Date(meetingNotes.value[len - 1].date);
    // Index in meetings
    let id = len - 1;
    // Meetings is sort descreasing by date, so the meeting at index 0 is most recent.
    const end = new Date(meetingNotes.value[0].date);

    while (loop <= end) {
        labels.push(loop.toISOString().split('T')[0]);
        if (loop.getTime() == (new Date(meetingNotes.value[id].date).getTime())) {
            data.push(meetingNotes.value[id].time);
            meetingTime.value += meetingNotes.value[id].time;
            id -= 1;
        } else {
            data.push(0);
        }
        const newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
    }


    return {
        labels: labels,
        datasets: [
            {
                label: 'Meeting Time (mins)',
                data: data,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>