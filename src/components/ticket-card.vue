<template>
    <div :style="{ border: active ? '3px solid #6077FF' : '3px solid #A0A0A0' }" class="bg-white rounded-lg">
        <div :class="['text-sm rounded-t p-2 text-center', { 'bg-gray-500': !active, 'bg-blue-700': active }]">
            {{ title }}
        </div>
        <div :style="{color: active? '#112E78': '#A0A0A0'}" class="text-center font-bold text-4xl my-4 ">
            {{ ticketType }}
        </div>
        <div :class="['text-center text-3xl mb-6 font-bold', { 'text-gray-400': !active, 'text-black': active }]">
            $ {{ price }}
        </div>
        <div class="flex justify-center mb-6">
            <button v-if="active" class="bg-blue-500 text-white text-sm py-2 px-6 rounded-full focus:outline-none hover:bg-blue-600">
                <a href="https://www.accupass.com/eflow/ticket/2406080625301381404160" rel="noopener noreferrer" target="_blank">
                    {{ buttonText }}
                </a>
            </button>
            <div v-else class="bg-gray-500 text-white text-sm py-2 px-6 rounded-full">
                {{ buttonText }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue';

interface Props {
    ticketType: string;
    price: string;
    begin: string;
    end: string;
}

const props = defineProps<Props>();

const buttonText = ref('');
const active = ref(false);
const title = `${props.begin} ~ ${props.end}`;

onMounted(() => {
    const now = new Date();

    const ticketBegin = new Date(props.begin);
    const ticketEnd = new Date(props.end);

    if (now < ticketBegin) {
        buttonText.value = '尚未開賣';
        active.value = false;
    } else if (now > ticketEnd) {
        buttonText.value = '已結束';
        active.value = false;
    } else {
        buttonText.value = '立即購票';
        active.value = true;
    }
});

</script>
