import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function Ads() {
  return (
    <div className="ads_frame" style={{ height: "600px", background: "#ccc" }}>
      <Container>
        <Stack flexDirection={"row"} alignContent={"center"}>
          <Box style={{ fontSize: "100px" }}>Video Section</Box>
        </Stack>
      </Container>
    </div>
  );
}
