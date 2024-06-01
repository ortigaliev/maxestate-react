import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { FollowSearchObj, Follower, Following } from "../../../types/follow";
import { setMemberFollowings } from "./slice";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { useHistory } from "react-router-dom";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { retrieveMemberFollowings } from "./selector";
import FollowApiServer from "../../apiServer/followApiServer";
import { verifyMemberData } from "../../apiServer/verify";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowings: (data: Following[]) =>
    dispach(setMemberFollowings(data)),
});

const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  })
);

export function MemberFollowing(props: any) {
  /* INITIALIZATION */
  const history = useHistory();
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);

  const { mb_id, followRebuild, setFollowRebuild } = props;
  const [followingsSearchObj, setFollowingsSearchObj] =
    useState<FollowSearchObj>({
      page: 1,
      limit: 5,
      mb_id: mb_id,
    });
  useEffect(() => {
    const followService = new FollowApiServer();
    followService
      .getMemberFollowings(followingsSearchObj)
      .then((data) => setMemberFollowings(data))
      .catch((err) => console.log(err));
  }, [followingsSearchObj, followRebuild]);

  const unsubscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifyMemberData, Definer.auth_err1);

      const followService = new FollowApiServer();
      await followService.unsubscribe(id);

      await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const handlePaginationChange = (event: any, value: number) => {
    followingsSearchObj.page = value;
    setFollowingsSearchObj({ ...followingsSearchObj });
  };

  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member/other?mb_id=${mb_id}`);
    document.location.reload();
  };

  return (
    <div>
      <Container>
        <Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h1" gutterBottom>
              Following
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            ></Box>
          </Stack>

          <Divider sx={{ mt: 1, mb: 3 }} />

          {memberFollowings.map((following: Following) => {
            const image_url = following?.follow_member_data?.mb_image
              ? `${serverApi}/${following.follow_member_data.mb_image}`
              : "/images/default_user.png";
            return (
              <Stack>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  sx={{ keys: "index" }}
                >
                  <Box>
                    <img
                      width="150"
                      height="150"
                      src={image_url}
                      alt="blog_bg"
                      style={{ borderRadius: "50%", cursor: "pointer" }}
                      onClick={() => visitMemberHandler(following?.follow_id)}
                    />
                  </Box>

                  <Box sx={{ width: "316px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Rating
                        size="small"
                        name="Blog rating"
                        defaultValue={3.5}
                        precision={0.5}
                      />
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          color: "#ffb800",
                          "&:hover": {
                            color: "#ff5a3c",
                          },
                        }}
                      >
                        (95 Reviews)
                      </Link>
                    </Box>
                    <span
                      className="username_text"
                      style={{ color: "#ff5a3c" }}
                    >
                      {following?.follow_member_data?.mb_type}
                    </span>
                    <Typography
                      variant="h4"
                      gutterBottom
                      fontWeight={700}
                      style={{ cursor: "pointer" }}
                      onClick={() => visitMemberHandler(following?.follow_id)}
                    >
                      {following?.follow_member_data?.mb_nick}
                    </Typography>
                    <Box>
                      <CssVarsProvider>
                        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                          <Avatar src="/images/blogs/blog_user1.jpg" />
                          <Avatar src="/images/home/user_smile.jpg" />
                          <Avatar src="/images/blogs/blog_user2.jpg" />
                          <Avatar>+10</Avatar>
                        </AvatarGroup>
                      </CssVarsProvider>
                    </Box>
                  </Box>

                  {props.actions_enabled && (
                    <Button
                      variant="contained"
                      startIcon={<PersonOffIcon />}
                      onClick={(e) =>
                        unsubscribeHandler(e, following?.follow_id)
                      }
                    >
                      Unfollow
                    </Button>
                  )}
                </Stack>

                <Divider sx={{ mt: 3, mb: 3 }} />
              </Stack>
            );
          })}
          <Stack
            sx={{ my: "40px" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box className={"bottom_box"}>
              <Pagination
                count={
                  followingsSearchObj.page >= 3
                    ? followingsSearchObj.page + 1
                    : 3
                }
                page={followingsSearchObj.page}
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                    color="secondary"
                  />
                )}
                onChange={handlePaginationChange}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
