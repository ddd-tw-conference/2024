<template>
    <div class="text-white rounded-lg p-4" style="border: 2px solid #425AE5">
      <div class="w-60 h-60 mx-auto">
            <router-link :to="{ name: 'speaker', params: { id: speaker.id } }">
              <img :alt="speaker.name" :src="getImagePath(speaker.image)"
                   class="rounded-2xl w-full h-full object-cover">
            </router-link>
        </div>
        <div class="text-center mt-4">
            <p class="font-bold text-lg">{{ speaker.name }}</p>
            <p v-for="b in speaker.bio">{{b}}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
import {speakerModel} from '@/models/speakerModel';

const props = defineProps<{
    speaker: speakerModel
}>();

const getImagePath = (image) => {
    return new URL(`../assets/${ image }`, import.meta.url).href;
};

</script>

<style scoped>

</style>