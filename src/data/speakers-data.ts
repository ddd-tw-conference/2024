import { speakerModel } from "../models/speakerModel";

const speakersData: speakerModel[] = [
    {
        id: 'kuma',
        name: "Kuma",
        image: 'speaker-Kuma.jpg',
        bio: ['做過 PO，做過 SM，也做過維運一條龍的 RD，到最後才發現，當什麼職位無所謂，追求價值才是重點。', '「敏捷精神，熱愛軟體工程」── 你可以這麼形容他。'],
        website: ''

    },
    {
        id: 'kim',
        name: "Kim Kao",
        image: "speaker-Kim.png",
        bio: ['人生已經被良好架構的三寶爸，現任職於 AWS 擔任資深解決方案架構師，主要關注在開發者專家加速計畫，同時也是台灣領域驅動設計社群 (DDD Taiwan Community) 發起人之一。'],
        website: ''
    },
    {
        id: 'stephen',
        name: "Stephen Tung",
        image: "speaker-Stephen-Tung.png",
        bio: ['Stephen has been a software practitioner and leader focused on simplifying and tackling the heart of complex business problems.',
            'He discovered DDD/CQRS/ES 15 years ago and has never looked back since.'],
        website: ''
    },
    {
        id: 'ming',
        name: "陳明正",
        image: "speaker-Yoyo.jpg",
        bio: ['系統開發者，軟體黑手'],
        website: ''
    },
    {
        id: 'Augustin',
        name: 'Augustin',
        image: 'speaker-Augustin.jpg',
        bio: ['鑽研軟體工程並且接軌實務經驗二十年，範圍涉及軟體設計、流程、雲計算、人工智慧，並且歷練新產品開發與交付、( 跨國 ) 團隊建立、企業營運等種種議題。'],
        website: ''
    }, {
        id: 'Alberto',
        name: 'Alberto Acerbis',
        image: 'speaker-Alberto-Acerbis.jpg',
        bio: ['一位擁有 30 年經驗的軟體架構師和技術培訓師。', '在許多關於DDD（例如DDD Europe、Explore DDD、KanDDDinsky）和其他架構主題的會議中擔任演講者。我基本上是一個永遠的學生，因為這個領域的知識無窮無盡。我喜歡社群，因為可以在其中分享和學習。'],
        website: ''
    }, {
        id: 'Nor',
        name: 'Nor',
        image: 'speaker-Nor.jpg',
        bio: ['社團法人台灣使用者經驗設計協會第三、四屆理事',
            '亞太服務設計協會 / 現任理事',
            '曾在逢甲大學、長榮大學、高雄大學擔任學分課程講師'],
        website: ''
    },
    {
        id: 'Michael',
        name: 'Michael',
        image: 'speaker-Michael.jpg',
        bio: ['現任 樂屋國際資訊 (股) 產品處 副總經理，以及 DDD Taiwan社群組織志工。 長期於矩陣式組織中，擔當Technical Leader、 People Manager 與Agile Coach多重角色。'],
        website: ''
    },
];

export default speakersData;
