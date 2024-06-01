import { useEffect, useRef, useState } from "react";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/material/TextField";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
} from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Favorite, Visibility } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import WindowIcon from "@mui/icons-material/Window";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";

import { HomeModal } from "../../components/modal/home-modal";
import "../../../css/property.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import assert from "assert";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { serverApi } from "../../lib/config";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { Estate } from "../../../types/estate";
import { setAllEstates, setChosenEstate } from "./slice";
import { retrieveAllEstates, retrieveChosenEstate } from "./selector";
import MemberApiServer from "../../apiServer/memberApiServer";
import { useHistory } from "react-router-dom";
import { EstateSearchObj } from "../../../types/others";
import EstateApiServer from "../../apiServer/estateApiServer";
import { verifyMemberData } from "../../apiServer/verify";

/* REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setAllEstates: (data: Estate[]) => dispach(setAllEstates(data)),
  setChosenEstate: (data: Estate) => dispach(setChosenEstate(data)),
});

// REDUX SELECTOR
const allEstatesRetriever = createSelector(
  retrieveAllEstates,
  (allEstates) => ({
    allEstates,
  })
);
const chosenEstateRetriever = createSelector(
  retrieveChosenEstate,
  (chosenEstate) => ({
    chosenEstate,
  })
);

export function AllProperty(props: any) {
  /**INITIALIZATIONS */
  const history = useHistory();
  const { setAllEstates, setChosenEstate } = actionDispatch(useDispatch());
  const { allEstates } = useSelector(allEstatesRetriever);

  const [allEstateSearchObj, setAllEstateSearchObj] = useState<EstateSearchObj>(
    {
      page: 1,
      limit: 8,
      order: "createdAt",
    }
  );

  const refs: any = useRef([]);

  useEffect(() => {
    const estateService = new EstateApiServer();
    estateService
      .getTargetEstates(allEstateSearchObj)
      .then((data) => setAllEstates(data))
      .catch((err) => console.log(err));
  }, [allEstateSearchObj]);

  /* useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]); */

  /* HANDLERS */
  const chosenEstateHandler = (id: string) => {
    history.push(`estate/${id}`);
    window.scrollTo(0, 0);
  };

  const searchCollectionHandler = (collection: string) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.estate_collection = collection;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };
  const searchOrderHandler = (order: string) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.order = order;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const handlePaginationChange = (event: any, value: number) => {
    allEstateSearchObj.page = value;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const targetLikeHandler = async (e: any, id: string) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);

      const memberServer = new MemberApiServer(),
        like_result = await memberServer.memberLikeTarget({
          like_ref_id: id,
          group_type: "estate",
        });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "#ccc";
        refs.current[like_result.like_ref_id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("success", 900, false);
    } catch (err: any) {
      console.log("targetLikeLatest, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="all_property">
      <Container>
        <CssVarsProvider>
          <Stack mt={5} mb={10} position={"relative"}>
            <Stack
              className="all_property_grid"
              sx={{ width: "880px", m: "15px 15px" }}
            >
              {/* MENU BAR AND DEFAULT */}
              <Stack
                width="820px"
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={5}
              >
                <Box sx={{ display: "flax", alignItems: "center", gap: 2 }}>
                  <Link href="#" underline="none">
                    <WindowIcon sx={{ width: "40px", height: "36px" }} />
                  </Link>
                  <Link href="#" underline="none">
                    <ViewListIcon sx={{ width: "40px", height: "36px" }} />
                  </Link>
                </Box>
              </Stack>

              {/* Search BAR */}
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: "1 0", width: "85ch" },
                  display: "flex",
                  alignItems: "center",
                }}
                noValidate
                autoComplete="off"
                bgcolor={"#f2f6f7"}
              >
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                />
                <Button sx={{ padding: 2, margin: 0 }}>
                  <SearchIcon />
                </Button>
              </Box>
              {/* Latest Lists Section */}
              <Box>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexGrow: 1, paddingTop: "20px" }}
                >
                  {allEstates.map((estate: Estate, index) => {
                    const image_path = `${serverApi}/${estate.estate_images[0]}`;
                    return (
                      <Grid key={index}>
                        <CssVarsProvider>
                          <Card
                            variant="outlined"
                            sx={{ width: 400, cursor: "pointer" }}
                            onClick={() => chosenEstateHandler(estate._id)}
                          >
                            <CardOverflow>
                              <AspectRatio ratio="1.3">
                                <img
                                  src={image_path}
                                  loading="lazy"
                                  alt="latestList"
                                  background-size="cover"
                                />
                              </AspectRatio>
                            </CardOverflow>
                            <CardContent sx={{ padding: "15px" }}>
                              <Typography
                                sx={{ marginBottom: "15px", color: "#ff5a3c" }}
                                level="body-md"
                              >
                                {estate.estate_category}
                              </Typography>
                              <Typography
                                sx={{ marginBottom: "15px" }}
                                level="title-lg"
                              >
                                {estate.estate_name}
                              </Typography>
                              <Stack
                                sx={{ marginBottom: "15px" }}
                                flexDirection={"row"}
                              >
                                <LocationOnIcon
                                  sx={{
                                    display: "block",
                                    width: 16,
                                    height: 20,
                                    fontSize: 20,
                                    color: "#ff5a3c",
                                  }}
                                />
                                <Typography
                                  sx={{ color: "#5c727d" }}
                                  level="body-sm"
                                >
                                  {estate.estate_address}
                                </Typography>
                              </Stack>
                              <Typography
                                sx={{ color: "#5c727d", marginBottom: "25px" }}
                                level="body-sm"
                              >
                                {estate.estate_bed} Bedrooms
                                {estate.estate_bath} Bathrooms
                                {estate.estate_area} square Ft
                              </Typography>
                              <Stack
                                flexDirection={"row"}
                                gap={1}
                                className="lates_frame_button_wrapper"
                              >
                                <IconButton
                                  variant="outlined"
                                  color="neutral"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <Favorite
                                    onClick={(e) =>
                                      targetLikeHandler(e, estate._id)
                                    }
                                    style={{
                                      fill:
                                        estate.me_liked &&
                                        estate.me_liked[0]?.my_favorite
                                          ? "red"
                                          : "#ccc",
                                    }}
                                  />
                                </IconButton>
                                <IconButton
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <HomeModal />
                                </IconButton>
                                <IconButton
                                  variant="outlined"
                                  onClick={(e) => {
                                    props.onAdd(estate);
                                    e.stopPropagation();
                                  }}
                                  color="neutral"
                                >
                                  <AddCircleOutlineOutlinedIcon />
                                </IconButton>
                              </Stack>
                            </CardContent>
                            <CardOverflow
                              variant="soft"
                              sx={{ bgcolor: "#fff" }}
                            >
                              <Divider inset="context" />
                              <CardContent orientation="horizontal">
                                <Typography
                                  level="body-lg"
                                  fontWeight="bold"
                                  textColor="text.secondary"
                                  sx={{
                                    color: "#ff5a3c",
                                    padding: "10px 15px 5px 15px",
                                  }}
                                >
                                  $ {estate.estate_price}
                                </Typography>
                                <Box ml="auto" display="flex" gap={1}>
                                  <IconButton
                                    onClick={(e) => {
                                      e.stopPropagation();
                                    }}
                                  >
                                    <div
                                      ref={(element) =>
                                        (refs.current[estate._id] = element)
                                      }
                                    >
                                      {estate.estate_likes}
                                    </div>
                                    <Favorite sx={{ ml: 1 }} />
                                  </IconButton>
                                  <IconButton
                                    onClick={(e) => {
                                      e.stopPropagation();
                                    }}
                                  >
                                    <Visibility sx={{ mr: 1 }} />
                                    {estate.estate_views}
                                  </IconButton>
                                </Box>
                              </CardContent>
                            </CardOverflow>
                          </Card>
                        </CssVarsProvider>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              {/* ADVANCED INFORMATION */}
              <Stack position={"absolute"} sx={{ top: 0, right: 0 }}>
                <Typography
                  gutterBottom
                  component="div"
                  fontSize={24}
                  fontWeight={700}
                  mt={2}
                  mb={1}
                >
                  Advanced Information
                </Typography>
                <Typography
                  component="div"
                  fontSize={16}
                  fontWeight={400}
                  sx={{ color: "#5c727d" }}
                >
                  About 1,620 results (0.82 secund)
                </Typography>
                {/* <Box>{<AdvancedInfo />}</Box> */}
                <Stack mt={4}>
                  <Card sx={{ width: "370px", paddingLeft: "35px" }}>
                    <CardContent>
                      <Typography>Estate Collection</Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Stack>
            </Stack>

            {/* PAGINATION */}
            <Box ml="auto" mr="auto" mt={2}>
              <Pagination
                count={
                  allEstateSearchObj.page >= 3 ? allEstateSearchObj.page + 1 : 3
                }
                page={allEstateSearchObj.page}
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
          </Stack>
        </CssVarsProvider>
      </Container>
    </div>
  );
}
