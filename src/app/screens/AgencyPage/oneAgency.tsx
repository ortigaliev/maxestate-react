import { AvatarGroup, CssVarsProvider, Typography } from "@mui/joy";
import { Container, Stack } from "@mui/material";
import React from "react";

/* CARD PACKAGES */
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";

/* SWIPER PACKAGES */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const order_one_agency = Array.from(Array(5).keys());
const agency_list = Array.from(Array(10).keys());
console.log(order_one_agency);

export function OneAgency() {
  return (
    <div className="one_agency">
      <Container>
        <Stack sx={{ pt: 5 }}>
          <Typography className="card_tite">A&A Realty Co Agency</Typography>
          <Typography className="card_sub_title" sx={{ mt: 5 }}>
            Other Trusted Agencies
          </Typography>
          {/* <Other Agency​/> */}
        </Stack>
      </Container>
      <Box sx={{ display: "flex", alignItems: "center", pt: 0, pb: 5 }}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "350px" }}
        >
          {order_one_agency.map((ele) => {
            return (
              <SwiperSlide className="res_slider" style={{ width: "360px" }}>
                <CssVarsProvider>
                  <Card
                    variant="plain"
                    sx={{
                      width: "350px",
                      p: 0,
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <AspectRatio ratio="4/3">
                        <figure>
                          <img
                            src="/images/agency/best.jpg"
                            loading="lazy"
                            alt="bestRealEstate"
                          />
                        </figure>
                      </AspectRatio>
                      <CardCover
                        className="gradient-cover"
                        sx={{
                          "&:hover, &:focus-within": {
                            opacity: 1,
                          },
                          opacity: 0,
                          transition: "0.1s ease-in",
                          background:
                            "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                        }}
                      >
                        {/* The first box acts as a container that inherits style from the CardCover */}
                        <div>
                          <Box
                            sx={{
                              p: 2,
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              flexGrow: 1,
                              alignSelf: "flex-end",
                            }}
                          >
                            <Typography
                              level="h2"
                              noWrap
                              sx={{ fontSize: "lg" }}
                            >
                              <Link
                                href="#dribbble-shot"
                                overlay
                                underline="none"
                                sx={{
                                  color: "#fff",
                                  textOverflow: "ellipsis",
                                  overflow: "hidden",
                                  display: "block",
                                }}
                              >
                                Best Real Estate
                              </Link>
                            </Typography>
                            <IconButton
                              size="sm"
                              variant="solid"
                              color="neutral"
                              sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                            >
                              <Favorite />
                            </IconButton>
                          </Box>
                        </div>
                      </CardCover>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        height: 20,
                      }}
                    >
                      <AvatarGroup
                        size="sm"
                        sx={{ "--Avatar-size": "28px", mx: 4 }}
                      >
                        <Avatar src="/images/agency/follower1.jpg" />
                        <Avatar src="/images/agency/follower3.jpg" />
                        <Avatar src="/images/agency/follower4.jpg" />
                        <Avatar>+4K</Avatar>
                      </AvatarGroup>
                      {/*  <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                    Manager
                  </Typography> */}
                      <Chip
                        variant="outlined"
                        size="md"
                        sx={{
                          borderRadius: "sm",
                          py: 1,
                          px: 0.9,
                          backgroundColor: "#ff5a3c",
                          color: "#fff",
                        }}
                      >
                        Follow
                      </Chip>
                      <Link
                        href="#dribbble-shot"
                        level="body-xs"
                        underline="none"
                        startDecorator={<Favorite />}
                        sx={{
                          fontWeight: "md",
                          ml: "auto",
                          color: "text.secondary",
                          "&:hover": { color: "danger.plainColor" },
                        }}
                      >
                        117
                      </Link>
                      <Link
                        href="#dribbble-shot"
                        level="body-xs"
                        underline="none"
                        startDecorator={<Visibility />}
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          "&:hover": { color: "primary.plainColor" },
                        }}
                      >
                        10.4k
                      </Link>
                    </Box>
                  </Card>
                </CssVarsProvider>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Container></Container>
    </div>
  );
}
