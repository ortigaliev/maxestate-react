import React, { useEffect, useState, useRef } from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetAgencies } from "../../screens/AgencyPage/selector";
import { Agency } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetAgencies } from "../../screens/AgencyPage/slice";
import { SearchObj } from "../../../types/others";
import AgencyApiServer from "../../apiServer/agencyApiServer";
import { serverApi } from "../../lib/config";
import assert from "assert";
import MemberApiServer from "../../apiServer/memberApiServer";
import { Definer } from "../../lib/Definer";
import { verifyMemberData } from "../../apiServer/verify";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";

/* REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTargetAgencies: (data: Agency[]) => dispach(setTargetAgencies(data)),
});

/* REDUX SELECTOR */
const targetAgenciesRetriever = createSelector(
  retrieveTargetAgencies,
  (targetAgencies) => ({
    targetAgencies,
  })
);

export function AllAgency() {
  /* INITIALIZATION */
  const { setTargetAgencies } = actionDispatch(useDispatch());
  const { targetAgencies } = useSelector(targetAgenciesRetriever);
  const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 6,
    order: "mb_point",
  });
  const refs: any = useRef([]);

  useEffect(() => {
    const agencyServer = new AgencyApiServer();
    agencyServer
      .getAgencies(targetSearchObject)
      .then((data) => setTargetAgencies(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  /* HANDLERS */
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

      const memberServer = new MemberApiServer(),
        like_result: any = await memberServer.memberLikeTarget({
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
      console.log("targetLikeLatest, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

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

              {targetAgencies.map((ele: Agency) => {
                const image_path = `${serverApi}/${ele.mb_image}`;
                return (
                  <Card
                    key={ele._id}
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
                    <CardContent>
                      <Typography level="title-lg" mb={2}>
                        {ele.mb_nick} AGENCY
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
                          <div
                            ref={(element) => (refs.current[ele._id] = element)}
                          >
                            {ele.mb_likes}
                          </div>
                          <FavoriteIcon
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
                );
              })}
            </Stack>
          </CssVarsProvider>
        </Stack>
        <Stack spacing={2} alignItems={"center"} mb={16}>
          <Pagination
            count={
              targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3
            }
            page={targetSearchObject.page}
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
