/* import { Container } from "@mui/material";
import React from "react";

export function BuildingFacility() {
  return (
    <div className="service_frame">
      <Container>BuildingFacility</Container>
    </div>
  );
}
 */

import React from "react";
import { Box, Container, Icon, Stack } from "@mui/material";
import { Card, CardContent, CssVarsProvider, Grid, Typography } from "@mui/joy";
import Link from "@mui/joy/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import PoolIcon from "@mui/icons-material/Pool";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BedroomBabyOutlinedIcon from "@mui/icons-material/BedroomBabyOutlined";
import CameraOutdoorOutlinedIcon from "@mui/icons-material/CameraOutdoorOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";

export function BuildingFacility() {
  return (
    <div className="service_frame facility_frame">
      <Container>
        <Stack
          className="building_facility_wrapper service_frame_wrapper"
          sx={{ paddingTop: "115px", paddingBottom: "90px" }}
        >
          <Typography className="card_sub_title">Our Aminities</Typography>
          <Typography className="card_tite">Building Aminities</Typography>

          <Stack flexDirection={"row"}>
            {/* GRID CARD 1 */}
            <Grid
              container
              justifyContent="center"
              spacing={3}
              sx={{ flexGrow: 1, paddingTop: "20px" }}
            >
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <DirectionsCarFilledOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Parking Space
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <PoolIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Swimming Pool
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <SecurityOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Private Security
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <VaccinesOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Medical Center
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <AutoStoriesOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Library Area
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <SingleBedOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Kid's Size Bed
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <CameraOutdoorOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Smart Homes
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
              <Grid>
                <CssVarsProvider>
                  <Link className={"facility_card_link"} href="/property">
                    <Card
                      className="main_focus_card facility_card"
                      sx={{
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "lg",
                        padding: "35px 30px",
                      }}
                    >
                      <CardContent
                        sx={{ alignItems: "center", textAlign: "center" }}
                      >
                        <Box className="facility_icon_box">
                          {/* <img
                            className="main_focus_img"
                            src="/images/home/buy.png"
                            loading="lazy"
                            alt="buy"
                          /> */}
                          <BedroomBabyOutlinedIcon
                            className="facility_category_icon icon"
                            style={{
                              fill: "#ff5a3c",
                              width: 45,
                              height: 45,
                            }}
                          />
                        </Box>
                        <Typography className="main_focus_title">
                          Kid's Playground
                        </Typography>
                        <Box className={"icon_arrow_box"}>
                          <ArrowForwardOutlinedIcon
                            className="icon_arrow"
                            style={{
                              width: 25,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </CssVarsProvider>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
