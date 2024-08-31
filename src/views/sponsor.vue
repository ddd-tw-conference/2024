<template>
    <section class="container mx-auto">
        <div class="flex items-center justify-center p-4">
            <div class="rounded-lg p-6 w-9/12">
                <div class="flex items-center mb-6 ">
                    <div class="h-28 rounded-lg mr-8 flex-shrink-0">
                        <img :alt="sponsor.name" :src="getImagePath(sponsor.image)" class="rounded-2xl w-full h-full object-contain">
                    </div>
                    <div class="flex-grow text-white">
                        <div class="flex items-center text-5xl ">
                            <h2 class="font-bold">{{ sponsor.name }}</h2>
                        </div>
                    </div>
                </div>

                <div class="text-white my-6">
                    <h3 class="text-2xl font-bold mb-4">簡介</h3>
                    <p v-for="b in sponsor.description">{{ b }}</p>
                </div>

                <div v-if="sponsor.recruitment" class="my-6">
                    <h3 class="text-2xl font-bold mb-4">徵才資訊</h3>
                    <p>{{sponsor.recruitment.description}}</p>
                    <a :href="sponsor.recruitment.link" target="_blank" class="text-blue-200">{{sponsor.recruitment.link}}</a>
                </div>

                <div class="flex justify-center">
                    <button class="hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white"
                            @click="goBack">
                        返回
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script lang="ts" setup>

import speakersData, { sponsorModel } from "@/data/sponsors";
import { useRoute, useRouter } from "vue-router";

// 取得 router 的參數
const route = useRoute();
const sponsorId = route.params.id;

const sponsor: sponsorModel = speakersData.find(s => s.id == sponsorId);
const getImagePath = (image) => {
    return new URL(`../assets/${ image }`, import.meta.url).href;
};

const router = useRouter();
const goBack = () => {
    router.back();
}
</script>

<style scoped>

</style>