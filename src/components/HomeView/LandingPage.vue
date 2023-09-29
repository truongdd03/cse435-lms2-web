<template>
    <div class="wrapper">
        <div class="image p-5">
            <div>
                <h1>Lane Management System</h1>
                <h3 class="text-center mt-2">MSU - CSE 435 - LMS2</h3>
            </div>
        </div>

        <div class="icon-wrapper" id="haha">
            <i class="pi pi-arrow-circle-down cursor-pointer" style="font-size: 3rem" @click="scroll('projectDescription')"></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { scroll } from '../../utils/scroll';
</script>

<style scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -75px;
}

.image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 100%;
    background: linear-gradient( rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8) ), url('./background.jpeg');
    background-repeat: no-repeat;
    background-position:center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.icon-wrapper {
    width: 100%;
    position: absolute;
    bottom: 25px;
    text-align: center;
}
</style>