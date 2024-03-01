import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const blog_list = Array.from(Array(3).keys());

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Box>Date Added</Box>
              <Box>Action</Box>
              <Box>Delete</Box>
            </Box>
          </Stack>
          <Divider sx={{ mt: 1, mb: 3 }} />
        </Stack>
      </Container>
    </div>
  );
}
