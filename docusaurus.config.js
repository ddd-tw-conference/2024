// @ts-check

const { join } = require("node:path");

const BASE_URL = process.env["BASE_URL"] ?? "/2024/";

const title = "DDDesign TW";
const description =
  "DDD 年會團隊在此正式宣佈：DDDTW 領域驅動設計年會，即將於 9/13 盛大舉辦！本次年會主題為：「系統設計與社會技術年會（System Design & Socio-technical Conference）」。圍繞「遺留工作負載（legacy workloads）」和現代應用程式的演變，邀請大家共同探討這些工作負載在當今商業環境中所帶來的挑戰和機遇。討論遺留工作負載的演進，以及如何應對它們的變化，並探索系統設計的複雜性，重點考慮社會技術因素對軟體開發決策和執行的影響。期待深入探討企業決策者和一線執行團隊之間的合作方式，以實現系統設計和開發的目標。";

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
