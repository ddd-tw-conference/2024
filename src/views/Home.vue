<template>
    <section class="container mx-auto">
        <div class="banner-main relative z-10">
            <img alt="Banner" src="/images/banner.jpg" />
        </div>
        <div class="region-bg-1">
            <div class="container mx-auto text-center p-6 pt-20">
                <img alt="Logo" class="mx-auto" src="/images/ddd-logo.png" />
                <h2 class="text-4xl my-5 text-center">2024 DDD 年會主題</h2>
                <p>
                    今年主題爲「系統設計與社會技術年會（System Design & Socio-technical Conference）」。
                </p>
                <p>
                    圍繞「遺留工作負載（legacy
                    workloads）」和現代應用程式的演變，邀請大家共同探討這些工作負載在當今商業環境中所帶來的挑戰和機遇。討論遺留工作負載的演進，以及如何應對它們的變化，並探索系統設計的複雜性，重點考慮社會技術因素對軟體開發決策和執行的影響。期待深入探討企業決策者和一線執行團隊之間的合作方式，以實現系統設計和開發的目標。因此，我們將邀請國內外的領域驅動設計實踐家來分享經驗，希望觀衆不論程度都能從演講、互動環節、工作坊中獲得啟發並產生改變。 </p>
            </div>
        </div>
        <!-- 關於我們 -->
        <div class="region-bg-2">
            <div class="container mx-auto text-center">
                <h2 class="mt-20 flex flex-col md:flex-row md:justify-center font-semibold mb-4 p-5">
                    <span class="text-8xl" style="color: #7CACFF;">「</span>
                    <span class="text-3xl">不單只是吸收知識，<br />更要創造連結與獲得啟發！</span>
                    <span class="text-8xl" style="color: #7CACFF">」</span>
                </h2>
                <div class="p-5 leading-7">
                    <p class="pt-3 pb-3">
                        DDD 自 Eric Evans 於 2003 年出版第一本書以來，已深刻影響全球軟體業界超過 20 年。<br />
                        隨着業務需求複雜化與微服務架構的熱潮， DDD 也成爲各種技術與軟體設計的指導原則。在技術實踐以外，<br/> DDD
                        更關乎團隊文化與心態的轉變：如何實現業務與 IT 的共同目標、如何讓技術承接上業務驅動的改變，甚至讓技術帶領業務前進！
                    </p>
                </div>
                <article class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 text-center leading-7">
                        <img alt="Light ICON" class="mx-auto" src="/images/light.png" />
                        <h2 class="pt-4 mb-4 font-semibold text-xl">業務驅動改變</h2>
                        <p>
                            企業在市場競爭中必須時時改變策略，但如何進行全盤思考卻往往成為一大挑戰。
                            我們追求更好的協作方式，讓企業戰略思維能夠落地於技術實踐，並確保變革的投資能夠產出豐美的果實！
                        </p>
                    </div>

                    <div class="p-6 text-center leading-7">
                        <img alt="Book ICON" class="mx-auto" src="/images/book.png" />
                        <h2 class="pt-4 mb-4 font-semibold text-xl">認識 DDD 戰略思維</h2>
                        <p>
                            DDD
                            以高層次的戰略思維為指引，透過一系列實踐方法讓技術架構銜能夠接上業務的發展，為組織提供業務變化背後的技術基礎支持並帶來創新的可能性。
                        </p>
                    </div>

                    <div class="p-6 text-center leading-7">
                        <img alt="Hit ICON" class="mx-auto" src="/images/hit.png" />
                        <h2 class="pt-4 mb-4 font-semibold text-xl">業務與 IT 的共同目標</h2>
                        <p>
                            成功的產品需要明確的共同目標。 DDD
                            能夠協助衆多產品利益關係人建立共同目標,透過共同語言確保軟體實踐達成商業目標。
                        </p>
                    </div>
                </article>
            </div>
        </div>
        <!-- 企業贊助 -->
        <div id="sponsors" class="p-6 pt-20 region-bg-1">
            <div class="container mx-auto">
                <img alt="Sponsorship" class="mx-auto" src="/images/corporate-sponsorship.svg" />
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
                <div class="text-center pt-30 pb-10">
                    <a class="bg-cyan-500 hover:bg-cyan-600 mx-auto rounded pt-2 pb-2 pl-5 pr-5" href="https://sharing.ddd-tw.com/2024DDDTWconf_sponsorship_proposal.pdf" target="_blank">
                        企業贊助
                    </a>
                </div>
            </div>
        </div>

        <!-- 志工招募 -->
        <div class="region-bg-2">

            <div class="text-center p-6 pt-10 pb-10 leading-7">
                <img alt="Volunteer" class="mx-auto" src="/images/volunteer.svg" />
                <h2 class="text-4xl my-5 text-center">志工團隊招募中</h2>
                <p class="text-xl">
                    每一次的活動都需要志工夥伴貢獻專長來讓活動順利進行，如果對 DDD 有興趣，歡迎報名加入志工！
                </p>
            </div>
            <div class="text-center pt-10 pb-10">
                <a class="bg-cyan-500 hover:bg-cyan-600 mx-auto rounded pt-2 pb-2 pl-5 pr-5"
                   href="https://docs.google.com/forms/d/1Xlaitcjqt8UyugU0RinvCkZLiOaU1jPE8zxTIp_VypI/viewform?edit_requested=true"
                   target="_blank">
                    加入志工
                </a>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>

<style scoped>

.region-bg-1 {
    background-color: #112E78;
}

.region-bg-2 {
    background-color: #092262;
}

</style>
