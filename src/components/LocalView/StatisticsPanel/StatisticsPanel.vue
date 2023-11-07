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
import { getCommitDates } from '@/utils/github';

const meetingNotes: Ref<Note[]> = ref([]);
const meetingTime = ref(0);

const chartData = ref();
const chartOptions = ref();

onMounted(async () => {
    meetingNotes.value = await useNotesStore().fetchNotes();
    const commitDates = await getCommitDates();

    chartData.value = setChartData(commitDates);

    chartOptions.value = setChartOptions();
});

const isSameDay = (dateA: Date, dateB: Date) => {
    return dateA.getDate() == dateB.getDate() && dateA.getMonth() == dateB.getMonth() && dateA.getFullYear() == dateB.getFullYear();
}

const setChartData = (commitDates: string[]) => {
    // Find time interval of both datasets
    const startDate = new Date(commitDates[commitDates.length - 1]);
    let endDate = new Date(meetingNotes.value[0].date);
    let lastCommitDate = new Date(commitDates[0]);
    if (endDate < lastCommitDate) {
        endDate = lastCommitDate;
    }
    endDate = new Date(endDate.setDate(endDate.getDate() + 1));

    const labels: string[] = [];
    const meetingData: number[] = [];
    const commitData: number[] = [];

    let loop = startDate;
    // Index in meetings
    let mId = meetingNotes.value.length - 1;
    // Index in commits
    let cId = commitDates.length - 1;

    while (loop <= endDate) {
        // Get label
        labels.push(loop.getMonth() + '/' + loop.getDate() + '/' + loop.getFullYear());

        // Get data for meeting time
        if (mId >= 0 && isSameDay(loop, new Date(meetingNotes.value[mId].date))) {
            meetingData.push(meetingNotes.value[mId].time);
            meetingTime.value += meetingNotes.value[mId].time;
            mId -= 1;
        } else {
            meetingData.push(0);
        }

        // Get data for website commit
        let cnt = 0;
        while (cId >= 0 && isSameDay(loop, new Date(commitDates[cId]))) {
            cnt += 1;
            cId -= 1;
        }
        commitData.push(cnt);

        const newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
    }

    const documentStyle = getComputedStyle(document.documentElement);
    return {
        labels: labels,
        datasets: [
            {
                label: 'Meeting Time (mins)',
                data: meetingData,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                yAxisID: 'time',
                tension: 0.4
            },
            {
                type: 'bar',
                label: 'Website Commits',
                data: commitData,
                backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                borderWidth: 2,
                yAxisID: 'commits',
            }
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
            time: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            commits: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>