import React from "react";
import Stack from "@mui/material/Stack";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  Link,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Navigation, Pagination } from "swiper/modules";

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
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

/* Data Picker */
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const popular_list = Array.from(Array(4).keys());

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
        <Stack flexDirection={"row"} pt={10} pb={10}>
          <Stack width="850px">
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
              <Stack flexDirection={"row"} gap={4} mt={4}>
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
            {/* MAP */}
            <Box style={{ width: "100%" }}>
              <Typography
                className="card_tite"
                variant="h3"
                sx={{
                  pl: 2,
                  mt: 5,
                  mb: 3,
                  fontWeight: 500,
                  borderLeft: "5px solid #ff5a3c",
                }}
              >
                Location
              </Typography>
              <iframe
                width="100%"
                height="360"
                border-width="0"
                scrolling="no"
                margin-height="0"
                margin-width="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=360&amp;hl=en&amp;q=Ansan-si,%20Gyeonggi-do,Sangnok-gu+(MaxEstate)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            </Box>
            {/* CUSTOMER REVIEW */}
            <Box>
              <Typography
                className="card_tite"
                variant="h3"
                sx={{
                  pl: 2,
                  mt: 5,
                  mb: 3,
                  fontWeight: 500,
                  borderLeft: "5px solid #ff5a3c",
                }}
              >
                Customer Review
              </Typography>
              <Stack
                spacing={1}
                flexDirection={"row"}
                alignItems={"center"}
                gap={2}
              >
                <Rating name="half-rating" defaultValue={4} precision={0.5} />
                <Link
                  rel="stylesheet"
                  href="#"
                  underline="none"
                  sx={{
                    color: "#ffb800",
                    "&:hover": {
                      color: "#ff5a3c",
                    },
                    fontSize: "14px",
                  }}
                >
                  (95 Reviews)
                </Link>
              </Stack>
            </Box>
            {/* CUSTOMER REVIEW CARD */}
            <Box mt={8}>
              <Card sx={{ display: "flex", maxWidth: 845, mb: 2 }}>
                <Box sx={{ pl: 3, pt: 3 }}>
                  <img
                    width={"100px"}
                    height={"100px"}
                    src="/images/home/user_comment.jpg"
                    alt="Comment_user"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Box>
                <CardContent>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        mb={1.5}
                      >
                        Emma Smit
                      </Typography>
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </Box>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: 20,
                      }}
                    >
                      September 2023
                    </Button>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" mt={1.5}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ display: "flex", maxWidth: 845, mb: 2 }}>
                <Box sx={{ pl: 3, pt: 3 }}>
                  <img
                    width={"100px"}
                    height={"100px"}
                    src="/images/prop/prop_user2.jpg"
                    alt="Comment_user"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Box>
                <CardContent>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        mb={1.5}
                      >
                        Smit Adam
                      </Typography>
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </Box>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: 20,
                      }}
                    >
                      September 2023
                    </Button>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" mt={1.5}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ display: "flex", maxWidth: 845, mb: 2 }}>
                <Box sx={{ pl: 3, pt: 3 }}>
                  <img
                    width={"100px"}
                    height={"100px"}
                    src="/images/agency/user.jpg"
                    alt="Comment_user"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Box>
                <CardContent>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        mb={1.5}
                      >
                        Sophia Taylor
                      </Typography>
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </Box>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: 20,
                      }}
                    >
                      September 2023
                    </Button>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" mt={1.5}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/* LEAVE YOUR COMMENT */}
            <Box mt={3}>
              <Card
                sx={{
                  display: "flex",
                  maxWidth: 845,
                  mb: 2,
                  p: "50px",
                  background: "#f0f4f7",
                }}
              >
                <CardContent>
                  <Stack sx={{ pr: "50px" }}>
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h4"
                        fontWeight={600}
                        component="div"
                        mb={1.5}
                      >
                        Add a Review
                      </Typography>
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                      {/* INPUT SECTION */}
                      <Box
                        component="form"
                        position={"relative"}
                        sx={{
                          "& .MuiTextField-root": {
                            m: 1,
                            width: "710px",
                            mt: 3,
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          fullWidth
                          id="standard-multiline-static"
                          multiline
                          rows={6}
                          defaultValue="Type your comment"
                          variant="standard"
                          sx={{
                            background: "#fff",
                            p: 2,
                            position: "relative",
                          }}
                        />
                        <ModeEditOutlineOutlinedIcon
                          style={{
                            width: "16px",
                            height: "16px",

                            position: "absolute",
                            top: 40,
                            right: 30,
                            color: "#ff5a3c",
                          }}
                        />
                      </Box>
                      <Box
                        component="form"
                        position={"relative"}
                        sx={{
                          "& .MuiTextField-root": {
                            m: 1,
                            width: "710px",
                            mt: 3,
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        {" "}
                        <TextField
                          fullWidth
                          id="standard-multiline-static"
                          defaultValue="Type Your Name"
                          variant="standard"
                          sx={{
                            background: "#fff",
                            p: 2,
                            position: "relative",
                          }}
                        />
                        <PersonOutlineOutlinedIcon
                          style={{
                            width: "16px",
                            height: "16px",

                            position: "absolute",
                            top: 40,
                            right: 30,
                            color: "#ff5a3c",
                          }}
                        />
                      </Box>

                      <Box
                        component="form"
                        position={"relative"}
                        sx={{
                          "& .MuiTextField-root": {
                            m: 1,
                            width: "710px",
                            mt: 3,
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        {" "}
                        <TextField
                          fullWidth
                          id="standard-multiline-static"
                          defaultValue="Type Your Email"
                          variant="standard"
                          sx={{
                            background: "#fff",
                            p: 2,
                            position: "relative",
                          }}
                        />
                        <EmailOutlinedIcon
                          style={{
                            width: "16px",
                            height: "16px",

                            position: "absolute",
                            top: 40,
                            right: 30,
                            color: "#ff5a3c",
                          }}
                        />
                      </Box>

                      {/* CheckBox */}
                      <Box sx={{ display: "flex", mt: 3, mb: 4 }}>
                        <Checkbox />
                        <Typography variant="body2" color="#5c727d" mt={1.5}>
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      size="large"
                      type="submit"
                      variant="outlined"
                      sx={{
                        width: "140px",
                        padding: "17px 40px",
                        color: "#fff",
                        bgcolor: "#ff5a3c",
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Stack>

          {/* RIGHT SIGHT CARD */}
          <Stack width="440px" pl={"25px"} pr={"25px"}>
            {/* Building Price */}
            <Stack mb={5}>
              <Card
                style={{
                  maxWidth: "390px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                <CardContent>
                  <Box sx={{ marginTop: 2, marginBottom: 3 }}>
                    <Box sx={{ marginBottom: 1 }}>
                      <Typography
                        className="card_tite"
                        variant="h4"
                        sx={{
                          pl: 2,
                          mb: 3,
                          fontWeight: 500,
                          borderLeft: "5px solid #ff5a3c",
                        }}
                      >
                        Building Price
                      </Typography>
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="div"
                      style={{
                        color: "#ff5a3c",
                      }}
                    >
                      $578.000
                    </Typography>
                  </Box>
                  <Button
                    type="button"
                    variant="contained"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    Book now
                  </Button>
                  <Divider sx={{ mt: 2, mb: 2 }} />

                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    style={{ fontWeight: 600 }}
                  >
                    Request Home Tour
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 2,
                    }}
                  >
                    <Button variant="contained">In Person</Button>
                    <Button variant="contained">Virtual</Button>
                  </Box>
                  <Box sx={{ maxWidth: "100%", marginTop: 2, marginBottom: 3 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          label="Select date"
                          slotProps={{ textField: { fullWidth: true } }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                  <Button
                    type="button"
                    variant="contained"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    Request a tour
                  </Button>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    It's free, with no obligation - cancel anytime.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>

            {/* Popular Properties */}
            <Box
              maxHeight="580px"
              style={{ backgroundColor: "#fff", marginBottom: 40 }}
            >
              <Typography
                className="card_tite"
                variant="h4"
                sx={{
                  pl: 2,
                  m: 4,

                  fontWeight: 500,
                  borderLeft: "5px solid #ff5a3c",
                }}
              >
                Popular Proerties
              </Typography>

              <Swiper
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ maxHeight: 472, backgroundColor: "f0f4f7" }}
              >
                {popular_list.map((ele, index) => {
                  return (
                    <SwiperSlide style={{ maxWidth: "390px", height: "450px" }}>
                      <Card style={{ maxWidth: "390px", height: "400px" }}>
                        <CardMedia
                          component="img"
                          width="100%"
                          height="260"
                          image="/images/home/h2.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            style={{ color: "#ff5a3c", marginBottom: 2 }}
                          >
                            $ 456.000
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            style={{ fontWeight: 500, marginBottom: 2 }}
                          >
                            Hillstate Apartment
                          </Typography>
                          <Typography
                            variant="body2"
                            color="#5c727d"
                            sx={{ display: "flex", gap: 2, marginBottom: 2 }}
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
                            Itaewon, Seoul
                          </Typography>
                          <Box sx={{ display: "flex" }}>
                            <Typography variant="body2" color="text.secondary">
                              3 Bedroom
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              2 Bathroom
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              345 m Kv
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>

            {/* Top Rated Property */}
            <Stack mb={5}>
              <Card
                style={{
                  maxWidth: "390px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                <CardContent>
                  <Box sx={{ marginTop: 2, marginBottom: 3 }}>
                    <Box sx={{ marginBottom: 1 }}>
                      <Typography
                        className="card_tite"
                        variant="h4"
                        sx={{
                          pl: 2,
                          mb: 3,
                          fontWeight: 500,
                          borderLeft: "5px solid #ff5a3c",
                        }}
                      >
                        Top Rated Properties
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <img
                        width="90px"
                        height="65px"
                        src="/images/home/h3.jpg"
                        alt="Top Rated Product"
                      />
                      <Box sx={{ pl: 3 }}>
                        <Box>
                          <Rating
                            size="small"
                            name="half-rating"
                            defaultValue={4.5}
                            precision={0.5}
                          />
                        </Box>
                        <Box>
                          <Link
                            underline="none"
                            href="#"
                            sx={{
                              color: "#071c1f",
                              "&:hover": {
                                color: "#ff5a3c",
                              },
                            }}
                          >
                            Get Best Property On Our
                          </Link>
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            color: "#ff5a3c",
                          }}
                        >
                          $456.989
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ mt: 2, mb: 2 }} />

                  <Box sx={{ marginTop: 4 }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <img
                        width="90px"
                        height="65px"
                        src="/images/home/h3.jpg"
                        alt="Top Rated Product"
                      />
                      <Box sx={{ pl: 3 }}>
                        <Box>
                          <Rating
                            size="small"
                            name="half-rating"
                            defaultValue={4.5}
                            precision={0.5}
                          />
                        </Box>
                        <Box>
                          <Link
                            underline="none"
                            href="#"
                            sx={{
                              color: "#071c1f",
                              "&:hover": {
                                color: "#ff5a3c",
                              },
                            }}
                          >
                            Get Best Property On Our
                          </Link>
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            color: "#ff5a3c",
                          }}
                        >
                          $456.989
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Stack>

            {/* Latest Blogs */}
            <Stack mb={5}>
              <Card
                style={{
                  maxWidth: "390px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                <CardContent>
                  <Box sx={{ marginTop: 2, marginBottom: 3 }}>
                    <Box sx={{ marginBottom: 1 }}>
                      <Typography
                        className="card_tite"
                        variant="h4"
                        sx={{
                          pl: 2,
                          mb: 3,
                          fontWeight: 500,
                          borderLeft: "5px solid #ff5a3c",
                        }}
                      >
                        Latest Blogs
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <img
                        width="80px"
                        height="80px"
                        src="/images/blogs/blog_user1.jpg"
                        alt="Blog USer"
                      />
                      <Box sx={{ pl: 2 }}>
                        <Box>
                          <Link
                            underline="none"
                            href="#"
                            variant="h5"
                            sx={{
                              color: "#071c1f",
                              "&:hover": {
                                color: "#ff5a3c",
                              },
                            }}
                          >
                            Renovating a Living Room? Experts Share Their
                            Secrets
                          </Link>
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            color: "#ff5a3c",
                          }}
                        >
                          <CalendarMonthIcon />
                          June 24 2023
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ mt: 2, mb: 2 }} />

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <img
                        width="80px"
                        height="80px"
                        src="/images/blogs/blog_user2.jpg"
                        alt="Blog USer"
                      />
                      <Box sx={{ pl: 2 }}>
                        <Box>
                          <Link
                            underline="none"
                            href="#"
                            variant="h5"
                            sx={{
                              color: "#071c1f",
                              "&:hover": {
                                color: "#ff5a3c",
                              },
                            }}
                          >
                            7 home trends that will shape your house in 2024
                          </Link>
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            color: "#ff5a3c",
                          }}
                        >
                          <CalendarMonthIcon />
                          December 24 2023
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ mt: 2, mb: 2 }} />

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <img
                        width="80px"
                        height="80px"
                        src="/images/blogs/blog_user3.jpg"
                        alt="Blog USer"
                      />
                      <Box sx={{ pl: 2 }}>
                        <Box>
                          <Link
                            underline="none"
                            href="#"
                            variant="h5"
                            sx={{
                              color: "#071c1f",
                              "&:hover": {
                                color: "#ff5a3c",
                              },
                            }}
                          >
                            10 Brilliant Ways To Decorate Your Home
                          </Link>
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            color: "#ff5a3c",
                          }}
                        >
                          <CalendarMonthIcon />
                          January 11 2023
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ mt: 2, mb: 2 }} />

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <img
                        width="80px"
                        height="80px"
                        src="/images/blogs/blog_user4.jpg"
                        alt="Blog USer"
                      />
                      <Box sx={{ pl: 2 }}>
                        <Box>
                          <Link
                            underline="none"
                            href="#"
                            variant="h5"
                            sx={{
                              color: "#071c1f",
                              "&:hover": {
                                color: "#ff5a3c",
                              },
                            }}
                          >
                            Make Your Bookshelf a Gallery
                          </Link>
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            color: "#ff5a3c",
                          }}
                        >
                          <CalendarMonthIcon />
                          February 10 2024
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Stack>

            {/* Top Rated Property */}
            <Stack mb={5}>
              <Card
                style={{
                  maxWidth: "390px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                <CardContent>
                  <Box sx={{ marginTop: 2, marginBottom: 3 }}>
                    <Box sx={{ marginBottom: 1 }}>
                      <Typography
                        className="card_tite"
                        variant="h4"
                        sx={{
                          pl: 2,
                          mb: 4,
                          fontWeight: 500,
                          borderLeft: "5px solid #ff5a3c",
                        }}
                      >
                        Follow us
                      </Typography>
                    </Box>
                    <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          bgcolor: "#f2f6f7",
                          color: "#5c727d",
                          padding: 1.2,
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            color: "#fff",
                            background: "#ff5a3c",
                          },
                        }}
                      >
                        <FacebookIcon />
                      </Link>
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          bgcolor: "#f2f6f7",
                          color: "#5c727d",
                          padding: 1.2,
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            color: "#fff",
                            background: "#ff5a3c",
                          },
                        }}
                      >
                        <TwitterIcon />
                      </Link>
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          bgcolor: "#f2f6f7",
                          color: "#5c727d",
                          padding: 1,
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            color: "#fff",
                            background: "#ff5a3c",
                          },
                        }}
                      >
                        <XIcon />
                      </Link>
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          bgcolor: "#f2f6f7",
                          color: "#5c727d",
                          padding: 1.2,
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            color: "#fff",
                            background: "#ff5a3c",
                          },
                        }}
                      >
                        <InstagramIcon />
                      </Link>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
