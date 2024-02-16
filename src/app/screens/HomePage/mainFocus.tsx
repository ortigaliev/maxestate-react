import React from "react";
import { Box, Container, Icon, Stack } from "@mui/material";
import { Card, CardContent, CssVarsProvider, Grid, Typography } from "@mui/joy";
import Link from "@mui/joy/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export function MainFocus() {
  return (
    <div className="service_frame">
      <Container>
        <Stack
          className="main_focus_wrapper service_frame_wrapper"
          sx={{ paddingTop: "115px", paddingBottom: "90px" }}
        >
          <Typography className="card_sub_title">Our Services</Typography>
          <Typography className="card_tite">Our Main Focus</Typography>
          <Grid
            container
            justifyContent="center"
            spacing={3}
            sx={{ flexGrow: 1, paddingTop: "20px" }}
          >
            <Grid>
              <CssVarsProvider>
                <Card
                  className="main_focus_card"
                  sx={{
                    width: 350,
                    maxWidth: "100%",
                    boxShadow: "lg",
                    padding: "35px 30px",
                  }}
                >
                  <CardContent
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                    <Box className="main_focus_icon_box">
                      <img
                        className="main_focus_img"
                        src="/images/home/buy.png"
                        loading="lazy"
                        alt="buy"
                      />
                    </Box>
                    <Typography className="main_focus_title">
                      <Link href={"#"}>Buy a home</Link>
                    </Typography>
                    <Typography className="main_focus_text">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </Typography>

                    <Link href="#" className="main_focus_link">
                      Find a Home
                      <ArrowRightAltIcon />
                    </Link>
                  </CardContent>
                </Card>
              </CssVarsProvider>
            </Grid>

            <Grid>
              <CssVarsProvider>
                <Card
                  className="main_focus_card"
                  sx={{
                    width: 350,
                    maxWidth: "100%",
                    boxShadow: "lg",
                    padding: "35px 30px",
                  }}
                >
                  <CardContent
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                    <Box className="main_focus_icon_box">
                      <img
                        className="main_focus_img"
                        src="/images/home/rent.png"
                        loading="lazy"
                        alt="buy"
                      />
                    </Box>
                    <Typography className="main_focus_title">
                      <Link href={"#"}>Buy a home</Link>
                    </Typography>
                    <Typography className="main_focus_text">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </Typography>

                    <Link href="#" className="main_focus_link">
                      Find a Home
                      <ArrowRightAltIcon />
                    </Link>
                  </CardContent>
                </Card>
              </CssVarsProvider>
            </Grid>

            <Grid>
              <CssVarsProvider>
                <Card
                  className="main_focus_card"
                  sx={{
                    width: 350,
                    maxWidth: "100%",
                    boxShadow: "lg",
                    padding: "35px 30px",
                  }}
                >
                  <CardContent
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                    <Box className="main_focus_icon_box">
                      <img
                        className="main_focus_img"
                        src="/images/home/sell.png"
                        loading="lazy"
                        alt="buy"
                      />
                    </Box>
                    <Typography className="main_focus_title">
                      <Link href={"#"}>Buy a home</Link>
                    </Typography>
                    <Typography className="main_focus_text">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </Typography>

                    <Link href="#" className="main_focus_link">
                      Find a Home
                      <ArrowRightAltIcon />
                    </Link>
                  </CardContent>
                </Card>
              </CssVarsProvider>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
