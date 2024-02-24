import React from "react";
import { Box, Container, Icon, Stack } from "@mui/material";
import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { AspectRatio, Button, IconButton } from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FavoriteBorder } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { HomeModal } from "../../components/modal/home-modal";
import { AgencyPagination } from "../AgencyPage/agencyPagination";
import { AdvancedInfo } from "./advancedInfo";

const property_list = Array.from(Array(6).keys());

export function AllProperty() {
  return (
    <div className="all_property">
      <Container>
        <Stack mt={5} mb={10} position={"relative"}>
          <Stack
            className="all_property_grid"
            sx={{ width: "880px", m: "15px 15px" }}
          >
            {/* Latest Lists Section */}
            <Box>
              <Grid
                container
                spacing={2}
                sx={{ flexGrow: 1, paddingTop: "20px" }}
              >
                {property_list.map((ele, index) => {
                  return (
                    <Grid>
                      <CssVarsProvider>
                        <Card variant="outlined" sx={{ width: 400 }}>
                          <CardOverflow>
                            <AspectRatio ratio="1.3">
                              <img
                                src="/images/home/home.jpg"
                                loading="lazy"
                                alt="latestList"
                                background-size="cover"
                              />
                            </AspectRatio>
                          </CardOverflow>
                          <CardContent sx={{ padding: "15px" }}>
                            <Typography
                              sx={{ marginBottom: "15px", color: "#ff5a3c" }}
                              level="body-md"
                            >
                              FOR SALE
                            </Typography>
                            <Typography
                              sx={{ marginBottom: "15px" }}
                              level="title-lg"
                            >
                              Luxury Villa in HanKang Park
                            </Typography>
                            <Stack
                              sx={{ marginBottom: "15px" }}
                              flexDirection={"row"}
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
                              <Typography
                                sx={{ color: "#5c727d" }}
                                level="body-sm"
                              >
                                California
                              </Typography>
                            </Stack>
                            <Typography
                              sx={{ color: "#5c727d", marginBottom: "25px" }}
                              level="body-sm"
                            >
                              3 Bedrooms 2 Bathrooms 3450 square Ft
                            </Typography>
                            <Stack
                              flexDirection={"row"}
                              gap={1}
                              className="lates_frame_button_wrapper"
                            >
                              <IconButton
                                variant="outlined"
                                color="neutral"
                                sx={{}}
                              >
                                <FavoriteBorder />
                              </IconButton>
                              <HomeModal />
                              <IconButton variant="outlined" color="neutral">
                                <AddCircleOutlineOutlinedIcon />
                              </IconButton>
                            </Stack>
                          </CardContent>
                          <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                              <Typography
                                level="body-lg"
                                fontWeight="bold"
                                textColor="text.secondary"
                                sx={{
                                  color: "#ff5a3c",
                                  padding: "10px 15px 5px 15px",
                                }}
                              >
                                340.000$
                              </Typography>
                            </CardContent>
                          </CardOverflow>
                        </Card>
                      </CssVarsProvider>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            {/* ADVANCED INFORMATION */}
            <Stack position={"absolute"} sx={{ top: 0, right: 0 }}>
              <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                Advanced Information
              </Typography>
              <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                About 1,620 results (0.82 secund)
                <Box>
                  <AdvancedInfo />
                </Box>
              </Typography>
            </Stack>
          </Stack>

          {/* PAGINATION */}
          <AgencyPagination />
        </Stack>
      </Container>
    </div>
  );
}
