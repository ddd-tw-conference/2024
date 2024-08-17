import { speakerModel } from "../models/speakerModel";

const speakersData: speakerModel[] = [
    {
        id: 'kuma',
        name: "Kuma",
        image: 'speaker-Kuma.jpg',
        bio: ['做過 PO，做過 SM，也做過維運一條龍的 RD，到最後才發現，當什麼職位無所謂，追求價值才是重點。', '「敏捷精神，熱愛軟體工程」── 你可以這麼形容他。'],
        epic: '面對 Legacy Code, 你有哪些選擇?',
        intro: ['你很少見過像 Kuma 這麼討厭 coding 的 RD。',
            '他堅持，只要滿足需求，能夠少寫 code 就少寫 code。因此致力於自動化測試與 Clean Code 精神的實踐。於此同時，品質不能犧牲。',
            '不擅長重複動作的 Kuma，對於維運，他追求的目標是極致自動化，能夠讓機器做的事就不自己做。他為追求更高的價值並減少浪費，只憑一股近乎信仰的熱忱，在組織內推動各種流程改善。',
            '做過 PO，做過 SM，也做過維運一條龍的 RD，到最後才發現，當什麼職位無所謂，追求價值才是重點。',
            '「敏捷精神，熱愛軟體工程」── 你可以這麼形容他。"]'],
        website: '',
        sessionId: 'A2',
    },
    {
        id: 'kim',
        name: "Kim Kao",
        image: "speaker-Kim.png",
        epic: 'Fostering Socio-Technical Harmony in DDD: Ensuring Effective Collaboration for Evolving Problem Domains',
        bio: ['人生已經被良好架構的三寶爸，現任職於 AWS 擔任資深解決方案架構師，主要關注在開發者專家加速計畫，同時也是台灣領域驅動設計社群 (DDD Taiwan Community) 發起人之一。'],
        intro: ['人生已經被良好架構的三寶爸，現任職於 AWS 擔任資深解決方案架構師，主要關注在開發者專家加速計畫 (Developer Acceleration, DevAx)，同時也是台灣領域驅動設計社群 (DDD Taiwan Community) 發起人之一。致力於投入大眾對於 Sociotechnical 的共鳴，推動企業透過 DDD 與便捷的雲端服務，打造更適切的系統方案，解決真切的商務問題。'],
        sessionId: 'C3',
        website: ''
    },
    {
        id: 'stephen',
        name: "Stephen Tung",
        image: "speaker-Stephen-Tung.png",
        epic: 'Fostering Socio-Technical Harmony in DDD: Ensuring Effective Collaboration for Evolving Problem Domains',
        bio: ['Stephen has been a software practitioner and leader focused on simplifying and tackling the heart of complex business problems.',
            'He discovered DDD/CQRS/ES 15 years ago and has never looked back since.'],
        intro: ['Stephen has been a software practitioner and leader focused on simplifying and tackling the heart of complex business problems. He discovered DDD/CQRS/ES 15 years ago and has never looked back since. He\'s the father of three, living in Hong Kong, and enjoys to zen out when there is a moment.'],
        sessionId: 'C3',
        website: ''
    },
    {
        id: 'ming',
        name: "陳明正",
        image: "speaker-Yoyo.jpg",
        epic: '那年走過的彎路',
        bio: ['系統開發者，軟體黑手'],
        intro: ['系統開發者，軟體黑手', '學歷：清大資工所', '經歷：電信研究所、興德資訊、國興資訊、德勝科技、美商勞倫斯科技'],
        sessionId: 'A1',
        website: ''
    },
    {
        id: 'Augustin',
        name: 'Augustin',
        image: 'speaker-Augustin.jpg',
        epic: '原來開局就一身債！從軟體邊界探索技術債的形成與團隊拓樸的設計',
        bio: ['鑽研軟體工程並且接軌實務經驗二十年，範圍涉及軟體設計、流程、雲計算、人工智慧，並且歷練新產品開發與交付、( 跨國 ) 團隊建立、企業營運等種種議題。'],
        intro: ['鑽研軟體工程並且接軌實務經驗二十年，範圍涉及軟體設計、流程、雲計算、人工智慧，並且歷練新產品開發與交付、( 跨國 ) 團隊建立、企業營運等種種議題，並且深耕變革管理、DevOps、資訊安全、與隱私保護等領域，是一名創業者、審查員、和教育者。',
            '著有《駕馭組織 DevOps 六面向：變革、改善與規模化的全局策略》；譯有《非監督式學習｜使用 Python》、《Python for DevOps｜學習精準有效的自動化》、《AI策略｜人與企業的數位轉型》和《敏捷開發的藝術, 第二版》，且參與合著有《軟體測試實務I》。'],
        sessionId: 'C2',
        website: ''
    },
    {
        id: 'Alberto',
        name: 'Alberto Acerbis',
        image: 'speaker-Alberto-Acerbis.jpg',
        epic: 'From EventStorming to Event Store passing through BDD',
        bio: ['一位擁有 30 年經驗的軟體架構師和技術培訓師。',
            '在許多關於DDD（例如DDD Europe、Explore DDD、KanDDDinsky）和其他架構主題的會議中擔任演講者。我基本上是一個永遠的學生，因為這個領域的知識無窮無盡。我喜歡社群，因為可以在其中分享和學習。'],
        intro: ['I\'m a software architect and technical trainer with 30 years of experience. ',
            'I\'m a speaker in some conferences about DDD (DDD Europe, Explore DDD, KanDDDinsky) e many others about architecture\'s topics.',
            'I\'m basically an eternal student, because the subject matter is endless; I like the communities to share and learn.'],
        sessionId: 'A4',
        website: ''
    },
    {
        id: 'Nor',
        name: 'Nor',
        image: 'speaker-Nor.jpg',
        epic: '使用者研究該如何解讀質性與量化的定位',
        bio: ['社團法人台灣使用者經驗設計協會第三、四屆理事',
            '亞太服務設計協會 / 現任理事',
            '曾在逢甲大學、長榮大學、高雄大學擔任學分課程講師'],
        intro: ['社團法人台灣使用者經驗設計協會第三、四屆理事',
            '亞太服務設計協會 / 現任理事',
            '曾在逢甲大學、長榮大學、高雄大學擔任學分課程講師',
            '協助台南市交通局進行多項數位服務的審核委員',
            '曾任 SIIR 審核委員',
            '2015 TED X Tainan 講者',
            '2012-2016 多次在台南跟全世界主要城市同步舉辦 Global Service Jam (The host of Tainan Service Jam)',
            '傳產經驗6年 使用者經驗設計與服務設計經歷 10年以上'],
        sessionId: 'C4',
        website: ''
    },
    {
        id: 'Michael',
        name: 'Michael',
        image: 'speaker-Michael.jpg',
        epic: '初探領域故事化（Domain Storytelling）— 領域驅動的產品價值需求與分析',
        bio: ['現任 樂屋國際資訊 (股) 產品處 副總經理，以及 DDD Taiwan社群組織志工。 長期於矩陣式組織中，擔當Technical Leader、 People Manager 與Agile Coach多重角色。'],
        intro: ['現任 樂屋國際資訊 (股) 產品處 副總經理，以及 DDD Taiwan社群組織志工。',
            '長期於矩陣式組織中，擔當Technical Leader、 People Manager 與Agile Coach多重角色。',
            '深感企業的永續經營，除了組織文化的持續變革外，支撐企業持續提供商業價值的關鍵，更是需要貼近商業領域流程的系統。要實踐如此特性的軟體系統，有賴於整體性的架構（Architecture）分析體現，而非單純功能式的結構（Structure）設計施作，因此持續投入產品需求與技術架構整合開發的探索與實踐。'],
        sessionId: 'B3',
        website: ''
    },
];

export default speakersData;
