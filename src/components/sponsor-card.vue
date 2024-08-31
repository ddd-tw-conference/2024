<template>
    <div class="text-white rounded-lg p-4" style="border: 1px #425AE5">
        <div class="h-32 mx-auto">
            <router-link :to="{ name: 'sponsor', params: { id: sponsor.id } }">
                <img :alt="sponsor.name" :src="getImagePath(sponsor.image)" class="rounded-2xl w-full h-full object-contain">
            </router-link>
        </div>
<!--        <div class="text-center mt-4">-->
<!--            <p class="font-bold text-lg">{{ sponsor.name }}</p>-->
<!--            <p v-for="b in sponsor.description">{{ b }}</p>-->
<!--        </div>-->
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { sponsorModel } from "@/data/sponsors";

const props = defineProps<{
    sponsor: sponsorModel
}>();

const getImagePath = (image) => {
    return new URL(`../assets/${ image }`, import.meta.url).href;
};

</script>

<style scoped>

</style>