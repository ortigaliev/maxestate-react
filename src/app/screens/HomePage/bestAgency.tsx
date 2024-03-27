import React, { useRef } from "react";
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
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Favorite } from "@mui/icons-material";

/* REDUX */
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveBestAgencies } from "./selector";
import { setBestAgencies } from "./slice";
import { Agency } from "../../../types/user";
import { serverApi } from "../../lib/config";
import { useHistory } from "react-router-dom";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import MemberApiServer from "../../apiServer/memberApiServer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";

/* REDUX SELECTOR */
const bestAgencyRetriever = createSelector(
  retrieveBestAgencies,
  (bestAgencies) => ({
    bestAgencies,
  })
);

export function BestAgency() {
  /* INIRIALIZATION */
  const history = useHistory();
  const { bestAgencies } = useSelector(bestAgencyRetriever);
  const refs: any = useRef([]);

  /**HANDLERS */
  const chosenAgencyHandler = (id: string) => {
    history.push(`/agency/${id}`);
  };
  const targetLikeBest = async (e: any, id: string) => {
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
      await sweetTopSmallSuccessAlert("success", 900, false);
    } catch (err: any) {
      console.log("targetLikeBest, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };
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
                <CssVarsProvider key={ele._id}>
                  <Card
                    onClick={() => chosenAgencyHandler(ele._id)}
                    variant="outlined"
                    sx={{
                      width: 400,
                      overflow: "auto",
                      resize: "horizontal",
                      cursor: "pointer",
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
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <div
                            ref={(element) => (refs.current[ele._id] = element)}
                          >
                            {ele.mb_likes}
                          </div>
                          <FavoriteIcon
                            onClick={(e) => targetLikeBest(e, ele._id)}
                            style={{
                              fill:
                                ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                  ? "red"
                                  : "#ccc",
                            }}
                          />
                        </IconButton>
                        <Divider orientation="vertical" />
                        <IconButton
                          variant="outlined"
                          color="neutral"
                          sx={{ mr: "auto" }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <div>{ele.mb_views}</div>
                          <RemoveRedEyeOutlinedIcon />
                        </IconButton>

                        <Button
                          variant="solid"
                          sx={{ bgcolor: "#ff5a3c" }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          Follow
                        </Button>
                      </CardActions>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
