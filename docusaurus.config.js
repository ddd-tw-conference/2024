// @ts-check

const { join } = require("node:path");

const BASE_URL = process.env["BASE_URL"] ?? "/2024/";

const title = "DDDesign TW";
const description =
  "DDD 年會團隊在此正式宣佈：DDDTW 領域驅動設計年會，即將於 9/16, 9/17 盛大舉辦！本次年會主題為：「啟發」。依循著過去的足跡，期望讓參與者在活動中感受到 DDD 的創新與靈感，啟發參與者在日常工作中應用 DDD 的可能性。";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  favicon: join(BASE_URL, "img/favicon.png"),
  url: "https://conference.ddd-tw.com",
  baseUrl: BASE_URL,
  organizationName: "ddd-tw-conference",
  projectName: "2024",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/cover.jpg",

      navbar: {
        hideOnScroll: true,
        title,
        logo: {
          alt: "inspire",
          src: "img/favicon.png",
        },
        items: [
          {
            label: "DDD 社群",
            position: "right",
            href: "https://www.facebook.com/groups/dddesigntw",
          },
          {
            label: "贊助商",
            position: "right",
            to: "sponsor",
          },
          {
            label: "徵求講者",
            position: "right",
            to: "call-for-proposals",
          },
          // {
          //   label: "講者",
          //   position: "right",
          //   to: "speakers",
          // },
          // {
          //   label: "議程",
          //   position: "right",
          //   to: "agenda",
          // },
          {
            label: "招募志工",
            position: "right",
            to: "volunteer",
          },
          // {
          //   position: "right",
          //   href: "https://dddtaiwan.kktix.cc/events/dddtwconf2023",
          //   html: "購票",
          // },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
    }),
  plugins: ["@docusaurus/plugin-ideal-image"],
};

module.exports = config;
