<template>
    <section class="container mx-auto">
        <div class="banner-main">
            <div class="hidden sm:block">
                <img alt="Banner" src="/images/banner-agenda.png" />
            </div>
            <div class="block sm:hidden">
                <img alt="Banner" src="/images/banner-mobile-agenda.png" />
            </div>
        </div>
      <div class="mx-5">

        <div class="my-3">
          <h2 class="mb-3 mt-3">注意事項</h2>
          <ul>
            <li>活動分為：Keynotes、講座及工作坊共三類型。</li>
            <li>使用手機版請左右滑動，查看議程表</li>
          </ul>
        </div>

        <div>
            <table class="min-w-full border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th class="pin text-3xl font-semibold bg-sky-950 text-white w-24"></th>
                    <th class="text-3xl font-semibold text-amber-300 bg-cyan-300/10 min-w-[20%]">會議室 A (401)</th>
                    <th class="text-3xl font-semibold text-lime-300 bg-lime-300/10 min-w-[20%]">會議室 B (402AB)</th>
                    <th class="text-3xl font-semibold text-cyan-500 bg-cyan-500/10 min-w-[20%]">會議室 C (402CD)</th>
                    <th class="text-3xl font-semibold text-fuchsia-500 bg-cyan-500/10 min-w-[20%]">工作坊 (403)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">08:30 - 09:25</th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="4" style="vertical-align: middle;">
                        <h2 class="mb-3 text-xl font-semibold">報到</h2>
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">09:25 - 09:30</th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="4" style="vertical-align: middle;">
                        開場
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">09:30 - 10:15<p class="text-sm mt-2">45 Minutes</p></th>
                  <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="3" style="vertical-align: middle;">
                    <h2 class="mb-3 text-xl font-semibold">開發者體驗 DevEX</h2>
                        Ruddy
                    </td>
                  <td class="bg-cyan-950/20 font-semibold text-fuchsia-500"
                      rowspan="5"
                      style="vertical-align: middle;">
                    重構工作坊<br>Bruce
                  </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">10:15 - 10:30</th>
                  <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="3" style="vertical-align: middle;">
                        Break
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">10:30 - 11:15<p class="text-sm mt-2">45 Minutes</p></th>
                  <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="3" style="vertical-align: middle;">
                        <h2 class="mb-3 text-xl font-semibold"> Panel Discussion</h2>
                    </td>
                </tr>

                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">10:15 - 10:30</th>
                  <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="3" style="vertical-align: middle;">
                        Break
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">11:30 - 12:15<p class="text-sm mt-2">45 Minutes</p></th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'A1' } }">
                            開發者的歹路
                        </router-link>
                        <br>陳明正
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-lime-300" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'B1' } }">
                            Domain-Driven Transformation - how to improve the structure of legacy systems
                        </router-link>
                        <br>Carola Lilienthal
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-cyan-500" style="vertical-align: middle;">
                      <router-link :to="{ name: 'session', params: { id: 'C1' } }">
                        知識精煉：運用社會技術來解決遺留系統中的管理挑戰
                      </router-link>
                      <br>James Wang
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">12:15 - 13:30</th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="3" style="vertical-align: middle;">
                        Break
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">13:30 - 14:15<p class="text-sm mt-2">45 Minutes</p></th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'A2' } }">
                            面對 Legacy Code, 你有哪些選擇?
                        </router-link>
                        <br>Kuma
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-lime-300" style="vertical-align: middle;">
                      <router-link :to="{ name: 'session', params: { id: 'B2' } }">
                        那年走過的彎路
                      </router-link>
                        <br>石其生
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-cyan-500" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'C2' } }">
                            原來開局就一身債！從軟體邊界探索技術債的形成與團隊拓樸的設計
                        </router-link>
                        <br>Augustin
                    </td>
                  <td class="bg-cyan-950/20 font-semibold text-fuchsia-500" rowspan="5"
                      style="vertical-align: middle;">
                    應用架構設計工作坊<br>Arthur
                  </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">14:15 - 14:30</th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="4" style="vertical-align: middle;">
                        Break
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">14:30 - 15:15<p class="text-sm mt-2">45 Minutes</p></th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" style="vertical-align: middle;">
                        領域驅動設計戰術內部物件的協作方式<br>神Q超人
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-lime-300" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'B3' } }">
                            初探領域故事化（Domain Storytelling）—領域驅動的產品價值需求與分析
                        </router-link>
                        <br>Micheal
                    </td>

                    <td class="bg-cyan-950/20 font-semibold text-cyan-500" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'C3' } }">
                            Fostering Socio-Technical Harmony in DDD: Ensuring Effective Collaboration for Evolving Problem Domains
                        </router-link>
                        <br>Kim Kao & Stephen Tung
                    </td>

                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">15:15 - 15:45<p class="text-sm mt-2">30 Minutes</p></th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" colspan="3" style="vertical-align: middle;">
                        Break & 招商時間
                    </td>
                </tr>
                <tr>
                    <th class="pin text-xl font-semibold bg-sky-950 text-white">15:45 - 16:30<p class="text-sm mt-2">45 Minutes</p></th>
                    <td class="bg-cyan-950/20 font-semibold text-amber-300" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'A4' } }">
                            From EventStorming to Event Store passing through BDD
                        </router-link>
                        <br>Alberto Acerbis
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-lime-300" style="vertical-align: middle;">
                        在新專案導入 DDD 的經驗談<br>Fong
                    </td>
                    <td class="bg-cyan-950/20 font-semibold text-cyan-500" style="vertical-align: middle;">
                        <router-link :to="{ name: 'session', params: { id: 'C4' } }">
                            使用者研究該如何理解質性與量化的定位
                        </router-link>
                        <br>Nor
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>

    </section>
</template>

<script>
import agendaData from '../data/agenda-data.ts';
import speakersData from '../data/speakers-data.ts';

export default {
    data() {
        return {
            agendaData: agendaData,
            speakersData: speakersData,
        };
    }
};
</script>

<style scoped>

table {
    border-collapse: collapse;
    border: 0;
    width: 90%;
}

th,
td {
    border: 1px dotted #464d67;
    background-clip: padding-box;
    padding: 0.5rem;
    margin: 0;
    min-width: 22rem;
    vertical-align: top;
}

thead {
    z-index: 5;
    position: relative;
}

thead th {
    position: sticky;
    top: 0;
    background-clip: padding-box;
}

thead .pin,
tbody .pin {
    left: -2px;
    z-index: 6;
    min-width: 10rem;
    text-align: center;
}

tbody th {
    background-clip: padding-box;
}

tbody {
    z-index: 5;
    position: relative;
}

tbody th {
    position: sticky;
    left: 0;
}

tbody td{
    text-align: center;
}
</style>
