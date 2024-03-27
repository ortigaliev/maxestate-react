import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Divider,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
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
import { AgencyPagination } from "./agencyPagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Favorite } from "@mui/icons-material";

/* REDUX */
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetAgencies } from "./selector";
import { Agency } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetAgencies } from "./slice";
import AgencyApiServer from "../../apiServer/agencyApiServer";
import { serverApi } from "../../lib/config";
import { SearchObj } from "../../../types/others";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { Definer } from "../../lib/Definer";
import MemberApiServer from "../../apiServer/memberApiServer";
import assert from "assert";

const order_list = Array.from(Array(9).keys());

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTargetAgencies: (data: Agency[]) => dispach(setTargetAgencies(data)),
});

// REDUX SELECTOR
const targetAgenciesRetriever = createSelector(
  retrieveTargetAgencies,
  (targetAgencies) => ({
    targetAgencies,
  })
);

export function AllAgency() {
  /* INITIALIZATIONS */
  const { setTargetAgencies } = actionDispatch(useDispatch());
  const { targetAgencies } = useSelector(targetAgenciesRetriever);
  const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 6,
    order: "mb_point",
  });
  const refs: any = useRef([]);

  useEffect(() => {
    const agencyService = new AgencyApiServer();
    agencyService
      .getAgencies(targetSearchObject)
      .then((data) => setTargetAgencies(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  /**HANDLERS */
  const searchHandler = (category: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.order = category;
    setTargetSearchObject({ ...targetSearchObject });
  };

  const handlePaginationChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({ ...targetSearchObject });
  };

  const targetLikeHandler = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiServer(),
        like_result = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "member",
        });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "#ccc";
        refs.current[like_result.like_ref_id].innerHTML--;
      }

      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log("targetLikeTop, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="all_agency">
      <Container>
        <Stack style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <CssVarsProvider>
            {/* SERACH BAR SECTION */}
            <Stack
              style={{ paddingBottom: "50px" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <Button
                  onClick={() => searchHandler("mb_point")}
                  sx={{ bgcolor: "#ff5a3c" }}
                >
                  BEST
                </Button>
                <Button
                  onClick={() => searchHandler("mb_views")}
                  sx={{ bgcolor: "#ff5a3c" }}
                >
                  POPULAR
                </Button>
                <Button
                  onClick={() => searchHandler("mb_likes")}
                  sx={{ bgcolor: "#ff5a3c" }}
                >
                  TREND
                </Button>
                <Button
                  onClick={() => searchHandler("createdAt")}
                  sx={{ bgcolor: "#ff5a3c" }}
                >
                  NEW
                </Button>
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

            {/* CARD WRAPPER SECTION */}
            <Stack
              flexDirection={"row"}
              flexWrap={"wrap"}
              display={"flex"}
              height={"auto"}
              gap={2}
              sx={{ position: "relative", mb: 5 }}
            >
              {targetAgencies.map((ele: Agency) => {
                const image_path = `${serverApi}/${ele.mb_image}`;
                return (
                  <Link
                    overlay
                    underline="none"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Card
                      sx={{
                        width: 400,
                        // to make the card resizable
                        overflow: "auto",
                        resize: "horizontal",
                        gap: {},
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
                          {ele.mb_nick} Agency
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
                          <IconButton color="neutral">
                            <div
                              ref={(element) =>
                                (refs.current[ele._id] = element)
                              }
                            >
                              {ele.mb_likes}
                            </div>
                            <Favorite
                              onClick={(e) => targetLikeHandler(e, ele._id)}
                              style={{
                                fill:
                                  ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                    ? "red"
                                    : "#ccc",
                              }}
                            />
                          </IconButton>
                          <Divider orientation="vertical" />
                          <IconButton color="neutral" sx={{ mr: "auto" }}>
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
                );
              })}
            </Stack>
          </CssVarsProvider>

          <Box ml="auto" mr="auto">
            <Pagination
              count={
                targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3
              }
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
              onChange={handlePaginationChange}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
