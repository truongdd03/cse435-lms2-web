<template>
    <Card>
        <template #title>About Us</template>
        <template #content>
            <Carousel :value="members" :numVisible="4" :numScroll="1" :responsive-options="responsiveOptions" :circular="true">
                <template #item="slotProps">
                    <div class="border-1 border-round m-2 text-center py-5 px-3">
                        <div class="mb-2">
                            <img class="avatar border-round" :src="slotProps.data.image" />
                        </div>
                        <div>
                            <Button :label="slotProps.data.name" link @click="openUrl(slotProps.data.url)" />
                            <p style="margin-top: -5px;">{{ slotProps.data.role }}</p>
                        </div>
                    </div>
                </template>
            </Carousel>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

import Don from '/assets/images/don.jpeg';
import Joanna from '/assets/images/joanna.jpeg';
import Kay from '/assets/images/kay.jpeg';
import Evan from '/assets/images/evan.jpeg';
import { openUrl } from '@/utils/scroll';

const members = ref([
    {
        name: "Katelyn Hurst",
        image: Kay,
        role: "Project Manager",
        url: "https://www.linkedin.com/in/katelyn-hurst/"
    },
    {
        name: "Don Truong",
        image: Don,
        role: "Artifacts Manager",
        url: "https://www.linkedin.com/in/dong-truong/"
    },
    {
        name: "Joanna Zhan",
        image: Joanna,
        role: "Customer Liaison",
        url: "https://www.linkedin.com/in/kaijia-zhan-6885b4221/"
    },
    {
        name: "Evan Stanislaw",
        image: Evan,
        role: "Security Manager",
        url: "https://www.linkedin.com/in/evan-stanislaw/"
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
        breakpoint: '800px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<style scoped>
.avatar {
    height: 100px;
    width: 100px;
    object-fit: cover;
}
</style>