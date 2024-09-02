export interface sponsorModel {
    id: string;
    name: string;
    level: string;
    image: string;
    description: string[];
    recruitment?: recruitmentModel;
}

export interface recruitmentModel {
    description: string;
    image: string;
    url: string;
}

const sponsorsData: sponsorModel[] = [
    {
        id: 'Fable',
        name: 'Fable',
        level: 'Sliver',
        image: 'sponsor-fable.jpg',
        description: [
            'fable 寓意科技成立於 2012 年，致力於成為新型態 IT 顧問公司。提供技術顧問服務和軟體開發管理服務，有效地運用外包技術資源，打造軟體產品服務，近年更以企業內程序化管理以及 AI 應用為主要議題，為企業打造更高效與降低營運費用的流程管理。']
    },
    {
        id: 'Jetbrains',
        name: 'Jetbrains',
        level: 'Special',
        image: 'sponsor-jetbrains.png',
        description: ['JetBrains 是知名 IntelliJ IDEA、ReSharper、GoLand、PyCharm、WebStorm、PhpStorm…等 IDE 工具及 Kotlin 程式語言背後的公司。',
            '過去 20 年來我們專注於生產能提升開發效率的工具，透過智能提示、快速修正，自動化地處理繁瑣且重複性高的任務，讓開發者有更多時間和精神專注在創新、設計、架構及更多美好的事物上。',
            '目前全球已有超過 800 萬使用者、225 多個國家信任我們的產品。']
    },
    {
        id: 'EventStore',
        name: 'Event Store',
        level: 'Sliver',
        image: 'sponsor-eventstore.png',
        description: [
            'We are Event Store, the event-native database, where business events are immutably stored and streamed',
            'We exist because the application databases of today only capture current state, overwrite data, and lose the context behind the data they store. Data models have shifted from fields, records, and tables to events, and require a database that is designed for event processing, storage, and analysis',
            'We are the purpose built database for Software Development teams that recognize that events are at the foundation of the businesses they support, both inside their core applications and communicating between them',
            'We fit best with modern architectures and methodologies where events are modeled from business behaviours. Business events are the atomic unit of information and we fit well in event-sourced, event-driven, and microservices architectures',
            'The customers that use us achieve building more flexible, scalable, and adaptable core business applications. With Event Store\'s time-travelable, fully auditable view of the entire history of their data our customers are uncovering patterns and insights that were previously lost.'
        ]
    },
    {
        id: 'Athemaster',
        name: '炬識科技',
        level: 'Gold',
        image: 'sponsor-Athemaster.jpeg',
        description: [
            '炬識科技成立於 2015 年，為台灣 Data & AI 系統整合與顧問服務領導品牌，以資料增益產業服務價值，透過資料產品化思維與資料管理方法論，發展資料驅動的企業決策框架，最大化資料的商業價值，提供兼具技術與顧問的全方位服務，擘畫產業數位轉型策略，激發企業成長動能。',
            '炬識科技專注 Data & AI 企業服務市場，協助客戶發展人與 AI 協作的企業級營運環境，與客戶攜手實現資料驅動的商業服務，維持 AI 時代下的競爭力。'
        ],
        recruitment:  {
            description: '炬識科技誠摯邀請您加入我們的團隊，一同打造更美好的未來！Welcome to Owl’s Nest: Exploring Athemaster’s Wisdom Hub',
            image: 'sponsor-Athemaster-recruitment.png',
            url: 'https://reurl.cc/QEZQdo'
        }
    },
    {
        id: 'tenlong',
        name: '天瓏圖書',
        level: 'Special',
        image: 'sponsor-tenlong.jpg',
        description: [
            '天瓏資訊圖書有限公司成立於42年前，是一家專注於電腦資訊技術書籍的專賣店，深耕於圖書零售業。作為全球唯一整間店都專門販售電腦資訊科技相關技術書籍的零售商，我們以提供台灣軟體工程師最齊全、最專業的資訊書為使命',
            '天瓏資訊圖書有限公司精選繁體中文、簡體中文及英文的電腦資訊圖書，致力於滿足程式設計師與軟體工程師對於專業知識的需求。我們以豐富的藏書和專業的服務，成為資訊技術領域專業人士的首選書店',
            '公司成立 42 年來，我們始終堅持提供高品質的書籍和卓越的客戶體驗，並在業界建立了堅實的聲譽。未來，天瓏資訊圖書有限公司將繼續引領技術圖書零售的潮流，為廣大的軟體工程師社群提供更多更好的知識資源。'
        ]
    },
    {
        id: 'drmaster',
        name: '博碩文化出版社',
        level: 'Special',
        image: 'sponsor-drmaster.jpg',
        description: [
            '博碩文化自成立以來，每年均快速成長，目前擁有全國經銷網絡，包括重要連鎖書局、電腦門市以及大型資訊賣場，出版書籍主題廣泛，內容深入淺出，廣獲讀者的支持與肯定，出版的速度與品質齊名，為業界所稱道',
            '博碩文化專業的素養與傑出的創意，展現了許多領先業界的出版策略，令資訊出版業耳目一新。由於擁有優秀人才與作者，並秉持人性化管理，使博碩文化所提供的專業諮詢服務廣獲業界的好評，相關的電腦叢書著作也在資訊圖書市場異軍突起，擁有眾多的忠實讀者',
            '博碩文化當秉持服務、創新、進步的精神，為更多讀者提供更符合所需的服務。'
        ]
    },
    {
        id: 'Edenred',
        name: 'Edenred Taiwan',
        level: 'Sliver',
        image: 'sponsor-Edenred_Digital.png',
        description: [
            'Edenred 宜睿智慧是全球領先的支付解決方案提供商，連接遍佈45個國家的企業、員工和商戶。我們提供多種解決方案，包括餐券、加油卡、禮券和虛擬支付卡，以提升員工福祉和企業效率。在全球，Edenred 集團擁有 12,000 名員工，並且是巴黎證券交易所上市公司，並入選CAC40等多個主要股票指數。',
            'Edenred 台灣自2010年以「Ticket Xpress即享券」品牌提供企業員工福利與行銷禮贈的數位解決方案。截至目前，公司已累計發行超過2億張電子票券，相當於48座台北101大樓的高度。這不僅展現了公司的市場影響力，還體現了其對環境保護的貢獻：減少紙張使用相當於保護了4萬棵樹木，並節省了 2 萬公升的水資源。',
            '另外 Edenred 台灣是目前台灣唯一獲得ISO14067碳足跡認證的電子票券商，彰顯了公司對環境可持續發展的堅定承諾。Edenred 持續推動企業社會責任（CSR），專注於環境保護、生活品質和理念追求三大概念。通過創新產品和服務，與合作企業共同實現 ESG（環境、社會和公司治理）目標，為建設更可持續的未來做出貢獻。'
        ]
    }
];

export default sponsorsData;
