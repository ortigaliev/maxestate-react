import React from "react";
import { Container, Stack } from "@mui/material";
import Grid from "@mui/joy/Grid";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { AspectRatio,IconButton } from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FavoriteBorder } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { HomeModal } from "../../components/modal/home-modal";

export function LatestList() {
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
              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
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
                        <Typography sx={{ color: "#5c727d" }} level="body-sm">
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
                        <IconButton variant="outlined" color="neutral" sx={{}}>
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

              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1.3">
                        <img
                          className="latest_list_card_img"
                          src="/images/home/h2.jpg"
                          loading="lazy"
                          alt="latestList"
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
                        <Typography sx={{ color: "#5c727d" }} level="body-sm">
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
                        className="lates_frame_button_wrapper"
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{ width: "132px" }}
                      >
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

                        <HomeModal />
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
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

              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1.3">
                        <img
                          src="/images/home/h3.jpg"
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
                        <Typography sx={{ color: "#5c727d" }} level="body-sm">
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
                        className="lates_frame_button_wrapper"
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{ width: "132px" }}
                      >
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

                        <HomeModal />

                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
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

              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1.3">
                        <img
                          src="/images/home/h4.jpg"
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
                        <Typography sx={{ color: "#5c727d" }} level="body-sm">
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
                        className="lates_frame_button_wrapper"
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{ width: "132px" }}
                      >
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

                        <HomeModal />

                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
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

              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1.3">
                        <img
                          src="/images/home/h5.jpg"
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
                        <Typography sx={{ color: "#5c727d" }} level="body-sm">
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
                        className="lates_frame_button_wrapper"
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{ width: "132px" }}
                      >
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

                        <HomeModal />

                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
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

              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1.3">
                        <img
                          src="/images/home/h6.jpg"
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
                        <Typography sx={{ color: "#5c727d" }} level="body-sm">
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
                        className="lates_frame_button_wrapper"
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{ width: "132px" }}
                      >
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

                        <HomeModal />

                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
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
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
