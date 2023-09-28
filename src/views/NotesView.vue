<template>
    <div class="flex justify-content-center align-items-center m-3">
        <h2 style="order: 1">Meeting Notes</h2>
        <Button class="ml-auto" style="order: 2" label="New Note"></Button>
    </div>
    <Accordion :activeIndex="0">
        <AccordionTab>
            <template #header>
                <i class="pi pi-calendar" style="font-size: 1.3rem"></i>
                <h3 class="ml-2 mr-2">09/28/2023</h3>
            </template>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionTab>
        <AccordionTab>
            <template #header>
                <i class="pi pi-calendar" style="font-size: 1.3rem"></i>
                <h3 class="ml-2 mr-2">09/28/2023</h3>
            </template>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionTab>
        <AccordionTab>
            <template #header>
                <i class="pi pi-calendar" style="font-size: 1.3rem"></i>
                <h3 class="ml-2 mr-2">09/28/2023</h3>
            </template>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionTab>
    </Accordion>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
</script>
