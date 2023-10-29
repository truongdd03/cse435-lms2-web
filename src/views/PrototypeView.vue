<template>
    <h2 class="text-center m-3">Prototype</h2>
    <div class="flex align-items-center justify-content-center">
        <div style="width: 802px; height: 602px; position: relative;" class="border-1 border-primary">
            <div class="progressBar flex align-items-center justify-content-center" v-if="showSpinner">
                <ProgressSpinner />
            </div>
            <VueUnity :unity="unityContext" width="800" height="600" />
        </div>
    </div>

</template>

<script setup lang="ts">
import UnityWebgl from 'unity-webgl';
import VueUnity from 'unity-webgl/vue'
import ProgressSpinner from 'primevue/progressspinner';

import { ref } from 'vue';

const showSpinner = ref(true);

const get = (url: string) => {
    // return url;
    return 'https://cse.msu.edu/~truongd1' + url;
}

const unityContext = new UnityWebgl({
    loaderUrl: get('/assets/lms-prototype/Build/lms-prototype.loader.js'),
    dataUrl: get('/assets/lms-prototype/Build/lms-prototype.data'),
    frameworkUrl: get('/assets/lms-prototype/Build/lms-prototype.framework.js'),
    codeUrl: get('/assets/lms-prototype/Build/lms-prototype.wasm'),
});

unityContext.on('mounted', () => showSpinner.value = false)
</script>

<style scoped>
.progressBar {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.444);
}
</style>

<style>
.p-progress-spinner-circle {
    color: white;
}
</style>