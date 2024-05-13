import React from "react";
import { Container, Divider, PaginationItem, Stack } from "@mui/material";
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
import { FavoriteBorder, FormatSize } from "@mui/icons-material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const order_list = Array.from(Array(5).keys());
console.log(order_list);

export function AllAgency() {
  return (
    <div className="all_agency">
      <Container>
        <Stack style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <CssVarsProvider>
            {/* CARD SECTION */}
            <Stack>
              <Typography
                mb={5}
                component="h2"
                style={{
                  textAlign: "center",
                  fontSize: "48px",
                  color: "#ff5a3c",
                }}
              >
                All Agencies
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              flexWrap={"wrap"}
              display={"flex"}
              height={"auto"}
              gap={2}
              sx={{ position: "relative", mb: 5 }}
            >
              {/* NEW CARD 1 */}

              {order_list.map((ele) => {
                return (
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
                    <CardContent>
                      <Typography level="title-lg" mb={2}>
                        A&A Realty Co
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
                          3, Sejong-ro 2-gil
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
                );
              })}
            </Stack>
          </CssVarsProvider>
        </Stack>
        <Stack spacing={2} alignItems={"center"} mb={16}>
          <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color={"secondary"}
              />
            )}
          />
        </Stack>
      </Container>
      <Stack>
        <Box
          className="all_agency_banner"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="/images/agency/slider21.png" alt="agency-left-img" />
          <Container>
            <Box
              mt={16}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                style={{
                  color: "#ff5a3c",
                  fontSize: "24px",
                }}
              >
                // any question you have //
              </Typography>
              <Typography
                style={{
                  color: "#fff",
                  fontSize: "56px",
                }}
              >
                897-876-987-90
              </Typography>
            </Box>
          </Container>

          <img
            src="/images/agency/agent.png"
            alt="agency-right-img"
            style={{ position: "relative", top: "-50px" }}
          />
        </Box>
      </Stack>
      <Container></Container>
    </div>
  );
}
