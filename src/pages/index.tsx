/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Index } from "@site/src/layout/Index";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout description="DDD 年會團隊在此正式宣佈：DDDTW 領域驅動設計年會，即將於 9/13 盛大舉辦！本次年會主題為：「系統設計與社會技術年會（System Design & Socio-technical Conference）」。圍繞「遺留工作負載（legacy workloads）」和現代應用程式的演變，邀請大家共同探討這些工作負載在當今商業環境中所帶來的挑戰和機遇。討論遺留工作負載的演進，以及如何應對它們的變化，並探索系統設計的複雜性，重點考慮社會技術因素對軟體開發決策和執行的影響。期待深入探討企業決策者和一線執行團隊之間的合作方式，以實現系統設計和開發的目標。">
      <Index
        content={createElement(
          require("@site/src/content/zh-Hant/index.mdx").default
        )}
      />
    </Layout>
  );
}
