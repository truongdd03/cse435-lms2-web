<template>
    <div>
        <Button class="block" icon="pi pi-external-link" label="List of Requirements" link @click="openPDF(Requirements)" />
        <Button class="block" icon="pi pi-external-link" label="Customer Meeting Notes" link @click="openPDF(CustomerMeeting)" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

import Requirements from '/assets/CSE435_LMS2_requirements.pdf';
import CustomerMeeting from '/assets/LMS2_List_of_Questions.pdf';

const openPDF = (file: string) => {
    window.open(file);
}
</script>