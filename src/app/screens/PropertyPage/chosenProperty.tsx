import React from "react";
import Stack from "@mui/material/Stack";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

/* SWIPER */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/* ICONS */
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export function ChosenProperty() {
  return (
    <div>
      <Stack height={"500px"}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            {" "}
            <img src="/images/prop/chosen_prop1.jpg" alt="Chosen_img" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/images/prop/chosen_prop2.jpg" alt="Chosen_img" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/images/prop/chosen_prop3.jpg" alt="Chosen_img" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/images/prop/chosen_prop4.jpg" alt="Chosen_img" />{" "}
          </SwiperSlide>
        </Swiper>
      </Stack>
      <Container>
        <Stack flexDirection={"row"}>
          <Stack pt={10} pb={10} width="850px">
            {" "}
            <Box sx={{ display: "flex", alignItems: "center", mb: 8 }}>
              <Typography
                className="card_sub_title"
                sx={{ color: "#5c727d", mr: 5 }}
              >
                May 19, 2024
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#5c727d",
                  "&:hover": {
                    color: "#ff5a3c",
                  },
                }}
              >
                35 comments
              </Link>
            </Box>
            <Typography
              className="card_tite"
              variant="h1"
              sx={{ p: "3px 0", fontWeight: 700 }}
            >
              Luxury villa in Hang-gang Seoul
            </Typography>
            <Typography
              className="card_sub_title"
              sx={{
                color: "#5c727d",
                mt: 2,
                mr: 5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <LocationOnIcon
                sx={{
                  display: "block",
                  width: 16,
                  height: 20,
                  fontSize: 20,
                  color: "#ff5a3c",
                }}
              />
              Hang-gang, Seoul
            </Typography>
            <Typography
              className="card_tite"
              variant="h3"
              sx={{
                pl: 2,
                mt: 3,
                fontWeight: 500,
                borderLeft: "2px solid #ff5a3c",
              }}
            >
              Description
            </Typography>
            <Typography
              className="card_sub_title"
              sx={{
                color: "#5c727d",
                mt: 2,
                mr: 5,
              }}
            >
              Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus
              faucibus scelerisque eleifend donec Porta nibh venenatis cras sed
              felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
              quis lectus. Turpis in eu mi bibendum neque egestas congue
              quisque. Sed elementum tempus egestas sed sed risus pretium quam.
              Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee
              iaculis at erat pellentesque. Id interdum velit laoreet id donec
              ultrices tincidunt.
            </Typography>
            <Typography
              className="card_sub_title"
              sx={{
                color: "#5c727d",
                mt: 2,
                mr: 5,
              }}
            >
              Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus
              faucibus scelerisque eleifend donec Porta nibh venenatis cras sed
              felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
              quis lectus.
            </Typography>
            <Typography
              className="card_tite"
              variant="h3"
              sx={{
                pl: 2,
                mt: 5,
                fontWeight: 500,
                borderLeft: "2px solid #ff5a3c",
              }}
            >
              Property Detail
            </Typography>
            <Box mt={3}>
              <Card sx={{ maxWidth: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      p={2}
                    >
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Property ID
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Grid3x3OutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />
                          HZ29
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Home Area
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <SquareFootOutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />{" "}
                          345 Kv
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Rooms
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <DoorFrontOutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />{" "}
                          7
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Bath
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <ShowerOutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />{" "}
                          2
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Bed
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <BedOutlinedIcon sx={{ color: "#ff5a3c", mr: 1 }} /> 3
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Repair Quality
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <FormatPaintOutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />{" "}
                          Modren Loft
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Year Build
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <ConstructionOutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />{" "}
                          2010
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 2 }}
                        >
                          Property Status
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <CheckCircleOutlineOutlinedIcon
                            sx={{ color: "#ff5a3c", mr: 1 }}
                          />{" "}
                          For Sale
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            {/* FROM OUR GALERY */}
            <Box>
              <Typography
                className="card_tite"
                variant="h3"
                sx={{
                  pl: 2,
                  mt: 5,
                  fontWeight: 500,
                  borderLeft: "2px solid #ff5a3c",
                }}
              >
                From Our Gallery
              </Typography>
              <Stack flexDirection={"row"} gap={4}>
                <Box>
                  <Box mb={2}>
                    <img
                      width={"410px"}
                      height={"204px"}
                      src="/images/prop/gori.jpg"
                      alt="gorizontal"
                    />
                  </Box>
                  <Box>
                    <img
                      width={"410px"}
                      height={"236px"}
                      src="/images/prop/gorizantal.jpg"
                      alt="gozi"
                    />
                  </Box>
                </Box>
                <Box>
                  <img
                    width={"410px"}
                    height={"462px"}
                    src="/images/prop/vertikal.jpg"
                    alt="vertikal"
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack width="440px">Comment</Stack>
        </Stack>
      </Container>
    </div>
  );
}
