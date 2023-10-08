<template>
    <h2 class="text-center m-3">Prototype</h2>
    <div class="flex align-items-center justify-content-center">
        <div style="width: 802px; height: 602px;" class="border-1 border-primary">
            <VueUnity :unity="unityContext" width="800" height="600" />
        </div>
    </div>

</template>

<script setup lang="ts">
import UnityWebgl from 'unity-webgl';
import VueUnity from 'unity-webgl/vue'

const get = (url: string) => {
    return 'https://cse.msu.edu/~truongd1' + url;
}

const unityContext = new UnityWebgl({
    loaderUrl: get('/assets/lms-prototype/Build/lms-prototype.loader.js'),
    dataUrl: get('/assets/lms-prototype/Build/lms-prototype.data'),
    frameworkUrl: get('/assets/lms-prototype/Build/lms-prototype.framework.js'),
    codeUrl: get('/assets/lms-prototype/Build/lms-prototype.wasm'),
})
</script>