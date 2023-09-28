<template>
    <Card>
        <template #title>About Us</template>
        <template #content>
            <Carousel :value="members" :numVisible="4" :numScroll="1" :responsive-options="responsiveOptions" :autoplay-interval="3000" :circular="true">
                <template #item="slotProps">
                    <div class="border-1 border-primary border-round m-2 text-center py-5 px-3">
                        <div class="mb-3">
                            <Avatar :image="slotProps.data.image" class="mr-2" size="xlarge" shape="circle" />
                        </div>
                        <div>
                            <h3 class="mb-1">{{ slotProps.data.name }}</h3>
                            <p class="mb-1">{{ slotProps.data.role }}</p>
                        </div>
                    </div>
                </template>
            </Carousel>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

import Don from '/assets/images/don.jpeg';

const members = ref([
    {
        name: "Don Truong",
        image: Don,
        role: "Artifacts Manager"
    },
    {
        name: "Evan Stanislaw",
        image: "",
    },
    {
        name: "Joanna Zhan",
        image: "",
    },
    {
        name: "Katelyn Hurst",
        image: "",
    },
    {
        name: "Kimberly Jackson",
        image: "",
    },
]);

const responsiveOptions = ref([
    {
        breakpoint: '1200px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>