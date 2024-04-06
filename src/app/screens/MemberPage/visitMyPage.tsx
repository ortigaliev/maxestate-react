import { Box, Chip, Container, Stack } from "@mui/material";
import React, { useState } from "react";

/* Card */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

/* List  */
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import GradingIcon from "@mui/icons-material/Grading";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsIcon from "@mui/icons-material/Settings";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import { TabList } from "@material-ui/lab";
import Tab from "@mui/material/Tab";
import { MemberBlog } from "./memberBlog";
import { MemberFollowers } from "./memberfollowers";
import { MemberFollowing } from "./memberFollowing";
import { MemberProperty } from "./memberProperty";
import { FavoriteProperty } from "./favoriteProperty";
import { MySetting } from "./mySetting";

/* Icons */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TuiEditor } from "../../components/tuieditor/tuiEditor";
import { CreateBlog } from "./createBlog";
import TViewer from "../../components/tuieditor/TViewer";
import { ChosenBlog } from "./chosenBlog";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Member } from "../../../types/user";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { useHistory } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenMemberBoBlogs,
  setChosenSingleBoBlog,
} from "./slice";
import { BoBlog } from "../../../types/boBlog";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoBlogs,
  retrieveChosenSingleBoBlog,
} from "./selector";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenMemberBoBlogs: (data: BoBlog[]) =>
    dispach(setChosenMemberBoBlogs(data)),
  setChosenSingleBoBlogs: (data: BoBlog) =>
    dispach(setChosenSingleBoBlog(data)),
});
// REDUX SELECTOR
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);

const chosenMemberBoBlogsRetriever = createSelector(
  retrieveChosenMemberBoBlogs,
  (chosenMemberBoBlogs) => ({
    chosenMemberBoBlogs,
  })
);

const chosenSingleBoBlogRetriever = createSelector(
  retrieveChosenSingleBoBlog,
  (chosenSingleBoBlog) => ({
    chosenSingleBoBlog,
  })
);

export function VisitMyPage(props: any) {
  //INITIALIZIATION

  const { setChosenMember, setChosenMemberBoBlogs, setChosenSingleBoBlogs } =
    actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoBlogs } = useSelector(chosenMemberBoBlogsRetriever);
  const { chosenSingleBoBlog } = useSelector(chosenSingleBoBlogRetriever);

  const [value, setValue] = useState("1");

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container>
        <Stack flexDirection={"row"} mt={5} mb={5}>
          <TabContext value={value}>
            <Stack className="my_page_left" width="880px">
              <Box>
                <TabPanel value="1">
                  {/* <Box className="menu_name">My Blog</Box> */}
                  <Box className="menu_content">
                    <MemberBlog />

                    {/* Pagination Section */}
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={3}
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
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>

                {/* My Properties */}
                <TabPanel value={"2"}>
                  <Box className={"menu_content"}>
                    <MemberProperty />
                  </Box>
                </TabPanel>

                {/* Create a Blog */}
                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>
                    <CreateBlog />
                  </Box>
                  <Box className={"write_content"}>
                    <TuiEditor />
                  </Box>
                </TabPanel>

                {/* Favorite Property */}
                <TabPanel value={"4"}>
                  <Box className={"menu_content"}>
                    <FavoriteProperty />
                  </Box>
                </TabPanel>
                {/* Followers */}
                <TabPanel value={"5"}>
                  <Box className={"menu_content"}>
                    <MemberFollowers actions_enabled={true} />
                  </Box>
                </TabPanel>

                {/* Following */}
                <TabPanel value={"6"}>
                  <Box className={"menu_content"}>
                    <MemberFollowing actions_enabled={true} />
                  </Box>
                </TabPanel>

                {/* Setting */}
                <TabPanel value={"7"}>
                  <Box className={"menu_content"}>
                    <MySetting />
                  </Box>
                </TabPanel>

                {/* Chosen Blog */}
                <TabPanel value={"8"}>
                  <Box className={"menu_name"}>
                    <ChosenBlog />
                  </Box>
                  <Box className={"menu_content"}>
                    <TViewer text={`<h3>Hello Blog</h3>`} />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            {/* Left side */}
            <Stack width={380}>
              <Box>
                <Card sx={{ maxWidth: 380, mb: 3 }}>
                  <Box>
                    <img
                      width="150"
                      height="150"
                      src="/images/setting/author.jpg"
                      alt="User Setting img"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "30px",
                      }}
                    />
                    <CardContent>
                      <Stack
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={2}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Max Mit
                        </Typography>
                        <Chip
                          sx={{
                            width: "80px",
                          }}
                          label="User"
                        />
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <FacebookIcon />
                          <InstagramIcon />
                          <YouTubeIcon />
                          <SendIcon />
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Typography gutterBottom variant="h5" component="div">
                            Follower: 2
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Following: 4
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Box>
                </Card>
              </Box>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 380,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Dashbord
                  </ListSubheader>
                }
              >
                {/* Blog */}
                <ListItemButton onClick={() => setValue("1")}>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Blogs" />
                </ListItemButton>

                {/* My property */}
                <TabList onChange={handleChange}>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("2")}>
                        <ListItemIcon>
                          <GradingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Properties" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Create a Blog */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"3"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("3")}>
                        <ListItemIcon>
                          <BorderColorIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create a Blog" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Favorite Property */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"4"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("4")}>
                        <ListItemIcon>
                          <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorite Properties" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Followers */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"5"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("5")}>
                        <ListItemIcon>
                          <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Followers" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Following */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"6"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("6")}>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Following" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Profile */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"7"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("7")}>
                        <ListItemIcon>
                          <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                      </ListItemButton>
                    )}
                  />
                </TabList>
                {/* Chosen Blog */}
                {/*  <TabPanel value={"8"}>

                  <Box className={"menu_content"}></Box>
                </TabPanel> */}
              </List>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
