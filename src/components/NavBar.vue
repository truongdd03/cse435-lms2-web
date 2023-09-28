<template>
    <Menubar :model="items">
        <template #start>
            <p class="text-xl">Lane Management System</p>
        </template>
        <template #item="{ label }">
            <div class="cursor-pointer" @click="navigate(label as string)">
                <Button style="width: 100%;" :label="(label as string)" text></Button>
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Overview',
    },
    {
        label: 'Resources',
    },
    {
        label: 'Notes',
    }
]);

const navigate = (to: string) => {
    router.push({path: to.toLocaleLowerCase()});
}
</script>

<style>
.p-menubar-root-list, .p-menubar-button {
  position: absolute;
  right: 20px;
}
</style>