import {
  AvatarGroup,
  Badge,
  Checkbox,
  CssVarsProvider,
  Typography,
} from "@mui/joy";
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
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";

/* MUI ICONS */
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

/* IMAGES LIST */

/* SWIPER PACKAGES */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { JOYMODAL } from "../../components/modal/joymodal";

import UserComment from "./userComment";
import OurAgent from "./ourAgent";

const order_one_agency = Array.from(Array(5).keys());
const featured_list = Array.from(Array(3).keys());
console.log(order_one_agency);
const one_product_list = Array.from(Array(8).keys());

export function OneAgency() {
  return (
    <div className="one_agency">
      {/* CHOSEN RESTAURANT TITLE */}

      <Container>
        <Stack sx={{ pt: 5 }}>
          <Typography className="card_tite">A&A Realty Co Agency</Typography>
          <Typography className="card_sub_title" sx={{ mt: 5 }}>
            Other Trusted Agencies
          </Typography>
        </Stack>
      </Container>

      {/* TRUSTED OTHER RESTAURANT IN CHOSEN RESTAURANT SECTION */}
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
          {order_one_agency.map((ele, index) => {
            return (
              <SwiperSlide
                className="res_slider"
                key="index"
                style={{ width: "360px" }}
              >
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

      {/* OUR FEATURED EXCUSIVE SECTION */}

      <Container>
        <Stack sx={{ pt: 5, pb: 10 }}>
          <Typography className="card_tite">Our featured exclusives</Typography>
          <CssVarsProvider>
            <Box
              className="box_underline"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                flexWrap: "wrap",
                pt: 2,
                pb: 0,
                /* borderBottom: "2px solid #ff5a3c", */
              }}
            >
              {/* NAVBAR LINK SECTION */}
              <Link
                className={"underline"}
                href="#underline"
                sx={{
                  color: "#000000E6",
                  fontSize: "20px",
                  "&:hover": {
                    color: "#ff5a3c",
                  },
                }}
              >
                All
              </Link>
              <Link
                className={"underline"}
                href="#underline"
                sx={{
                  color: "#000000E6",
                  fontSize: "20px",
                  "&:hover": {
                    color: "#ff5a3c",
                  },
                }}
              >
                For Rent
              </Link>
              <Link
                className={"underline"}
                href="#underline"
                sx={{
                  color: "#000000E6",
                  fontSize: "20px",
                  "&:hover": {
                    color: "#ff5a3c",
                  },
                }}
              >
                For Sale
              </Link>
            </Box>
          </CssVarsProvider>

          {/* OUR FEATURED EXCLUSIVE CARD*/}
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            paddingTop={5}
          >
            <CssVarsProvider>
              {featured_list.map((ele, index) => {
                return (
                  <Card
                    variant="outlined"
                    key="index"
                    sx={{
                      width: 320,
                      bgcolor: "#fff",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="4/3">
                        <Box
                          sx={{
                            position: "relative",
                            cursor: "pointer",
                            transition: "all 1.1s",
                          }}
                        >
                          <img
                            width="100%"
                            height="100%"
                            src="/images/agency/featured.jpg"
                            loading="lazy"
                            alt="Featured"
                          />
                        </Box>
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="danger"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                        }}
                      >
                        <Favorite />
                      </IconButton>
                    </CardOverflow>
                    <CardContent>
                      <Typography level="title-md">
                        <Link
                          href="#multiple-actions"
                          /* overlay */
                          underline="none"
                          sx={{
                            color: "#000",
                            "&:hover": {
                              color: "#ff5a3c",
                            },
                          }}
                          style={{
                            fontSize: "22px",
                            fontWeight: 700,
                          }}
                        >
                          Hillstate Jung-ang APT
                        </Link>
                      </Typography>
                      <Typography level="body-sm">
                        <Link
                          href="#multiple-actions"
                          sx={{
                            color: "#000",
                            "&:hover": {
                              color: "#ff5a3c",
                            },
                          }}
                          style={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "10px",
                          }}
                        >
                          81, Gojan-ro,Danwon-gu Ansan-si
                        </Link>
                      </Typography>
                      <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography
                          level="body-sm"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <BedOutlinedIcon
                            style={{ marginRight: "5px", color: "#ff5a3c" }}
                          />{" "}
                          3
                        </Typography>
                        <Divider
                          orientation="vertical"
                          style={{ margin: "0 10px" }}
                        />
                        <Typography
                          level="body-sm"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <ShowerOutlinedIcon
                            style={{ marginRight: "5px", color: "#ff5a3c" }}
                          />
                          3
                        </Typography>
                        <Divider
                          orientation="vertical"
                          style={{ margin: "0 10px" }}
                        />
                        <Typography
                          level="body-sm"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <SquareFootIcon
                            style={{ marginRight: "5px", color: "#ff5a3c" }}
                          />
                          200kv
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow variant="soft" sx={{ background: "#fff" }}>
                      {/*  <Divider inset="context" /> */}
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        py={2}
                      >
                        <Typography level="body-lg">$540000</Typography>

                        <JOYMODAL />
                      </Stack>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>

          {/* EXPLORE NEW NEIGBOOR-HOOD */}
          <CssVarsProvider>
            <Stack className="explore_property" mt={10} position={"relative"}>
              <Typography className="card_sub_title"> Our Service</Typography>
              <Typography className="card_tite">
                Explore New Neighbourhood
              </Typography>
              {/* LINKS */}
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                <Link
                  href="#"
                  sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                >
                  NEW
                </Link>
                <Link
                  href="#"
                  sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                >
                  PRICE
                </Link>
                <Link
                  href="#"
                  sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                >
                  LIKES
                </Link>
                <Link
                  href="#"
                  sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                >
                  VIEWS
                </Link>
              </Box>

              {/* PROPERT SECTION */}
              <Stack mt={5} flexDirection={"row"} flexWrap={"wrap"} gap={3}>
                <Stack
                  height={"512px"}
                  position={"absolute"}
                  left={-300}
                  top={414}
                >
                  {/* LINKS */}
                  <Box
                    className="property_category_box"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: 3,
                    }}
                  >
                    <Link
                      href="#"
                      sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                    >
                      APARTMENT
                    </Link>
                    <Link
                      href="#"
                      sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                    >
                      SINGLE FAMILY
                    </Link>
                    <Link
                      href="#"
                      sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                    >
                      VILLA
                    </Link>
                    <Link
                      href="#"
                      sx={{ color: "#fff", bgcolor: "#ff5a3c", p: "6px 15px" }}
                    >
                      BUSINESS
                    </Link>
                  </Box>
                </Stack>
                {/* PRODUCT CARD */}
                {one_product_list.map((ele, index) => {
                  const estate_owner_enums = "For sale";
                  return (
                    <Box>
                      <Card
                        variant="plain"
                        key={index}
                        sx={{
                          width: 300,
                          bgcolor: "initial",
                          p: 0,
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <AspectRatio ratio="4/3">
                            <figure>
                              <img
                                src="/images/home/h4.jpg"
                                loading="lazy"
                                alt="Yosemite by Casey Horner"
                              />
                            </figure>
                          </AspectRatio>
                          <Box
                            sx={{
                              position: "absolute",
                              top: "15px",
                              right: "10px",
                              display: "block",
                              p: "6px 16px",
                              backgroundColor: "#ff5a3c",
                              color: "#fff",
                            }}
                          >
                            {estate_owner_enums}
                          </Box>
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
                              <Stack
                                flexDirection={"row"}
                                justifyContent={"space-around"}
                                alignSelf={"flex-end"}
                                p={2}
                                gap={2}
                                /* sx={{
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                alignSelf: "flex-end",
                              }} */
                              >
                                <Box>
                                  <IconButton
                                    size="sm"
                                    variant="solid"
                                    color="neutral"
                                    id={`${index}`}
                                    sx={{
                                      ml: "auto",
                                      bgcolor: "rgba(0 0 0 / 0.2)",
                                    }}
                                  >
                                    <Badge badgeContent={8} color="primary">
                                      <Visibility />
                                    </Badge>
                                  </IconButton>
                                </Box>

                                <Box>
                                  <IconButton
                                    size="sm"
                                    variant="solid"
                                    color="neutral"
                                    sx={{
                                      ml: "auto",
                                      bgcolor: "rgba(0 0 0 / 0.2)",
                                    }}
                                  >
                                    <ShoppingCartOutlinedIcon />
                                  </IconButton>
                                </Box>

                                <Box>
                                  <IconButton
                                    size="sm"
                                    variant="solid"
                                    color="neutral"
                                    sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                                  >
                                    <Favorite />
                                  </IconButton>
                                </Box>
                              </Stack>
                            </div>
                          </CardCover>
                        </Box>
                      </Card>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </CssVarsProvider>
        </Stack>

        {/* COMMENTS RETATED TO THE AGENCY */}
        <Stack mt={5}>
          <Typography className="card_sub_title" sx={{ maxWidth: "170px" }}>
            Our Testimonial
          </Typography>
          <Typography className="card_tite">Clients Feedback</Typography>
        </Stack>
        <Box>
          <UserComment />
        </Box>

        <Stack mt={10}>
          <Typography className="card_sub_title" sx={{ maxWidth: "136px" }}>
            Our Service
          </Typography>
          <Typography className="card_tite">Our Agents</Typography>
          <Stack mb={10}>
            <OurAgent />
          </Stack>
        </Stack>

        <Box
          mt={5}
          mb={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography className="card_sub_title" sx={{ maxWidth: "100px" }}>
            Find Us
          </Typography>
          <Typography className="card_tite">Our Location</Typography>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.02780482359873!2d126.8662766!3d37.30405480551333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f7c7854053b%3A0xaf8e8c172a1397c7!2z64qY7ZSU7Iqk7YSw65SU7Lm07Y6Y!5e1!3m2!1suz!2skr!4v1708755941819!5m2!1suz!2skr"
            width="1320"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </div>
  );
}
