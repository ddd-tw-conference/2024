// speakersData.js
import { sessionModel } from "../models/sessionModel";

const agendaData: sessionModel[] = [
    {
        id: 'A1',
        topic: '開發者的歹路',
        time: '11:30 - 12:15',
        session: 'A',
        speaker: ['陳明正'],
        level: '入門',
        description: ['一些經歷過的案例與解決(或未能解決的原因)']
    },
    {
        id: 'A2',
        topic: '面對 Legacy Code, 你有哪些選擇?',
        time: '09:00 - 09:45',
        session: 'A',
        speaker: ['Kumn'],
        level: '入門',
        description: ['工作上的 Legacy Code，應該是跟需求的改變一樣討厭吧？更常見的，其實是需求就那麼剛好得改 Legacy Code 的內容。有時候真的很想整組砍掉重寫，但「你知道，我知道，獨眼龍也知道」，砍掉重寫的結果，也就只是重演一遍當初這份 Legacy Code 的生產過程而已。可憐哪！',
            '問題來了，那不重寫，又有修改需求，這時到底 Legacy Code 要不要動、何時動、 如何動？難道又要（像以前一樣），放下自尊，使出「複製貼上改一改」、「加個 if 保護舊邏輯」兩大絕學？',
            '這次，我們從真實的案例與情境出發，共同針對工作上會發生的情境，一一探討上開問題。不求能用 40 分鐘解決各位開發上的所有疑難雜症，但期待至少提供各位在面對 Legacy Code 的修改需求時，能拿出來用的思考方向。'],
    },
    {
        id: 'C2',
        topic: '原來開局就一身債！從軟體邊界探索技術債的形成與團隊拓樸的設計',
        time: '13:30 - 14:15',
        session: 'A',
        speaker: ['Augustin'],
        level: '入門',
        description: ['此次分享我們將從軟體天然邊界和團隊結構來探索看不見卻痛得很實在的技術債務問題，也將帶領大家了解團隊拓樸的概念和四種基本團隊類型。',
            '據此，更進一步地了解如何降低團隊結構對於技術債務累積的影響，並且探討構建團隊有效協作的方式來改善債務的累積。']
    },
    {
        id: 'C3',
        topic: 'Fostering Socio-Technical Harmony in DDD: Ensuring Effective Collaboration for Evolving Problem Domains',
        time: '14:30 - 15:15',
        session: 'C',
        speaker: ['Kim Kao', 'Stephen Tung'],
        level: '入門',
        description: ['In the rapidly evolving landscape of software development, the significance of socio-technical aspects cannot be overstated. This session delves into the necessity for technical professionals to engage in meaningful social interactions and collaboration with stakeholders. By emphasizing the socio-technical approach, we ensure that our efforts in building systems are aligned with the true needs of the problem domain. Understanding and maintaining a shared language with stakeholders is crucial for creating systems that effectively solve real-world problems.',
            '',
            'We will explore how adopting socio-technical practices enhances Domain-Driven Design (DDD) implementation with Event Sourcing. Using a shared office rental process as an example, we will highlight the role of domain events in facilitating these interactions. Attendees will gain insights into how socio-technical harmony and Event Sourcing contribute to the successful evolution of problem domains, enabling more responsive and resilient system designs.'
        ]
    },
    {
        id: 'C4',
        topic: '使用者研究該如何理解質性與量化的定位',
        time: '15:40 - 16:30',
        session: 'C',
        speaker: ['Nor'],
        level: '入門',
        description: ['使用者研究在一個商業專案中，常常會居於不被理解常被曲解的角色，因而無法在產品服務開發上，適時地提供參考佐證，這場分享將會針對使用者研究可以處理的範圍進行說明。',
            '1. 質性量化哪裡不同。',
            '2. 質性的切入點',
            '3. 量化的切入點',
            '4. 合宜的進行使用者研究']
    },
    {
        id: 'A4',
        topic: 'From EventStorming to Event Store passing through BDD',
        time: '15:40 - 16:30',
        session: 'A',
        speaker: ['Alberto Acerbis'],
        level: '入門',
        description: []
    },
    {
        id: 'B3',
        topic: 'Domain Storytelling introduction',
        time: '14:30 - 15:15',
        session: 'B',
        speaker: ['Micheal'],
        level: '入門',
        description: ['1.現今多變的市場，已經無法以梳理客戶要求流程，客戶需求需要挖掘與探索，以找出產品價值。 ',
            '2. 過往以資料驅動思維的系統分析，已無法面對商業需求及模式快速轉變與迭代，取而代之的是領域驅動的思維。',
            '領域故事化正是可在產品設計與系統開發上無縫實現以上二點的流程與方法。',
            '•介紹Domain-Driven與Data-Driven的差異與重要性',
            '•領域故事化如何有跡可尋的探索產品價值需求分析',
            '•領域故事化如何順理成章的轉化領域模型為系統設計']
    },
];

export default agendaData;
