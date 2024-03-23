import React, { useEffect } from "react";
import { Box, Container, Link, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CardOverflow, CssVarsProvider, Divider } from "@mui/joy";
import { AspectRatio, IconButton } from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Favorite } from "@mui/icons-material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import Avatar from "@mui/joy/Avatar";

import Chip from "@mui/joy/Chip";
import Visibility from "@mui/icons-material/Visibility";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Estate } from "../../../types/estate";
import { setTrendEstate } from "./slice";
import { retrieveTrendEstate } from "./selector";
import EstateApiServer from "../../apiServer/estateApiServer";
import { serverApi } from "../../lib/config";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTrendEstate: (data: Estate[]) => dispach(setTrendEstate(data)),
});

// REDUX SELECTOR
const trendEstateRetriever = createSelector(
  retrieveTrendEstate,
  (trendEstate) => ({
    trendEstate,
  })
);

const iconSx = {
  "&:hover": {
    backgroundColor: "red",
  },
};

export function FeaturedList() {
  //INITIALIZATION
  const { setTrendEstate } = actionDispatch(useDispatch());
  const { trendEstate } = useSelector(trendEstateRetriever);
  useEffect(() => {
    const trendServer = new EstateApiServer();
    trendServer
      .getTargetEstates({ order: "estate_likes", page: 1, limit: 4 })
      .then((data) => setTrendEstate(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="featured_frame" style={{ backgroundColor: "#fff" }}>
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
              <Typography className="card_sub_title">Property</Typography>
              <Typography className="card_tite">Featured Listings</Typography>
              <Stack
                className="featured_card_wrapper"
                flexDirection={"row"}
                justifyContent={"flex-start"}
              >
                {trendEstate.map((estate: Estate) => {
                  const image_path = `${serverApi}/${estate.estate_images[0]}`;
                  return (
                    <Card
                      key={estate._id}
                      className="featured_card_item"
                      variant="outlined"
                      sx={{ width: 410, mr: 3 }}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="1.3">
                          <img
                            className={"hero_img"}
                            src={image_path}
                            loading="lazy"
                            alt="latestList"
                            background-size="cover"
                          />
                        </AspectRatio>
                        <Stack className="location_galery">
                          <Box className="location_galery_label">For Sale</Box>
                          <Stack className="location_galery_info">
                            {/* Property address link*/}

                            <Link
                              sx={iconSx}
                              href="#"
                              className="location_galery_info-address"
                            >
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
                              sx={iconSx}
                              href="#"
                              className="location_galery_info-right"
                            >
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
                              sx={iconSx}
                              href="#"
                              className="location_galery_info-right"
                            >
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
                          {estate.estate_price} $
                        </Typography>
                        <Typography
                          sx={{ marginBottom: "15px" }}
                          level="title-lg"
                        ></Typography>

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
                            <Avatar
                              src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                              size="sm"
                              sx={{ "--Avatar-size": "3rem" }}
                            />
                            <Typography
                              sx={{ fontSize: "md", fontWeight: "md" }}
                            >
                              Kim
                            </Typography>
                            <Chip
                              variant="outlined"
                              color="neutral"
                              size="md"
                              sx={{
                                borderRadius: "sm",
                                py: 0.25,
                                px: 0.5,
                              }}
                            >
                              Top Seller
                            </Chip>
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
                              {estate.estate_likes}
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
                              {estate.estate_views}
                            </IconButton>
                          </Box>
                        </CardContent>
                      </CardOverflow>
                    </Card>
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
