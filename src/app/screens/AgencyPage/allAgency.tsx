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
import Input from "@mui/joy/Input";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function AllAgency() {
  return (
    <div className="all_agency">
      <Container>
        <Stack style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <CssVarsProvider>
            {/* NAVBAR SECTION */}
            <Stack
              style={{ paddingBottom: "50px" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  color: "#fff",
                }}
              >
                <Button sx={{ bgcolor: "#ff5a3c" }}>BEST</Button>
                <Button sx={{ bgcolor: "#ff5a3c" }}>POPULAR</Button>
                <Button sx={{ bgcolor: "#ff5a3c" }}>TREND</Button>
                <Button sx={{ bgcolor: "#ff5a3c" }}>NEW</Button>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    width: "500px",
                  }}
                >
                  <Input
                    placeholder="Search"
                    variant="outlined"
                    sx={{
                      alignItems: "center",
                      width: "70%",
                      color: "#ff5a3c",
                    }}
                  />
                  <Button sx={{ bgcolor: "#ff5a3c", width: "30%" }}>
                    Search
                  </Button>
                </Box>
              </Box>
            </Stack>
            {/* CARD SECTION */}
            <Stack>
              {/* NEW CARD 1 */}
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
                      <img
                        src="/images/agency/luxhouse.png"
                        loading="lazy"
                        alt="news_img"
                      />
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
                      A&A Realty Co
                    </Typography>
                    <Stack sx={{ marginBottom: "15px" }} flexDirection={"row"}>
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
                        3, Sejong-ro 2-gil
                      </Typography>
                    </Stack>
                    <Stack sx={{ marginBottom: "15px" }} flexDirection={"row"}>
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
                        01093717177
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardOverflow
                    variant="soft"
                    sx={{ bgcolor: "background.level1" }}
                  >
                    <CardActions buttonFlex="0 0 auto">
                      <IconButton variant="outlined" color="neutral">
                        <div>12k</div>
                        <FavoriteBorder />
                      </IconButton>
                      <Divider orientation="vertical" />
                      <IconButton
                        variant="outlined"
                        color="neutral"
                        sx={{ mr: "auto" }}
                      >
                        <div>10k</div>
                        <RemoveRedEyeOutlinedIcon />
                      </IconButton>
                      <Button variant="solid" sx={{ bgcolor: "#ff5a3c" }}>
                        Follow
                      </Button>
                    </CardActions>
                  </CardOverflow>
                </Card>
              </Link>
            </Stack>

            {/* PAGINATION SECTION */}
            <Stack></Stack>
          </CssVarsProvider>
        </Stack>
      </Container>
    </div>
  );
}
