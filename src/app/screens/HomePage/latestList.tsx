import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/joy/Grid";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { AspectRatio, IconButton } from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FavoriteBorder, Scale } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { HomeModal } from "../../components/modal/home-modal";

import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Estate } from "../../../types/estate";
import { setLatestEstate } from "./slice";
import { retrieveLatestEstate } from "./selector";
import EstateApiServer from "../../apiServer/estateApiServer";
import { serverApi } from "../../lib/config";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setLatestEstate: (data: Estate[]) => dispach(setLatestEstate(data)),
});

// REDUX SELECTOR
const latestEstateRetriever = createSelector(
  retrieveLatestEstate,
  (latestEstate) => ({
    latestEstate,
  })
);

export function LatestList() {
  //INITIALIZATION
  const { setLatestEstate } = actionDispatch(useDispatch());
  const { latestEstate } = useSelector(latestEstateRetriever);
  useEffect(() => {
    const estateServer = new EstateApiServer();
    estateServer
      .getTargetEstates({ order: "createdAt", page: 1, limit: 3 })
      .then((data) => setLatestEstate(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="latest_frame">
      <Container>
        <Stack
          className="latest_frame_wrapper"
          sx={{ paddingTop: "115px", paddingBottom: "90px" }}
        >
          <Typography className="card_sub_title">Property</Typography>
          <Typography className="card_tite">Latest Listings</Typography>
          <Stack className="latest_frame_grid">
            {/* Latest Lists Section */}

            <Grid
              container
              spacing={2}
              sx={{ flexGrow: 1, paddingTop: "20px" }}
            >
              {latestEstate.map((estate: Estate) => {
                const image_path = `${serverApi}/${estate.estate_images[0]}`;
                return (
                  <Grid>
                    <CssVarsProvider>
                      <Card
                        variant="outlined"
                        sx={{
                          width: 410,
                        }}
                      >
                        <CardOverflow
                          sx={{
                            bgcolor: "yellow",
                            "&:hover": {
                              bgcolor: "green",
                              borderRadius: 50,
                            },
                          }}
                        >
                          <AspectRatio ratio="1.3">
                            <Box
                              sx={{
                                transition: "1s",
                                "&:hover": {
                                  borderRadius: 3,
                                  backgroundColor: "#333",
                                },
                              }}
                            >
                              <img
                                src={image_path}
                                loading="lazy"
                                alt="latestList"
                                background-size="cover"
                              />
                            </Box>
                          </AspectRatio>
                        </CardOverflow>
                        <CardContent sx={{ padding: "15px" }}>
                          <Typography
                            sx={{ marginBottom: "15px", color: "#ff5a3c" }}
                            level="body-md"
                          >
                            {estate.estate_type}
                          </Typography>
                          <Typography
                            sx={{ marginBottom: "15px" }}
                            level="title-lg"
                          >
                            {estate.estate_name}
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
                            ></Typography>
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
                              {estate.estate_price}
                            </Typography>
                          </CardContent>
                        </CardOverflow>
                      </Card>
                    </CssVarsProvider>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
