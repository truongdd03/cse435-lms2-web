<template>
    <Menubar :model="items">
        <template #start>
            <p class="ml-3 text-3xl font-bold cursor-pointer" @click="navigate('Home')">Lane Management System</p>
        </template>
        <template #item="{label }">
            <div class="cursor-pointer" @click="navigate(label as string)">
                <Button style="width: 100%;" :label="(label as string)" text :icon="getIcon(label as string)"></Button>
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
        label: 'Home',
    },
    {
        label: 'Prototype',
    },
    {
        label: 'Notes',
    }
]);

const navigate = (to: string) => {
    router.push({path: to.toLocaleLowerCase()});
}

const getIcon = (label: string) => {
    if (label == 'Home') {
        return 'pi pi-home';
    } else if (label == 'Notes') {
        return 'pi pi-lock';
    } else if (label == 'Prototype') {
        return 'pi pi-car';
    }
}
</script>

<style>
.p-menubar-root-list, .p-menubar-button {
  position: absolute;
  right: 30px;
}

.p-button-icon {
    margin-right: 10px;
}
</style>