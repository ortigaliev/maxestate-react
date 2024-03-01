import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Checkbox from "@mui/material/Checkbox";

import * as React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function MySetting() {
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
              My Setting
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            ></Box>
          </Stack>

          <Divider sx={{ mt: 1, mb: 3 }} />

          <Stack>
            <Card sx={{ maxWidth: 850, p: "40px", mb: 4 }}>
              <CardActionArea>
                <Stack flexDirection={"row"}>
                  <Box
                    sx={{
                      mr: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      width="180px"
                      height="180"
                      src="/images/setting/author.jpg"
                      alt="Setting user"
                    />
                    <Button component="label" style={{ minWidth: "0" }}>
                      <CloudDownloadIcon />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      color="secondary"
                    >
                      User
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      fontWeight={700}
                    >
                      Rosalina D. William
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#ff5a3c" }} />
                      Sangnok-gu, Ansan, Gyeonggi-do, South Korea
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <LocalPhoneIcon sx={{ color: "#ff5a3c" }} />
                      +821023-456789
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <MailOutlineIcon sx={{ color: "#ff5a3c" }} />
                      ortigaliyevm@gmail.com
                    </Box>
                  </CardContent>
                </Stack>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 850, p: "40px" }}>
              <Stack flexDirection={"row"}>
                <CardContent sx={{ margin: 0, padding: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    color="#071c1f"
                    sx={{ borderLeft: "2px solid #ff5a3c", pl: 2, mb: 2 }}
                  >
                    More Information
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "38ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      required
                      id="user-name"
                      label="Enter your name"
                    />
                    <TextField
                      required
                      id="user-email"
                      label="Enter your email"
                    />

                    <TextField
                      required
                      id="user-address"
                      label="Enter your address"
                    />

                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "78ch", mb: 4 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    {" "}
                    <TextField
                      id="outlined-multiline-static"
                      label="Describtion"
                      multiline
                      rows={6}
                    />
                  </Box>
                  <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </Box>
                  <Button size="large" variant="contained">
                    Confirm
                  </Button>
                </CardContent>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
