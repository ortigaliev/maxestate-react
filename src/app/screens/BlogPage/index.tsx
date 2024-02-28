import { Container, Box, Stack, Divider } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../../css/blog.css";
import { BlogChat } from "./blogChat";
import { TargetArticles } from "./targetArticle";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

const targetBoArticles = [1, 2, 3, 4, 5];

export function BlogPage(props: any) {
  // INITIALIZATIONS
  const [value, setValue] = React.useState("1");

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };
  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack>
            <BlogChat />
            <Stack
              maxWidth="70%"
              className="community_all_frame"
              inputMode={"text"}
              style={{ border: "1px solid #ff5a3c" }}
            >
              <TabContext value={value}>
                <Box className={"article_tabs"}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "#fff", color: "#ff5a3c" }}
                    >
                      <Tab
                        style={{ color: "#ff5a3c" }}
                        label="All Articles"
                        value={"1"}
                      />
                      <Tab
                        style={{ color: "#ff5a3c" }}
                        label="Celebrity"
                        value={"2"}
                      />
                      <Tab
                        style={{ color: "#ff5a3c" }}
                        label="Agency rating"
                        value={"3"}
                      />
                      <Tab
                        style={{ color: "#ff5a3c" }}
                        label="Stories"
                        value={"4"}
                      />
                    </TabList>
                  </Box>
                </Box>

                <Box className={"article_main"}>
                  <TabPanel value={"1"}>
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles targetBoArticles={targetBoArticles} />
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
                    count={5}
                    page={1}
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
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
