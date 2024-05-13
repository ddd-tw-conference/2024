/** @jsx jsx */
import { jsx } from "@emotion/react";
import { CardContent, Stack } from "@mui/joy";
import { ReactNode, memo } from "react";

const Index = memo(function Index({ content }: { content: ReactNode }) {
  return (
    <Stack
      className="container"
      sx={{
        gap: "2rem",
        mb: "5rem",
      }}
    >
      {/* <Image img={thumbnail} /> */}
      <CardContent>{content}</CardContent>
    </Stack>
  );
});

export { Index };
