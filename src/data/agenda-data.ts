// speakersData.js
import {sessionModel} from "../models/sessionModel";

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
        id: 'B1',
        topic: 'Domain-Driven Transformation - how to improve the structure of legacy systems',
        time: '11:30 - 12:15',
        session: 'B',
        speaker: ['Carola Lilienthal'],
        level: '入門',
        description: ['Today, we know how to start a new project on a greenfield site and how to build good architecture. But most of us work in projects that have been around for a long time and whose architecture is (to put it mildly) not all that nice. ""Monolith"" and ""Big Ball of Mud"" are the unflattering terms for such systems.',
            'In this talk, I will introduce you to Domain-Driven Transformation, a methodology, which Henning Schwentner and I have developed over the last few years from our experience of improving legacy systems. Four steps lead from the evaluation of the current state to the domain-oriented vision of the architecture. We present a catalog of refactorings that help to heal BBOM(Big Ball of Mud) architectures, anaemic domain models and poorly organized teams. Finally, I discuss our thoughts on the influence of certain domain properties on decomposition into subdomains.',
            '今天，我們知道如何在全新的環境上啟動一個新專案以及如何建構良好的架構。但我們大多數人所從事的專案已經存在很長時間了，而且其架構（溫和地說）並不是那麼好。 「單體式」和「大泥球」是此類系統的不雅稱。',
            '在本次演講中，我將向您介紹領域驅動轉型，這是我和 Henning Schwentner 在過去幾年中根據改進遺留系統的經驗開發的一種方法。從當前狀態的評估到架構的面向領域的願景有四個步驟。我們提供了一系列重構，有助於修復 大泥球(BBOM) 架構、貧乏的領域模型和組織不良的團隊。最後，我討論了我們對某些域屬性對分解為子域的影響的想法。',
            'Legacy software is a huge problem in many organizations because development and maintenance is slowed down up to completely stopped. With this method you will be able to improve the situation of your development teams. ',
            '遺留軟體在許多組織中都是一個大問題，因為開發和維護速度減慢甚至完全停止。透過這種方法，您將能夠改善開發團隊的狀況。']
    },
    {
        id: 'C1',
        topic: '知識精煉：運用社會技術來解決遺留系統中的管理挑戰',
        time: '11:30 - 12:15',
        session: 'C',
        speaker: ['James Wang'],
        level: '入門',
        description: ['當遺留系統朝向現代化前進時，往往面臨知識相關的重大挑戰，特別是在關鍵知識的獲取和傳承方面。',
            '本次分享將探討如何運用領域驅動設計（DDD）的核心觀念，結合社會技術來有效緩解這些挑戰。透過實務案例與策略分析，我們將展示如何確保知識在遺留系統的現代化過程中被精煉和傳承，並探討 AI 技術在未來知識管理中的潛力。']
    },
    {
        id: 'A2',
        topic: '面對 Legacy Code, 你有哪些選擇?',
        time: '13:30 - 14:15',
        session: 'A',
        speaker: ['Kuma'],
        level: '入門',
        description: ['工作上的 Legacy Code，應該是跟需求的改變一樣討厭吧？更常見的，其實是需求就那麼剛好得改 Legacy Code 的內容。有時候真的很想整組砍掉重寫，但「你知道，我知道，獨眼龍也知道」，砍掉重寫的結果，也就只是重演一遍當初這份 Legacy Code 的生產過程而已。可憐哪！',
            '問題來了，那不重寫，又有修改需求，這時到底 Legacy Code 要不要動、何時動、 如何動？難道又要（像以前一樣），放下自尊，使出「複製貼上改一改」、「加個 if 保護舊邏輯」兩大絕學？',
            '這次，我們從真實的案例與情境出發，共同針對工作上會發生的情境，一一探討上開問題。不求能用 40 分鐘解決各位開發上的所有疑難雜症，但期待至少提供各位在面對 Legacy Code 的修改需求時，能拿出來用的思考方向。'],
    },
    {
        id: 'B2',
        topic: '那年走過的彎路',
        time: '13:30 - 14:15',
        session: 'B',
        speaker: ['石其生'],
        level: '入門',
        description: ['將講述三個不同的領域:資料庫系統，嵌入式系統，人工智慧近年來的心得。',
            '在資料庫系統部分，我將講述，為何大部分的系統會做成現在這個樣子，大家到底遭遇了甚麼問題，且在資料庫系統中有哪幾個重點是必須研究清楚的。',
            '在嵌入式系統的部分，我將講一個去年發生的系統救援故事。',
            '至於人工智慧，我將輕微地表述，為何我們大家訓練模型時，往往都效果不佳，到底前輩們隱藏了什麼密技。'],
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
        id: 'A3',
        topic: '領域驅動設計戰術內部物件的協作方式',
        time: '14:30 - 15:15',
        session: 'A',
        level: '入門',
        speaker: ['神 Q 超人'],
        description: ['一開始會先用發現業務邏輯的例子來初步介紹 DDD 的過程，接下來再於解釋領域專家和模型的時候展示建模的過程，以及如何透過建模暸解領域知識。',
            '當得到能夠體現於領域知識的模型後，便開始介紹 DDD 在軟體中提供的各個角色，並解釋各個角色會如何用來在軟體中體現模型。',
            '最後會以 CA 切入範例專案，展示一個套用 CA 的 DDD 前端專案會長什麼樣子，以及使用協作圖來幫助理解 DDD 的各個角色在專案中如何協作。']
    },
    {
        id: 'B3',
        topic: '初探領域故事化（Domain Storytelling）—領域驅動的產品價值需求與分析',
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
    {
        id: 'C3',
        topic: 'Fostering Socio-Technical Harmony in DDD: Ensuring Effective Collaboration for Evolving Problem Domains',
        time: '14:30 - 15:15',
        session: 'C',
        speaker: ['Kim Kao', 'Stephen Tung'],
        level: '入門',
        description: ['In the rapidly evolving landscape of software development, the significance of socio-technical aspects cannot be overstated. This session delves into the necessity for technical professionals to engage in meaningful social interactions and collaboration with stakeholders. By emphasizing the socio-technical approach, we ensure that our efforts in building systems are aligned with the true needs of the problem domain. Understanding and maintaining a shared language with stakeholders is crucial for creating systems that effectively solve real-world problems.',
            'We will explore how adopting socio-technical practices enhances Domain-Driven Design (DDD) implementation with Event Sourcing. Using a shared office rental process as an example, we will highlight the role of domain events in facilitating these interactions. Attendees will gain insights into how socio-technical harmony and Event Sourcing contribute to the successful evolution of problem domains, enabling more responsive and resilient system designs.'
        ]
    },
    {
        id: 'A4',
        topic: 'From EventStorming to Event Store passing through BDD',
        time: '15:40 - 16:30',
        session: 'A',
        speaker: ['Alberto Acerbis'],
        level: '入門',
        description: ['This is a kind of "live coding"; during the talk I\'ll show a lot of code to demonstrate that is possible transform an EventStorming session in code, and maintain your code testable even using DomainEvents. The last year I presented a very similar talk at DDD Europe, as workshop, and it has been a success.',
            '這是一種「即時編碼」；在演講期間，我會展示大量程式碼，以證明將 EventStorming 會議內容轉換成程式碼是可能的，即使使用 DomainEvents 也能保持程式碼的可測試性。去年，我在 DDD Europe 進行了一場非常相似的工作坊，並獲得了成功。',
            'Participants at this conference will learn how it is possible to create comprehensive tests for both developers and stackholders to include in their pipelines starting from EventStorming. In a few words how to use the UbiquitousLanguage within your codebase.',
            '參加這場研討會的與會者將學習如何從 EventStorming 開始，為開發人員和利害關係人創建全面的測試，並將這些測試納入他們的管道中。簡而言之，就是如何在你的程式碼庫中使用 Ubiquitous Language。']
    },
    {
        id: 'B4',
        topic: '在新專案套入 DDD 的經驗談',
        time: '15:40 - 16:30',
        session: 'B',
        speaker: ['Fong'],
        level: '入門',
        description: ['如何應對業務的變化與維護軟體的品質一直都是軟體開發的核心議題，也是 Domain-Driven Design 一直以來的關注點。在現實情況的限制下，我們不一定有機會實踐 DDD，但如果你今天有機會在新專案實施 DDD，你會怎麼規劃呢？',
            '在本次分享中，我們可以了解到 DDD Pattern 帶來的好處以及潛在的風險，且了解 DDD 的應用層面不限於程式碼中，甚至延伸到開發流程的上下游，發揮意想不到的影響力。',
            '如果你正在思考如何導入 DDD，千萬不要錯過，如果你已經正在使用 DDD，那也歡迎一起來做思想激盪。"']
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
];

export default agendaData;
