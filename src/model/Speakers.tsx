export const SPEECH_LEVEL = {
  en: {
    HEIGH: "High",
    MIDDLE: "Middle",
    LOW: "Low",
  },
  zh: {
    HEIGH: "高階",
    MIDDLE: "進階",
    LOW: "初階",
  },
};

export type SpeechLevel =
  | (typeof SPEECH_LEVEL)["en"][keyof (typeof SPEECH_LEVEL)["en"]]
  | (typeof SPEECH_LEVEL)["zh"][keyof (typeof SPEECH_LEVEL)["zh"]];

export type programer_type = {
  name: string;
  slug?: string;
  photo?: Img;
  title?: string;
  contact?: string;
  speech?: {
    level?: SpeechLevel[];
    title?: string;
    point?: string;
    intro?: string;
    takeaways?: string;
  };
};
export interface Programer {
  en: programer_type;
  zh: programer_type;
  photo: Img;
  slug?: string;
}

/**
 * @description
 * 講師照片放在 src/assets/programer 資料夾
 * @property {string} en.name 英文名字
 * @property {string} zh.name 中文名字
 * @property {string} en.title 英文職稱
 * @property {string} zh.title 中文職稱
 * @property {string} en.contact 英文聯絡方式
 * @property {string} zh.contact 中文聯絡方式
 * @property {string} en.speech.level 英文演講難易度
 * @property {string} zh.speech.level 中文演講難易度
 * @property {string} en.speech.title 英文演講標題
 * @property {string} zh.speech.title 中文演講標題
 * @property {string} en.speech.point 英文演講重點
 * @property {string} zh.speech.point 中文演講重點
 * @property {string} en.speech.intro 英文演講介紹
 * @property {string} zh.speech.intro 中文演講介紹
 * @property {string} en.speech.takeaways 英文演講結論
 * @property {string} zh.speech.takeaways 中文演講結論
 * @property {string} photo 講師照片
 *
 */
export const PROGRAMER: Programer[] = [
  // {
  //   en: { name: 'Arthur' },
  //   zh: { name: 'Arthur', speech: { title: 'DDD戰術-柔型要術' } },
  //   photo: Arthur,
  // },
];
