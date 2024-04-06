import { Container, Box, Stack, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../../css/blog.css";
import { BlogChat } from "./blogChat";
import { TargetArticles } from "./targetArticle";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetBoBlogs } from "./slice";
import { BoBlog, SearchBlogsObj } from "../../../types/boBlog";
import { retrieveTargetBoBlogs } from "./selector";
import BlogApiServer from "../../apiServer/blogApiServer";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTargetBoBlogs: (data: BoBlog[]) => dispach(setTargetBoBlogs(data)),
});

// REDUX SELECTOR
const targetBoBlogsRetriever = createSelector(
  retrieveTargetBoBlogs,
  (targetBoBlogs) => ({
    targetBoBlogs,
  })
);

export function BlogPage(props: any) {
  // INITIALIZATIONS
  const { setTargetBoBlogs } = actionDispatch(useDispatch());
  const { targetBoBlogs } = useSelector(targetBoBlogsRetriever);
  const [value, setValue] = React.useState("1");

  const [searchBlogsObj, setSearchBlogsObj] = useState<SearchBlogsObj>({
    bo_id: "all",
    page: 1,
    limit: 5,
  });

  const [blogsRebuild, setBlogsRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const blogService = new BlogApiServer();
    blogService
      .getTargetBlogs(searchBlogsObj)
      .then((data) => setTargetBoBlogs(data))
      .catch((err) => console.log(err));
  }, [searchBlogsObj, blogsRebuild]);

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    searchBlogsObj.page = 1;
    switch (newValue) {
      case "1":
        searchBlogsObj.bo_id = "all";
        break;
      case "2":
        searchBlogsObj.bo_id = "Real Estate";
        break;
      case "3":
        searchBlogsObj.bo_id = "Business";
        break;
      case "4":
        searchBlogsObj.bo_id = "Decorate";
        break;
    }
    setSearchBlogsObj({ ...searchBlogsObj });
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    searchBlogsObj.page = value;
    setSearchBlogsObj({ ...searchBlogsObj });
  };
  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} gap={4}>
            <BlogChat />
            <Stack
              width="60%"
              className="community_all_frame"
              inputMode={"text"}
              style={{ background: "#C5C8C9", borderRadius: "30px" }}
            >
              <TabContext value={value}>
                <Box className={"article_tabs"} sx={{ p: 4 }}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "#E3C08D", color: "#000" }}
                    >
                      <Tab
                        style={{ color: "#000" }}
                        label="All Blogs"
                        value={"1"}
                      />
                      <Tab
                        style={{ color: "#000" }}
                        label="Real Estate"
                        value={"2"}
                      />
                      <Tab
                        style={{ color: "#000" }}
                        label="Business"
                        value={"3"}
                      />
                      <Tab
                        style={{ color: "#000" }}
                        label="Decorate"
                        value={"4"}
                      />
                    </TabList>
                  </Box>
                </Box>

                <Box className={"article_main"}>
                  <TabPanel value={"1"}>
                    <TargetArticles
                      targetBoBlogs={targetBoBlogs}
                      setBlogsRebuild={setBlogsRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles
                      targetBoBlogs={targetBoBlogs}
                      setBlogsRebuild={setBlogsRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles
                      targetBoBlogs={targetBoBlogs}
                      setBlogsRebuild={setBlogsRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles
                      targetBoBlogs={targetBoBlogs}
                      setBlogsRebuild={setBlogsRebuild}
                    />
                  </TabPanel>
                </Box>
                <Box>
                  <Divider sx={{ mb: 2 }} />
                </Box>
                <Box
                  className={"article_bott"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pb: 2,
                  }}
                >
                  <Pagination
                    count={4}
                    page={1}
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
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
