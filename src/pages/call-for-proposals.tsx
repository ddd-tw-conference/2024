/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Proposal } from "@site/src/layout/call-for-proposals";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <Proposal
        content={createElement(
          require("@site/src/content/zh-Hant/proposal.mdx").default
        )}
      />
    </Layout>
  );
}
