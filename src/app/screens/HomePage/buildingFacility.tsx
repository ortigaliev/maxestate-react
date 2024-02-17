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

export function BuildingFacility() {
  return (
    <div className="service_frame">
      <Container>
        <Stack
          className="building_facility_wrapper service_frame_wrapper"
          sx={{ paddingTop: "115px", paddingBottom: "90px" }}
        >
          <Typography className="card_sub_title">Our Aminities</Typography>
          <Typography className="card_tite">Building Aminities</Typography>
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
                      Buy a home
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
              </CssVarsProvider>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
