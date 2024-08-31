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
        <div class="pt-10 pb-5 leading-7">
            <h2 class="text-2xl font-bold mb-4">領域驅動設計台灣 2024 年會 - DDDesign Taiwan Conference 2024</h2>
            <p class="mb-2">
                <span class="mr-2">🕒</span> 2024.09.13 (五) 09:00 - 17:00 (GMT+8)
            </p>
            <p class="mb-6">
                <span class="mr-2">📍</span> 台灣台北市 100 中正區徐州路2號 (台大醫院國際會議中心)
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <ticket-card begin="2024/07/02" end="2024/07/31" price="2,000" ticket-type="早鳥票" />
                <ticket-card begin="2024/08/01" end="2024/09/04" price="2,500" ticket-type="一般票" />
                <ticket-card begin="2024/09/05" end="2024/09/12" price="3,000" ticket-type="晚鳥票" />
                <ticket-card begin="2024/08/26" end="2024/09/12" price="2,375 x 3" ticket-type="三人團體票" />
                <ticket-card begin="2024/08/26" end="2024/09/12" price="2,250 x 5" ticket-type="五人團體票" />
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

        <!-- 加入分割線 -->
        <hr class="border-t-2 border-gray-300 mb-8" />

        <div class="p-2 rounded-lg">
            <h2 class="text-xl font-bold mb-4">注意事項：</h2>
            <ul class="list-disc pl-6 mb-8">
                <li class="mb-2">
                    主辦單位會在入場的時候檢查 Accupass 的報名 QR Code，與會者可以事先準備好，以節省入場時間。
                </li>
                <li class="mb-2">
                    入場時，會進行手部的酒精消毒。
                </li>
                <li>
                    參加現場活動時，活動中如有呼吸道不適，請配戴口罩，特別是與其他與會同學進行對話的時候。
                </li>
            </ul>

            <!-- Ticket Purchasing Instructions Section -->
            <h2 class="text-xl font-bold mb-4">購票須知：</h2>
            <ul class="list-disc pl-6">
                <li class="mb-2">
                    本活動委由 Accupass 代為處理售票事宜。
                </li>
                <li class="mb-2">
                    統一開立電子發票，將於活動後一週內以 Email 寄送。
                </li>
                <li class="mb-2">
                    若遇不可抗拒因素，將延期舉辦並另行通知時間。主辦單位保留活動之解釋及變更權利。
                </li>
                <li class="mb-2">
                    主辦單位得保留活動議程及講師之變更權利，議題與講師視實際邀約而有所變動，請以網頁最新資訊為準。
                </li>
                <li>
                    退費辦法：本活動委由 Accupass 代為處理退票退款事宜，退票需於活動前 7 天提出，主辦單位將收取手續費後退還票款，活動前 7
                    天內恕不接受退票。
                </li>
            </ul>
        </div>

    </section>
</template>

<script lang="ts" setup>
import TicketCard from '../components/ticket-card.vue'
</script>

<style scoped>
</style>