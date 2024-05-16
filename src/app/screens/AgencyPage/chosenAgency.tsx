import CardOverflow from "@mui/joy/CardOverflow";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import Typography from "@mui/joy/Typography";
import React from "react";
import { useSelector } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Favorite } from "@mui/icons-material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import Chip from "@mui/joy/Chip";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/joy/CardContent";
import {
  AspectRatio,
  Card,
  CssVarsProvider,
  Divider,
  IconButton,
} from "@mui/joy";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

const agency_estate = Array.from(Array(8).keys());

export function ChosenAgency() {
  return (
    <div className="chosen_agency">
      <Container>
        <CssVarsProvider>
          <Stack>
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              className={"lf_card_wrapper"}
              sx={{
                paddingTop: "115px",
                paddingBottom: "90px",
              }}
            >
              <Typography
                className="card_tite"
                component={"h1"}
                style={{ fontSize: "48px", marginBottom: "40px" }}
              >
                Agency Name
              </Typography>

              <Stack
                className="featured_card_wrapper"
                flexDirection={"row"}
                flexWrap={"wrap"}
                display={"flex"}
                height={"auto"}
                gap={2}
              >
                {/* CARD 1 */}
                {agency_estate.map((ele) => {
                  return (
                    <Link to={`/estate/estate_id`}>
                      <Card variant="outlined" sx={{ width: 400 }}>
                        <CardOverflow>
                          <AspectRatio ratio="4/3">
                            <img
                              className={"hero_img"}
                              src="/images/home/h3.jpg"
                              loading="lazy"
                              alt="latestList"
                              background-size="cover"
                            />
                          </AspectRatio>
                          <Stack className="location_galery">
                            <Box className="location_galery_label">
                              For Sale
                            </Box>
                            <Stack className="location_galery_info">
                              {/* Property address link*/}
                              <Link
                                /* sx={iconSx} */
                                /* href="#" */
                                className="location_galery_info-address" to={"#"}                              >
                                <LocationOnIcon
                                  style={{
                                    display: "block",
                                    width: 16,
                                    height: 20,
                                    fontSize: 20,
                                    color: "#fff",
                                  }}
                                />
                                <Typography
                                  style={{ color: "#fff" }}
                                  level="body-sm"
                                >
                                  Belmonton Garden, Chicago
                                </Typography>
                              </Link>
                              {/* Featured list Location Picture section*/}
                              <Link
                                /* sx={iconSx} */
                                href="#"
                                className="location_galery_info-right" to={"#"}                              >
                                <CameraAltOutlinedIcon
                                  sx={{
                                    display: "block",
                                    width: 16,
                                    height: 20,
                                    fontSize: 20,
                                    mr: 1,
                                    color: "#fff",
                                  }}
                                />
                                <Typography
                                  sx={{ color: "#fff" }}
                                  level="body-sm"
                                >
                                  3
                                </Typography>
                              </Link>
                              <Link
                                /*  sx={iconSx} */
                                /* href="#" */
                                className="location_galery_info-right" to={"#"}                              >
                                <BedOutlinedIcon
                                  sx={{
                                    display: "block",
                                    width: 16,
                                    height: 20,
                                    fontSize: 20,
                                    color: "#fff",
                                  }}
                                />
                                <Typography
                                  sx={{ color: "#fff" }}
                                  level="body-sm"
                                >
                                  2
                                </Typography>
                              </Link>
                            </Stack>
                          </Stack>
                        </CardOverflow>
                        <CardContent sx={{ padding: "15px" }}>
                          <Typography
                            sx={{
                              marginBottom: "15px",
                              color: "#ff5a3c",
                              fontWeight: 700,
                            }}
                            level="body-md"
                          >
                            $ 600/Month
                          </Typography>
                          <Typography
                            sx={{ marginBottom: "15px" }}
                            level="title-lg"
                          >
                            Luxury Villa in HanKang Park
                          </Typography>
                          <Stack
                            flexDirection="row"
                            justifyContent={"space-between"}
                            sx={{ width: 260 }}
                          >
                            {/* Featured home describtion -1 */}
                            <Stack>
                              <Stack flexDirection={"row"} marginRight={"20px"}>
                                <span>3</span>
                                <BedOutlinedIcon
                                  sx={{
                                    display: "block",
                                    width: 20,
                                    height: 20,
                                    fontSize: 20,
                                  }}
                                />
                              </Stack>
                              <Typography
                                sx={{ color: "#5c727d" }}
                                level="body-sm"
                              >
                                Bedrooms
                              </Typography>
                              <Divider
                                orientation="vertical"
                                sx={{
                                  height: "45px",
                                  width: "2px",
                                  position: "absolute",
                                  left: 110,
                                }}
                              />
                            </Stack>
                            {/* Featured home describtion-2 */}
                            <Stack>
                              <Stack flexDirection={"row"}>
                                <span>2</span>
                                <BathtubOutlinedIcon
                                  sx={{
                                    display: "block",
                                    width: 20,
                                    height: 20,
                                    fontSize: 20,
                                  }}
                                />
                              </Stack>
                              <Typography
                                sx={{ color: "#5c727d" }}
                                level="body-sm"
                              >
                                Bedrooms
                              </Typography>
                              <Divider
                                orientation="vertical"
                                sx={{
                                  height: "45px",
                                  width: "2px",
                                  position: "absolute",
                                  left: 210,
                                }}
                              />
                            </Stack>
                            {/* Featured home describtion-3 */}
                            <Stack>
                              <Stack flexDirection={"row"}>
                                <span>340</span>
                                <SquareFootOutlinedIcon
                                  sx={{
                                    display: "block",
                                    width: 20,
                                    height: 20,
                                    fontSize: 20,
                                  }}
                                />
                              </Stack>
                              <Typography
                                sx={{ color: "#5c727d" }}
                                level="body-sm"
                              >
                                square kv
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                          <Divider inset="context" />
                          <CardContent orientation="horizontal">
                            <Box
                              sx={{
                                display: "flex",
                                gap: 1,
                                alignItems: "center",
                              }}
                            >
                              <IconButton
                                href="#"
                                sx={{
                                  fontWeight: "md",
                                  ml: "auto",
                                  color: "text.secondary",
                                  "&:hover": { color: "danger.plainColor" },
                                }}
                              >
                                <Favorite />
                                117
                              </IconButton>
                              <IconButton
                                href="#"
                                sx={{
                                  fontWeight: "md",
                                  color: "text.secondary",
                                  "&:hover": { color: "primary.plainColor" },
                                }}
                              >
                                <Visibility />
                                10.4k
                              </IconButton>
                            </Box>
                          </CardContent>
                        </CardOverflow>
                      </Card>
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </CssVarsProvider>
      </Container>
    </div>
  );
}
