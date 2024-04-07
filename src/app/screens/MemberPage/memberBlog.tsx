import {
  Box,
  Checkbox,
  Container,
  Divider,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import MemberApiServer from "../../apiServer/memberApiServer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { BoBlog } from "../../../types/boBlog";
import { serverApi } from "../../lib/config";
const blog_list = Array.from(Array(3).keys());

export function MemberBlog(props: any) {
  const { renderChosenBlogHandler, chosenMemberBoBlogs, setBlogsRebuild } =
    props;

  /* HANDLER */
  const targetLikeHandler = async (e: any) => {
    try {
      e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiServer();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "blog",
      });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 1100, false);
      setBlogsRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
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
              My Blogs
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Box>Date Added</Box>
              <Box>Action</Box>
              <Box>Delete</Box>
            </Box>
          </Stack>
          <Divider sx={{ mt: 1, mb: 3 }} />

          {chosenMemberBoBlogs?.map((blog: BoBlog) => {
            const image_path = blog.blog_image
              ? `${serverApi}/${blog.blog_image}`
              : "/images/blogs/blog_img.jpg";
            return (
              <Stack>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  sx={{ keys: "index" }}
                >
                  <Box>
                    <Box>
                      <img
                        width="165"
                        height="125"
                        src={image_path}
                        alt="blog_bg"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <img
                        width="35px"
                        height="35px"
                        style={{ borderRadius: "50%", backgroundSize: "cover" }}
                        src={
                          blog?.member_data?.mb_image
                            ? `${serverApi}/${blog.member_data.mb_image}`
                            : "/images/blogs/blog_user3.jpg"
                        }
                        alt="blog_bg"
                      />
                    </Box>
                    <span className="all_article_author_user">
                      {blog?.member_data?.mb_nick}
                    </span>
                  </Box>
                  <Box sx={{ width: "px" }}>
                    <Typography variant="h5" gutterBottom>
                      {blog?.blog_subject}
                    </Typography>
                    <Stack
                      flexDirection={"row"}
                      alignItems={" center"}
                      gap={4}
                      mt={6}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <VisibilityIcon sx={{ color: "#ff5a3c" }} />
                        {blog?.blog_views}
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          icon={<FavoriteIcon />}
                          id={blog?._id}
                          checkedIcon={
                            <FavoriteIcon style={{ color: "red" }} />
                          }
                          checked={
                            blog?.me_liked && blog?.me_liked[0]?.my_favorite
                              ? true
                              : false
                          }
                          onClick={targetLikeHandler}
                        />

                        <Box>{blog?.blog_likes}</Box>
                      </Box>
                      <Box>
                        <Rating
                          size="small"
                          name="Blog rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />
                      </Box>
                    </Stack>
                  </Box>
                  <Box sx={{ mr: 2, width: "100px", textAlign: "center" }}>
                    {moment(blog?.createdAt).startOf("hour").fromNow()}
                  </Box>
                  <Box sx={{ width: "80px", ml: 2, p: 2 }}>
                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        color: "#172b4d",
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                    >
                      Edit
                    </Link>
                  </Box>
                  <Box p={2}>
                    <DeleteIcon
                      sx={{
                        cursor: "pointer",
                        color: "#172b4d",
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                    />
                  </Box>
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
function setArticlesRebuild(arg0: Date) {
  throw new Error("Function not implemented.");
}
