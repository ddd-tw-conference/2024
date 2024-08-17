<template>
    <section class="container mx-auto">
        <div class="flex items-center justify-center p-4">
            <div class="rounded-lg p-6 w-9/12">
                <div class="flex items-start mb-6 ">
                    <div class="w-60 h-60 rounded-lg mr-8 flex-shrink-0">
                        <img :alt='speaker.name' :src='getImagePath(speaker.image)' class="rounded-2xl">
                    </div>
                    <div class="flex-grow text-white">
                        <div class="flex items-center mb-6 text-5xl ">
                            <h2 class="font-bold">{{ speaker.name }}</h2>
                        </div>
                        <div class="text-white mb-6">
                            <p v-for="intro in speaker.intro" class="text-blue-200">
                                {{ intro }}
                            </p>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-2xl font-bold mb-4">講座</h3>
                            <div class="flex items-center">
                                ▶︎<router-link :to="{ name: 'session', params: { id: speaker.sessionId } }"
                                             class="text-blue-200 mx-2">
                                    {{ speaker.epic }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white"
                            @click="this.$router.go(-1)">
                        返回
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script lang="ts" setup>

import speakersData from "@/data/speakers-data";
import { speakerModel } from "@/models/speakerModel";
import { useRoute } from "vue-router";

// 取得 router 的參數
const router = useRoute();
const speakerId = router.params.id;

const speaker: speakerModel = speakersData.find(s => s.id == speakerId);
const getImagePath = (image) => {
    return new URL(`../assets/${ image }`, import.meta.url).href;
};
</script>

<style scoped>

</style>