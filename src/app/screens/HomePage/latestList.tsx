import React from "react";
import { Box, Container, Icon, Stack } from "@mui/material";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { AspectRatio, Button, IconButton } from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PinchOutlinedIcon from "@mui/icons-material/PinchOutlined";

export function LatestList() {
  return (
    <div className="latest_frame">
      <Container>
        <Stack className="latest_frame_wrapper">
          <Box className="latest_frame_title">Property</Box>
          <Box className="latest_frame_title">Latest Listings</Box>
          <Stack className="latest_frame_grid">
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid>
                <CssVarsProvider>
                  <Card variant="outlined" sx={{ width: 410 }}>
                    <CardOverflow>
                      <AspectRatio ratio="2">
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
                          <PinchOutlinedIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

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
                      <AspectRatio ratio="2">
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
                          <PinchOutlinedIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

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
                      <AspectRatio ratio="2">
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
                          <PinchOutlinedIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

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
                      <AspectRatio ratio="2">
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
                          <PinchOutlinedIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

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
                      <AspectRatio ratio="2">
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
                          <PinchOutlinedIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

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
                      <AspectRatio ratio="2">
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
                          <PinchOutlinedIcon />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                        >
                          <FavoriteBorder />
                        </IconButton>

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
