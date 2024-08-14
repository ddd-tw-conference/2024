<template>
    <div class="text-white rounded-lg p-4" style="border: 2px solid #425AE5">
        <img :alt="name" src='/images/speaker-avatar.png' class="rounded-2xl mx-auto">
        <div class="text-center mt-4">
            <p class="font-bold text-lg">{{ name }}</p>
<!--            <p class="title">{{ title }}</p>-->
        </div>
    </div>
</template>

<script setup>
// 元件屬性
const props = defineProps({
    avatar: {
        type: String,
        default: '/images/speaker-avatar.png' // 預設圖片網址
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

</style>