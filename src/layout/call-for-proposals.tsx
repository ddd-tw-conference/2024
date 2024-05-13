/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Box, Stack } from "@mui/joy";
import thumbnail from "@site/src/assets/matthias-wagner.jpg";
import Image from "@theme/IdealImage";
import { ReactNode, memo } from "react";
import { FocusButton } from "../components/FocusButton";

const Proposal = memo(function Proposal({ content }: { content: ReactNode }) {
  return (
    <Stack
      className="container"
      sx={{
        gap: "2rem",
        mb: "5rem",
      }}
    >
      <Image img={thumbnail} />
      <Stack>{content}</Stack>
      <FocusButton
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeGXeoWRErJf-b9qw2ro2xG6qGQE3-HoP5ipDkvyR_9q89-Ow/viewform"
      >
        <Box
          sx={{
            fontSize: "1.5em",
          }}
        >
          Join Us
        </Box>
        <Box>as a Proposal</Box>
      </FocusButton>
    </Stack>
  );
});

export { Proposal };
