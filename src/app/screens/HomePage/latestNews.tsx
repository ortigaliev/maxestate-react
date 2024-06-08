import React, { useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { Button, CssVarsProvider } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import { Favorite } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { retrieveNewsBoBlogs } from "./selector";
import { createSelector } from "reselect";
import { Agency } from "../../../types/user";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import MemberApiServer from "../../apiServer/memberApiServer";
import { useHistory } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import { BoBlog } from "../../../types/boBlog";
import BlogApiServer from "../../apiServer/blogApiServer";
import TViewer from "../../components/tuieditor/TViewer";
import { setNewsBoBlogs } from "./slice";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setNewsBoBlogs: (data: BoBlog[]) => dispach(setNewsBoBlogs(data)),
});

// REDUX SELECTOR
const newsBoBlogsRetriever = createSelector(
  retrieveNewsBoBlogs,
  (newsBoBlogs) => ({
    newsBoBlogs,
  })
);

export function LatestNews() {
  /* INITIALIZATION */
  const { setNewsBoBlogs } = actionDispatch(useDispatch());
  const { newsBoBlogs } = useSelector(newsBoBlogsRetriever);

  useEffect(() => {
    const communityServer = new BlogApiServer();
    communityServer
      .getTargetBlogs({
        bo_id: "all",
        page: 1,
        limit: 3,
        order: "createdAt",
      })
      .then((data) => setNewsBoBlogs(data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="latest_new_frame" style={{ background: "#fff" }}>
      <Container>
        <CssVarsProvider>
          <Stack className="lates_new_farme_wrapper" pt={"115px"} pb={"90px"}>
            <Typography className="card_sub_title">News & Blogs</Typography>
            <Typography mb={8} className="card_tite">
              Leatest News Feeds
            </Typography>
            <Stack flexDirection={"row"} gap={3}>
              {newsBoBlogs?.map((blog: BoBlog) => {
                const blog_image_url = blog?.blog_image
                  ? `${serverApi}/${blog?.blog_image}`
                  : "/images/blogs/default_blog.jpg";
                return (
                  <Card
                    key={blog._id}
                    className="news_card_item"
                    variant="outlined"
                    sx={{ width: 400, background: "#fff" }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1.3">
                        <img
                          src={blog_image_url}
                          loading="lazy"
                          alt="news_img"
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent style={{ padding: "20px" }}>
                      <Stack flexDirection={"row"} alignItems={"center"} mb={2}>
                        <PersonOutlineOutlinedIcon
                          style={{
                            fill: "#ff5a3c",
                            width: 16,
                            height: 18,
                          }}
                        />
                        <Typography level="body-sm" mr={4} ml={1}>
                          by: {blog?.member_data?.mb_nick}
                        </Typography>
                        <HouseOutlinedIcon
                          style={{
                            fill: "#ff5a3c",
                            width: 16,
                            height: 18,
                          }}
                        />
                        <Typography level="body-sm" ml={1}>
                          {blog?.bo_id}
                        </Typography>
                      </Stack>

                      <Typography
                        level="title-md"
                        sx={{
                          "&:hover": {
                            color: "#ff5a3c",
                          },
                        }}
                        style={{
                          fontSize: "22px",
                          fontWeight: 700,
                        }}
                      >
                        {blog?.blog_subject}
                      </Typography>
                    </CardContent>
                    <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                      <Divider inset="context" />
                      <CardContent
                        orientation="horizontal"
                        sx={{ alignItems: "center" }}
                      >
                        <Typography
                          level="body-xs"
                          fontWeight="md"
                          textColor="text.secondary"
                          style={{
                            paddingLeft: "20px",
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                          }}
                        >
                          <Visibility />
                          {blog?.blog_views}
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography
                          level="body-xs"
                          fontWeight="md"
                          textColor="text.secondary"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Favorite />
                          {blog?.blog_likes}
                        </Typography>
                        <Button
                          variant="soft"
                          style={{
                            background: "#ff5a3c",
                            color: "#fff",
                            marginLeft: "auto",
                          }}
                        >
                          READ MORE
                        </Button>
                      </CardContent>
                    </CardOverflow>
                  </Card>
                );
              })}
            </Stack>
          </Stack>
        </CssVarsProvider>
      </Container>
    </div>
  );
}
