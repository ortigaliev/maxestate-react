import { Box, Button, Chip, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

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
import { useHistory } from "react-router-dom";

/* Icons */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TViewer from "../../components/tuieditor/TViewer";
import { ChosenBlog } from "./chosenBlog";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Member } from "../../../types/user";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenMemberBoBlogs,
  setChosenSingleBoBlog,
} from "./slice";
import { BoBlog, SearchMemberBlogsObj } from "../../../types/boBlog";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoBlogs,
  retrieveChosenSingleBoBlog,
} from "./selector";
import MemberApiServer from "../../apiServer/memberApiServer";
import BlogApiServer from "../../apiServer/blogApiServer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import FollowApiServer from "../../apiServer/followApiServer";
import { verifyMemberData } from "../../apiServer/verify";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenMemberBoBlogs: (data: BoBlog[]) =>
    dispach(setChosenMemberBoBlogs(data)),
  setChosenSingleBoBlog: (data: BoBlog) => dispach(setChosenSingleBoBlog(data)),
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

export function VisitOtherPage(props: any) {
  //INITIALIZIATION
  const history = useHistory();
  const { chosen_mb_id, chosen_bo_id } = props;
  const { setChosenMember, setChosenMemberBoBlogs, setChosenSingleBoBlog } =
    actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoBlogs } = useSelector(chosenMemberBoBlogsRetriever);
  const { chosenSingleBoBlog } = useSelector(chosenSingleBoBlogRetriever);
  const [value, setValue] = useState("1");
  const [followRebuild, setFollowRebuild] = useState<boolean>(false);

  const [blogsRebuild, setBlogsRebuild] = useState<Date>(new Date());
  const [memberBlogSearchObj, setMemberBlogSearchObj] =
    useState<SearchMemberBlogsObj>({ mb_id: chosen_mb_id, page: 1, limit: 3 });

  useEffect(() => {
    if (chosen_mb_id === verifyMemberData?._id) {
      history.push("/member");
    }

    const blogService = new BlogApiServer();
    if (chosen_bo_id) {
      blogService
        .getChosenBlog(chosen_bo_id)
        .then((data) => {
          setChosenSingleBoBlog(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    }
    blogService
      .getMemberCommunityBlogs(memberBlogSearchObj)
      .then((data) => setChosenMemberBoBlogs(data))
      .catch((err) => console.log(err));
  }, [memberBlogSearchObj, chosen_mb_id, blogsRebuild]);

  useEffect(() => {
    if (chosen_mb_id === verifyMemberData?._id) {
      history.push("/member");

      const memberService = new MemberApiServer();

      memberService
        .getChosenMember(memberBlogSearchObj.mb_id)
        .then((data) => setChosenMember(data))
        .catch((err) => console.log(err));
    }
  }, [chosen_mb_id, followRebuild]);
  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    memberBlogSearchObj.page = value;
    setMemberBlogSearchObj({ ...memberBlogSearchObj });
  };

  const renderChosenBlogHandler = async (bo_id: string) => {
    try {
      const blogService = new BlogApiServer();
      blogService
        .getChosenBlog(bo_id)
        .then((data) => {
          setChosenSingleBoBlog(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const subscribeHandler = async (e: any) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);

      const followService = new FollowApiServer();
      await followService.subscribe(e.target.value);

      await sweetTopSmallSuccessAlert("subscribed successfully", 1100, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const unsubscribeHandler = async (e: any) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);

      const followService = new FollowApiServer();
      await followService.unsubscribe(e.target.value);

      await sweetTopSmallSuccessAlert("unsubscribed successfully", 1100, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
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
                    <MemberBlog
                      chosenMemberBoBlogs={chosenMemberBoBlogs}
                      renderChosenBlogHandler={renderChosenBlogHandler}
                      setBlogsRebuild={setBlogsRebuild}
                    />

                    {/* Pagination Section */}
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={
                            memberBlogSearchObj.page >= 3
                              ? memberBlogSearchObj.page + 1
                              : 3
                          }
                          page={memberBlogSearchObj.page}
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
                  </Box>
                </TabPanel>

                {/* Followers */}
                <TabPanel value={"2"}>
                  <Box className={"menu_content"}>
                    <MemberFollowers
                      actions_enabled={false}
                      followRebuild={followRebuild}
                      setFollowRebuild={setFollowRebuild}
                      mb_id={chosen_mb_id}
                    />
                  </Box>
                </TabPanel>

                {/* Following */}
                <TabPanel value={"3"}>
                  <Box className={"menu_content"}>
                    <MemberFollowing
                      actions_enabled={false}
                      followRebuild={followRebuild}
                      setFollowRebuild={setFollowRebuild}
                      mb_id={chosen_mb_id}
                    />
                  </Box>
                </TabPanel>

                {/* Chosen Blog */}
                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>
                    <ChosenBlog />
                  </Box>
                  <Box className={"menu_content"}>
                    <TViewer chosenSingleBoBlog={chosenSingleBoBlog} />
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
                          {chosenMember?.mb_nick}
                        </Typography>
                        <Chip
                          sx={{
                            width: "80px",
                          }}
                          label={chosenMember?.mb_type}
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
                            Follower: {chosenMember?.mb_subscriber_cnt}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Following: {chosenMember?.mb_follow_cnt}
                          </Typography>
                        </Box>
                        <Box>
                          <TabList onChange={handleChange}>
                            {chosenMember?.me_followed &&
                            chosenMember?.me_followed[0]?.my_following ? (
                              <Tab
                                value={"4"}
                                component={(e) => (
                                  <Button
                                    value={chosenMember?._id}
                                    variant="contained"
                                    style={{ backgroundColor: "#ff5a3c" }}
                                    onClick={unsubscribeHandler}
                                  >
                                    Unfollow
                                  </Button>
                                )}
                              />
                            ) : (
                              <Tab
                                value={"4"}
                                component={(e) => (
                                  <Button
                                    value={chosenMember?._id}
                                    variant="contained"
                                    style={{ backgroundColor: "#ff5a3c" }}
                                    onClick={subscribeHandler}
                                  >
                                    Follow
                                  </Button>
                                )}
                              />
                            )}
                          </TabList>
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
                {/*  <TabList>
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
                </TabList> */}

                {/* Followers */}
                <TabList>
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("2")}>
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
                    value={"3"}
                    component={() => (
                      <ListItemButton onClick={() => setValue("3")}>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Following" />
                      </ListItemButton>
                    )}
                  />
                </TabList>

                {/* Chosen Blog */}
                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>
                    <ChosenBlog />
                  </Box>
                  <Box className={"menu_content"}>
                    <TViewer chosenSingleBoBlog={chosenSingleBoBlog} />
                  </Box>
                </TabPanel>
              </List>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
