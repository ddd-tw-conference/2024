<template>
    <section class="container mx-auto">
        <div class="banner-main">
            <div class="hidden sm:block">
                <img alt="Banner" src="/images/banner-speakers.png" />
            </div>
            <div class="block sm:hidden">
                <img alt="Banner" src="/images/banner-mobile-speakers.png" />
            </div>
        </div>
        <div class="pt-10 pb-5 leading-7">
            <h2 class="text-2xl font-bold mb-4">講者介紹</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <speaker-card v-for="speaker in speakers" :speaker="speaker" />
            </div>
            <p class="text-white text-center">更多講者資訊即將公佈，敬請期待！</p>
        </div>
    </section>
</template>

<script lang="ts" setup>

import SpeakerCard from "../components/speaker-card.vue";
import speakersData from "@/data/speakers-data";
import { speakerModel } from "@/models/speakerModel";

const speakers: speakerModel[] = speakersData;

</script>

<style scoped>

</style>