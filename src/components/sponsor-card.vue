<template>
    <div class="text-white rounded-lg p-4" style="border: 1px #425AE5">
        <div class="h-60 mx-auto">
            <img :alt="sponsor.name" :src="getImagePath(sponsor.image)" class="rounded-2xl w-full h-full object-contain">
        </div>
        <div class="text-center mt-4">
            <p class="font-bold text-lg">{{ sponsor.name }}</p>
            <p v-for="b in sponsor.description">{{ b }}</p>
        </div>
        <div v-if="sponsor.recruitment" class="text-center mt-4">
            <a :href="sponsor.recruitment"
               class="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
               target="_blank">歡迎加入我們</a>
        </div>
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