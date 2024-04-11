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
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { retrieveMemberFollowers } from "./selector";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setMemberFollowers } from "./slice";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { useHistory } from "react-router-dom";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { FollowSearchObj, Follower } from "../../../types/follow";
import FollowApiServer from "../../apiServer/followApiServer";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispach(setMemberFollowers(data)),
});

// REDUX SELECTOR
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  })
);

export function MemberFollowers(props: any) {
  /* INITIALIZATION */
  const history = useHistory();
  const { mb_id, followRebuild, setFollowRebuild } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    {
      page: 1,
      limit: 5,
      mb_id: mb_id,
    }
  );

  useEffect(() => {
    const followService = new FollowApiServer();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followRebuild]);

  /**HANDLER */
  const handlePaginationChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };
  const subscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const followService = new FollowApiServer();
      await followService.subscribe(id);

      await sweetTopSmallSuccessAlert("subscribed successfully", 1100, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
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
              Followers
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

          {memberFollowers.map((follower: Follower) => {
            const image_url = follower?.subscriber_member_data?.mb_image
              ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
              : "/images/blogs/blog_user4.jpg";
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
                      onClick={() =>
                        visitMemberHandler(follower?.subscriber_id)
                      }
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
                          color: "#ff5a3c",
                          "&:hover": {
                            color: "#ffb800",
                          },
                        }}
                      >
                        (95 Reviews)
                      </Link>
                    </Box>
                    <span className="username_text">
                      {follower?.subscriber_member_data?.mb_type}
                    </span>
                    <Typography
                      variant="h4"
                      gutterBottom
                      fontWeight={700}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        visitMemberHandler(follower?.subscriber_id)
                      }
                    >
                      {follower.subscriber_member_data?.mb_nick}
                    </Typography>
                    <Box>
                      <CssVarsProvider>
                        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                          <Avatar src="/images/blogs/blog_user1.jpg" />
                          <Avatar src="/images/home/user_smile.jpg" />
                          <Avatar src="/images/blogs/blog_user3.jpg" />
                          <Avatar>+10</Avatar>
                        </AvatarGroup>
                      </CssVarsProvider>
                    </Box>
                  </Box>

                  <Box>
                    {props.actions_enabled &&
                      (follower?.me_followed &&
                      follower.me_followed[0]?.my_following ? (
                        <Button variant="contained">Following</Button>
                      ) : (
                        <Button
                          variant="contained"
                          startIcon={<PersonAddAltIcon />}
                          sx={{ background: "#0b2c3d" }}
                          onClick={(e) =>
                            subscribeHandler(e, follower?.subscriber_id)
                          }
                        >
                          Follow Back
                        </Button>
                      ))}
                  </Box>
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
                  followersSearchObj.page >= 3 ? followersSearchObj.page + 1 : 3
                }
                page={followersSearchObj.page}
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
