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
import React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import PersonOffIcon from "@mui/icons-material/PersonOff";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { Follower } from "../../../types/follow";
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

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowings: (data: Follower[]) => dispach(setMemberFollowings(data)),
});

const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  })
);

const followings = [
  { mb_nick: "Lion" },
  { mb_nick: "Alex" },
  { mb_nick: "Jonny" },
];

export function MemberFollowing(props: any) {
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);
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

          {followings.map((following) => {
            const follower_img = "/images/blogs/blog_user3.jpg";
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
                      src={follower_img}
                      alt="blog_bg"
                      style={{ borderRadius: "50%" }}
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

                    <Typography variant="h4" gutterBottom fontWeight={700}>
                      {following.mb_nick}
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
                    <Button variant="contained" startIcon={<PersonOffIcon />}>
                      Unfollow
                    </Button>
                  )}
                </Stack>

                <Divider sx={{ mt: 3, mb: 3 }} />
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </div>
  );
}
