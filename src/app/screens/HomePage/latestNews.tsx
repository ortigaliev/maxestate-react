import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Avatar from "@mui/joy/Avatar";
import { Button, CssVarsProvider, Link } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

export function LatestNews() {
  return (
    <div className="latest_new_frame" style={{ background: "#fff" }}>
      <Container>
        <Stack className="lates_new_farme_wrapper" pt={"115px"} pb={"90px"}>
          <Typography className="card_sub_title">News & Blogs</Typography>
          <Typography mb={8} className="card_tite">
            Leatest News Feeds
          </Typography>
          <Stack flexDirection={"row"} gap={3}>
            <CssVarsProvider>
              {/* NEW CARD 1 */}
              <Link
                overlay
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Card
                  className="news_card_item"
                  variant="outlined"
                  sx={{ width: 400, background: "#fff" }}
                >
                  <CardOverflow>
                    <AspectRatio ratio="1.3">
                      <img
                        src="/images/home/news_img.jpg"
                        loading="lazy"
                        alt="news_img"
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent style={{ padding: "20px" }}>
                    <Stack flexDirection={"row"} alignItems={"center"} mb={2}>
                      <PersonOutlineOutlinedIcon
                        style={{
                          fill: "#ff5a3c",
                          width: 16,
                          height: 18,
                        }}
                      />
                      <Typography level="body-sm" mr={4} ml={1}>
                        by: Admin
                      </Typography>
                      <HouseOutlinedIcon
                        style={{
                          fill: "#ff5a3c",
                          width: 16,
                          height: 18,
                        }}
                      />
                      <Typography level="body-sm" ml={1}>
                        Real Estate
                      </Typography>
                    </Stack>

                    <Typography
                      level="title-md"
                      sx={{
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      Renovating a Living Room? Experts Share Their Secrets
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                    <Divider inset="context" />
                    <CardContent
                      orientation="horizontal"
                      sx={{ alignItems: "center" }}
                    >
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                        style={{ paddingLeft: "20px" }}
                      >
                        6.3k views
                      </Typography>
                      <Divider orientation="vertical" />
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                      >
                        1 hour ago
                      </Typography>
                      <Button
                        variant="soft"
                        style={{
                          background: "#ff5a3c",
                          color: "#fff",
                          marginLeft: "auto",
                        }}
                      >
                        READ MORE
                      </Button>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </Link>

              {/* NEW CARD 2 */}
              <Link
                overlay
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Card
                  className="news_card_item"
                  variant="outlined"
                  sx={{ width: 400, background: "#fff" }}
                >
                  <CardOverflow>
                    <AspectRatio ratio="1.3">
                      <img
                        src="/images/home/news_img2.jpg"
                        loading="lazy"
                        alt="news_img"
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent style={{ padding: "20px" }}>
                    <Stack flexDirection={"row"} alignItems={"center"} mb={2}>
                      <PersonOutlineOutlinedIcon
                        style={{
                          fill: "#ff5a3c",
                          width: 16,
                          height: 18,
                        }}
                      />
                      <Typography level="body-sm" mr={4} ml={1}>
                        by: Admin
                      </Typography>
                      <HouseOutlinedIcon
                        style={{
                          fill: "#ff5a3c",
                          width: 16,
                          height: 18,
                        }}
                      />
                      <Typography level="body-sm" ml={1}>
                        Business
                      </Typography>
                    </Stack>

                    <Typography
                      level="title-md"
                      sx={{
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      7 home trends that will shape your house in 2021
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                    <Divider inset="context" />
                    <CardContent
                      orientation="horizontal"
                      sx={{ alignItems: "center" }}
                    >
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                        style={{ paddingLeft: "20px" }}
                      >
                        6.3k views
                      </Typography>
                      <Divider orientation="vertical" />
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                      >
                        1 hour ago
                      </Typography>
                      <Button
                        variant="soft"
                        style={{
                          background: "#ff5a3c",
                          color: "#fff",
                          marginLeft: "auto",
                        }}
                      >
                        READ MORE
                      </Button>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </Link>

              {/* NEW CARD 3 */}

              <Link
                overlay
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Card
                  className="news_card_item"
                  variant="outlined"
                  sx={{ width: 400, background: "#fff" }}
                >
                  <CardOverflow>
                    <AspectRatio ratio="1.3">
                      <img
                        src="/images/home/news_img3.jpg"
                        loading="lazy"
                        alt="news_img"
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent style={{ padding: "20px" }}>
                    <Stack flexDirection={"row"} alignItems={"center"} mb={2}>
                      <PersonOutlineOutlinedIcon
                        style={{
                          fill: "#ff5a3c",
                          width: 16,
                          height: 18,
                        }}
                      />
                      <Typography level="body-sm" mr={4} ml={1}>
                        by: Admin
                      </Typography>
                      <HouseOutlinedIcon
                        style={{
                          fill: "#ff5a3c",
                          width: 16,
                          height: 18,
                        }}
                      />
                      <Typography level="body-sm" ml={1}>
                        Business
                      </Typography>
                    </Stack>

                    <Typography
                      level="title-md"
                      sx={{
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      10 Brilliant Ways To Decorate Your Home
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                    <Divider inset="context" />
                    <CardContent
                      orientation="horizontal"
                      sx={{ alignItems: "center" }}
                    >
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                        style={{ paddingLeft: "20px" }}
                      >
                        6.3k views
                      </Typography>
                      <Divider orientation="vertical" />
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                      >
                        1 hour ago
                      </Typography>
                      <Button
                        variant="soft"
                        style={{
                          background: "#ff5a3c",
                          color: "#fff",
                          marginLeft: "auto",
                        }}
                      >
                        READ MORE
                      </Button>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </Link>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
