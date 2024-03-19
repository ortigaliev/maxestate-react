import React from "react";
import { Container, Divider, Stack } from "@mui/material";
import {
  Card,
  CardActions,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Typography,
} from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

/* REDUX */
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveBestAgencies } from "./selector";
import { setBestAgencies } from "./slice";
import { Agency } from "../../../types/user";
import { serverApi } from "../../lib/config";

/* REDUX SELECTOR */
const bestAgencyRetriever = createSelector(
  retrieveBestAgencies,
  (bestAgencies) => ({
    bestAgencies,
  })
);

export function BestAgency() {
  /* INIRIALIZATION */
  const { bestAgencies } = useSelector(bestAgencyRetriever);
  return (
    <div className="service_frame">
      <Container>
        <Stack
          className="best_agency_wrapper service_frame_wrapper"
          sx={{ paddingTop: "115px", paddingBottom: "90px" }}
        >
          <Typography className="card_sub_title">Our Services</Typography>
          <Typography className="card_tite">Best Agency</Typography>
          <Stack flexDirection={"row"} gap={3} mt={3}>
            {bestAgencies.map((ele: Agency) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider>
                  <Link
                    overlay
                    href="#"
                    underline="none"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        width: 400,
                        // to make the card resizable
                        overflow: "auto",
                        resize: "horizontal",
                      }}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="1.3">
                          <img src={image_path} loading="lazy" alt="news_img" />
                        </AspectRatio>
                      </CardOverflow>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Avatar src="images/home/agent.jpg" size="lg" />
                        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                          <Avatar src="/images/agency/follower2.jpg" />
                          <Avatar src="/images/agency/follower3.jpg" />
                          <Avatar src="/images/agency/follower4.jpg" />
                          <Avatar>+4K</Avatar>
                        </AvatarGroup>
                      </Box>
                      <CardContent>
                        <Typography level="title-lg" mb={2}>
                          {ele.mb_nick}
                        </Typography>
                        <Stack
                          sx={{ marginBottom: "15px" }}
                          flexDirection={"row"}
                        >
                          <LocationOnIcon
                            sx={{
                              display: "block",
                              width: 25,
                              height: 30,
                              fontSize: 20,
                              color: "#ff5a3c",
                            }}
                          />
                          <Typography sx={{ color: "#5c727d" }} level="body-lg">
                            {ele.mb_address}
                          </Typography>
                        </Stack>
                        <Stack
                          sx={{ marginBottom: "15px" }}
                          flexDirection={"row"}
                        >
                          <LocalPhoneOutlinedIcon
                            sx={{
                              display: "block",
                              width: 25,
                              height: 30,
                              fontSize: 20,
                              color: "#ff5a3c",
                            }}
                          />
                          <Typography sx={{ color: "#5c727d" }} level="body-lg">
                            {ele.mb_phone}
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        variant="soft"
                        sx={{ bgcolor: "background.level1" }}
                      >
                        <CardActions buttonFlex="0 0 auto">
                          <IconButton variant="outlined" color="neutral">
                            <div>{ele.mb_likes}</div>
                            <FavoriteBorder />
                          </IconButton>
                          <Divider orientation="vertical" />
                          <IconButton
                            variant="outlined"
                            color="neutral"
                            sx={{ mr: "auto" }}
                          >
                            <div>{ele.mb_views}</div>
                            <RemoveRedEyeOutlinedIcon />
                          </IconButton>

                          <Button variant="solid" sx={{ bgcolor: "#ff5a3c" }}>
                            Follow
                          </Button>
                        </CardActions>
                      </CardOverflow>
                    </Card>
                  </Link>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
