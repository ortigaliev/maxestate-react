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
import TViewer from "../../components/tuieditor/TViewer";
import { ChosenBlog } from "./chosenBlog";

export function VisitOtherPage(_props: any) {
  //INITIALIZIATION
  const [value, setValue] = useState("1");

  // HANDLERS
  const handleChange = (_event: any, newValue: string) => {
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

                {/* Favorite Property */}
                <TabPanel value={"2"}>
                  <Box className={"menu_content"}>
                    <FavoriteProperty />
                  </Box>
                </TabPanel>

                {/* Followers */}
                <TabPanel value={"3"}>
                  <Box className={"menu_content"}>
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>

                {/* Following */}
                <TabPanel value={"4"}>
                  <Box className={"menu_content"}>
                    <MemberFollowing actions_enabled={false} />
                  </Box>
                </TabPanel>

                {/* Chosen Blog */}
                <TabPanel value={"5"}>
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
                          Khan Mit
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
                            Follower: 4
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Following: 3
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

                {/* Favorite Property */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("2")}>
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
                    value={"3"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("3")}>
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
                    value={"4"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("4")}>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Following" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Chosen Blog */}
                {/* <TabPanel value={"5"}>
                  <Box className={"menu_name"}>
                    <ChosenBlog />
                  </Box>
                  <Box className={"menu_content"}>
                    <TViewer text={`<div>Hello Blog<div/>`} />
                  </Box>
                </TabPanel> */}
              </List>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
