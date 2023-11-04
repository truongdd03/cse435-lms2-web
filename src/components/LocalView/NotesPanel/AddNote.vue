<template>
    <div class="wrapper">
        <Card class="popup">
            <template #title>
                <span class="text-center">Add Note</span>
            </template>
            <template #content>
                <div class="flex align-items-center mb-3">
                    <div class="flex align-items-center">
                        <h3 class="mr-4">Date: </h3>
                        <Calendar v-model="date" showIcon dateFormat="dd/mm/yy" />
                    </div>
                    <div class="flex ml-auto align-items-center">
                        <h3 class="mr-4">Time: </h3>
                        <InputNumber v-model="time" inputId="integeronly" />
                    </div>
                </div>
                <div>
                    <Editor v-model="content" editorStyle="height: 320px" />
                </div>
            </template>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button icon="pi pi-check" label="Save" @click="save" />
                    <Button icon="pi pi-times" label="Cancel" severity="secondary" class="ml-4" @click="close" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import Editor from 'primevue/editor';
import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';
import { updateRemote } from '../../../utils/firebase';

const emits = defineEmits(["close", "save"]);

const date = ref();
const time = ref(0);
const content = ref(`<p><strong>Agenda:</strong></p><ul><li> ...</li></ul><p><br></p><p><strong>Minutes:</strong></p><ul><li>...</li></ul><p><br></p><p><strong>Milestones:</strong></p><ul><li>...</li></ul><p><br></p><p><strong>Discussion:</strong></p><ul><li>...</li></ul><p><br></p><p><strong>Questions &amp; Answers:</strong></p><ul><li>...</li></ul><p><br></p>`);

const close = () => {
    emits("close");
}

const formatDate = (date: Date) => {
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

const save = async () => {
    if (date.value == null) {
        alert("Date is missing!!");
        return;
    }
    try {
        await updateRemote(formatDate(date.value), content.value, time.value);
        emits("save");
        close();
    } catch (e) {
        window.alert("Errors when uploading note: " + e);
    }
}
</script>

<style scoped>
.wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.8);
    padding: 100px;
}

.popup {
    width: 100%
}
</style>