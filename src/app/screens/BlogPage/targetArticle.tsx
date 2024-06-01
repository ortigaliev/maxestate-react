import React from "react";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BoBlog } from "../../../types/boBlog";
import { serverApi } from "../../lib/config";
import moment from "moment";
import assert from "assert";
import MemberApiServer from "../../apiServer/memberApiServer";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { verifyMemberData } from "../../apiServer/verify";
/* import moment from "moment"; */

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function TargetArticles(props: any) {
  /**HANDLERS */
  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);

      const memberService = new MemberApiServer();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "blog",
      });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 1200, false);
      props.setBlogsRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack>
      {props.targetBoBlogs?.map((blog: BoBlog) => {
        const blog_image_url = blog?.blog_image
          ? `${serverApi}/${blog?.blog_image}`
          : "/images/blogs/default_blog.jpg";

        return (
          <Link
            sx={{ textDecoration: "none" }}
            href={`/member/other?mb_id=${blog.mb_id}&bo_id=${blog._id}`}
          >
            {" "}
            <Card
              sx={{
                width: "100%",
                borderRadius: "30px",
                mb: 2,
                display: "flex",
              }}
            >
              <Box>
                <Box>
                  <img
                    width="155px"
                    height="155px"
                    src={blog_image_url}
                    alt="Blog main bg"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderBottomLeftRadius: "15px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Stack flexDirection={"row"} ml={2} maxWidth="100%">
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Avatar
                      alt="Article Avatar"
                      src={"/images/default_user.png"}
                    />
                    <Chip
                      label={blog?.member_data.mb_nick}
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          color: "#fff",
                          bgcolor: "#ff5a3c",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mr: 2,
                      }}
                    >
                      <Box>
                        <Checkbox
                          {...label}
                          icon={<FavoriteIcon />}
                          checkedIcon={
                            <FavoriteIcon style={{ color: "red" }} />
                          }
                          id={blog?._id}
                          onClick={targetLikeHandler}
                          checked={
                            blog?.me_liked && blog.me_liked[0]?.my_favorite
                              ? true
                              : false
                          }
                        />
                      </Box>
                      {blog?.blog_likes}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <VisibilityIcon /> {blog?.blog_views}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h5" component="h1">
                        {moment().format("YY-MM-DD HH-mm")}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    color="#ff5a3c"
                    sx={{
                      "&:hover": {
                        color: "#ff5a3c",
                      },
                    }}
                  >
                    {blog?.bo_id}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h5"
                    sx={{
                      "&:hover": {
                        color: "#ff5a3c",
                      },
                    }}
                  >
                    {blog?.blog_subject}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
}
