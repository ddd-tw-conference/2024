<template>
    <section class="container mx-auto">
        <div class="text-center p-6 pt-10 pb-10 leading-7">
            <img alt="Sponsorship" class="mx-auto h-32" src="/images/corporate-sponsorship.svg" />
            <h2 class="text-4xl my-5 text-center">企業贊助</h2>
            <div class="sm:ml-10 mb-10 leading-7 text-center">
                <p class="mb-6">
                    DDDTW 社群致力於推廣 Domain-Driven Design
                    此一風行全球的方法論在臺灣扎根。六年來，我們已經於全臺舉辦了上百場活動，吸引上千人來理解甚至實踐
                    DDD。
                </p>
                <p class="mb-6">
                    台灣領域驅動設計社群將於 2024/09/13(五)
                    舉辦第四屆「臺灣領域驅動設計年會」，今年年會的主題為：系統設計與社會技術年會（System
                    Design & Socio-technical Conference）。 圍繞「遺留工作負載（legacy
                    workloads）」和現代應用程式的演變，邀請大家共同探討這些工作負載在當今商業環境中所帶來的挑戰和機遇。
                    討論遺留工作負載的演進，以及如何應對它們的變化，並探索系統設計的複雜性，重點考慮社會技術因素對軟體開發決策和執行的影響。期待深入探討企業決策者和一線執行團隊之間的合作方式，以實現系統設計和開發的目標。
                    歡迎贊助我們，讓技術帶領業務前進！
                </p>
            </div>

            <div>
                <h2 class="flex pb-3 gap-2 justify-center">
                    <img alt="ICON of golds sponsors" src="/images/golds-sponsors.svg" />
                    <span class="text-3xl">黃金贊助商</span>
                    <img alt="ICON of golds sponsors" src="/images/golds-sponsors.svg" />
                </h2>
                <div class="flex justify-center gap-4 mb-4">
                    <sponsor-card v-for="sponsor in goldSponsors" :sponsor="sponsor" />
                </div>
            </div>
            <div>
                <h2 class="flex pb-3 gap-2 justify-center">
                    <img alt="ICON of silver sponsors" src="/images/silver-sponsors.svg" />
                    <span class="text-3xl">銀級贊助商</span>
                    <img alt="ICON of silver sponsors" src="/images/silver-sponsors.svg" />
                </h2>
                <div class="flex justify-center gap-4 mb-4">
                    <sponsor-card v-for="sponsor in silverSponsors" :sponsor="sponsor" />
                </div>
            </div>
            <div>
                <h2 class="flex pb-3 gap-2 justify-center">
                    <img alt="ICON of special sponsors" src="/images/special-sponsors.svg" />
                    <span class="text-3xl">特別贊助</span>
                    <img alt="ICON of special sponsors" src="/images/special-sponsors.svg" />
                </h2>
                <div class="flex justify-center gap-4 mb-4">
                    <sponsor-card v-for="sponsor in specialSponsors" :sponsor="sponsor" />
                </div>
            </div>

            <div class="text-center pt-30 pb-10">
                <a class="bg-cyan-500 hover:bg-cyan-600 mx-auto rounded pt-2 pb-2 pl-5 pr-5" href="https://sharing.ddd-tw.com/2024DDDTWconf_sponsorship_proposal.pdf" target="_blank">
                    企業贊助
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import sponsorsData from "@/data/sponsors";
import SponsorCard from "@/components/sponsor-card.vue";

const goldSponsors = ref(sponsorsData.filter(s => s.level === 'Gold'));
const silverSponsors = ref(sponsorsData.filter(s => s.level === 'Sliver'));
const specialSponsors = ref(sponsorsData.filter(s => s.level === 'Special'));

</script>
