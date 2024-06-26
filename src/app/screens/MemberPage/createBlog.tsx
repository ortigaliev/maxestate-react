import { Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export function CreateBlog() {
  return (
    <div>
      <Container>
        <Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h1" gutterBottom>
              Create a Blog
            </Typography>
          </Stack>
          <Divider sx={{ mt: 1, mb: 3 }} />
        </Stack>
      </Container>
    </div>
  );
}
