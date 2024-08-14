<template>
    <section class="container mx-auto">
        <div class="banner-main">
            <div class="hidden sm:block">
                <img alt="Banner" src="/images/banner-tickets.png" />
            </div>
            <div class="block sm:hidden">
                <img alt="Banner" src="/images/banner-mobile-tickets.png" />
            </div>
        </div>
        <div class="py-10 leading-7">
            <!--            <div class="conference">-->
            <h2 class="text-2xl font-bold mb-4">領域驅動設計台灣 2024 年會 - DDDesign Taiwan Conference 2024</h2>
            <p class="mb-2">
                <span class="mr-2">🕒</span> 2024.09.13 (五) 09:00 - 17:00 (GMT+8)
            </p>
            <p class="mb-6">
                <span class="mr-2">📍</span> 台灣台北市 100 中正區徐州路2號 (台大醫院國際會議中心)
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <ticket-card :active="false" button-text="已結束" price="2,000" ticket-type="早鳥票" title="2024/07/02 - 07/31" />
                <ticket-card :active="true" button-text="立即購票" price="2,500" ticket-type="一般票" title="2024/08/01 - 09/04" />
                <ticket-card :active="false" button-text="尚未開放" price="3,000" ticket-type="晚鳥票" title="2024/09/05 - 09/12" />
                </div>

            <h2 class="text-2xl font-semibold mb-4">年會工作坊 - DDD Workshop</h2>
            <p class="mb-2">
                <span class="mr-2">🕒</span> 2024.09.13 (五) 上午、下午場，共兩場主題
            </p>
            <p class="mb-2">
                <span class="mr-2">📍</span> 台灣台北市 100 中正區徐州路2號 (台大醫院國際會議中心)
            </p>
            <p class="text-sm italic mb-4">* 請先購買年會票券，方可加購工作坊票券</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <ticket-card :active="true" button-text="立即購票" price="800" ticket-type="重構工作坊" title="售完為止" />
                <ticket-card :active="true" button-text="立即購票" price="800" ticket-type="應用架構設計工作坊"
                             title="售完為止" />

            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import TicketCard from '../components/ticket-card.vue'
</script>

<style scoped>
</style>