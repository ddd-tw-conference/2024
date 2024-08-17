<template>
    <section class="container mx-auto">
        <div class="banner-main">
            <div class="hidden sm:block">
                <img alt="Banner" src="/images/banner-session.png" />
            </div>
            <div class="block sm:hidden">
                <img alt="Banner" src="/images/banner-session.png" />
            </div>
        </div>
        <div class="rounded-lg p-6 w-9/12 m-auto text-white">
            <h2 class="text-3xl mb-6 mt-3">{{ session.topic }}</h2>
            <!-- 基本資訊 -->
            <div class="mb-6 text-blue-200">

                <div class="text-xl font-bold mb-4">
                    <span class="mr-6">講者</span>
                    <span>{{ session.speaker.join('、') }}</span>
                </div>
                <div class="text-xl font-bold mb-4">
                    <span class="mr-6">時間</span>
                    <span>{{ session.time }}</span>
                </div>
                <div class="text-xl font-bold mb-4">
                    <span class=" mr-6">地點</span>
                    <span>{{ session.session }}</span>
                </div>
                <div class="text-xl font-bold mb-4">
                    <span class="mr-6">難度</span>
                    <span>{{ session.level }}</span>
                </div>

            </div>

            <hr class="border-1 border-white mb-6">

            <!-- 議程介紹 -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold mb-4">議程介紹</h3>
                <p v-for="desc in session.description" class="text-blue-200">{{ desc }}</p>
            </div>

            <div class="flex justify-center">
                <!-- 回到上一個畫面 -->
                <button class="hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white"
                        @click="goBack">
                        返回
                </button>
            </div>
        </div>

    </section>
</template>

<script lang="ts" setup>

import agendaData from "@/data/agenda-data";
import { sessionModel } from "@/models/sessionModel";
import { useRoute, useRouter } from "vue-router";

// 取得 router 的參數
const route = useRoute();
const id = route.params.id;
const session: sessionModel = agendaData.find(s => s.id == id);

const router = useRouter();
const goBack = () => {
    router.back();
}
</script>

<style scoped>

</style>