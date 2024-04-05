import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function BlogChat() {
  // INITIALIZATION
  const [messagesList, setMessagesList] = useState([]);

  return (
    <Stack className="chat_frame" width="30%">
      <Stack>
        <Card
          sx={{
            maxWidth: "100%",
            bgcolor: "#E3F2FD",
            padding: "20px 17px",
            borderRadius: "30px",
          }}
        >
          <CardContent>
            <Box>
              <Typography gutterBottom variant="h2" component="div">
                Online Chat
              </Typography>
            </Box>
            <Divider sx={{ bgcolor: "#E4E4E4" }} />
            <Box sx={{ mt: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar alt="Remy Sharp" src="/images/blogs/blog_user3.jpg" />
                <Box
                  sx={{
                    bgcolor: "#e4e4e4",
                    p: "8px 10px",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    mb: "10px",
                  }}
                >
                  Hello everyone
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#D0ECE8",
                    p: "8px 10px",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    mb: "10px",
                  }}
                >
                  Hello everyone
                </Box>
              </Box>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  InputProps={{ sx: { borderRadius: 30, width: "100%" } }}
                />

                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ borderRadius: "30px", p: 1.2 }}
                ></Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
