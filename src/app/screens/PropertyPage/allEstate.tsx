import { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import BasicSelect from "./basicSelect";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

/* RORM GROUP */
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

/* ICONS */
import WindowIcon from "@mui/icons-material/Window";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Favorite, Visibility } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";

import { RangeSlider } from "./slider";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { Estate } from "../../../types/estate";
import { setAllEstates, setChosenEstate } from "./slice";
import { retrieveAllEstates } from "./selector";
import MemberApiServer from "../../apiServer/memberApiServer";
import { EstateSearchObj } from "../../../types/others";
import EstateApiServer from "../../apiServer/estateApiServer";
import { serverApi } from "../../lib/config";
import { setTargetEstates } from "../AgencyPage/slice";
import { useHistory } from "react-router-dom";

/* REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setAllEstates: (data: Estate[]) => dispach(setAllEstates(data)),
  setChosenEstate: (data: Estate) => dispach(setChosenEstate(data)),
  setTargetEstates: (data: Estate[]) => dispach(setTargetEstates(data)),
});

// REDUX SELECTOR
const allEstatesRetriever = createSelector(
  retrieveAllEstates,
  (allEstates) => ({
    allEstates,
  })
);

const collection = [
  "house",
  "office",
  "willa",
  "luxary home",
  "apartment",
  "studio",
  "single family",
  "business center",
  "penthouse",
  "etc",
];

const amenities = [
  "swimming-pool",
  "parking",
  "library",
  "medical-center",
  "kids-playground",
  "private-security",
  "smart-home",
];

const category = ["For Buy", "For Rent", "For Sell", "For Sale"];

export function AllEstate(props: any) {
  /* INStALIZATION */
  const history = useHistory();
  const { setAllEstates, setChosenEstate } = actionDispatch(useDispatch());
  const { allEstates } = useSelector(allEstatesRetriever);

  const [allEstateSearchObj, setAllEstateSearchObj] = useState<EstateSearchObj>(
    {
      page: 1,
      limit: 8,
      search: "",
      order: "createdAt",
      estate_collection: "",
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

  const chosenEstateHandler = (id: string) => {
    history.push(`estate/${id}`);
    window.scrollTo(0, 0);
  };

  const searchCollectionHandler = (e: any) => {
    console.log("e.target.value", e.target.checked);
    allEstateSearchObj.page = 1;
    allEstateSearchObj.estate_collection = e.target.checked
      ? e.target.value
      : null;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const searchAmenitiesHandler = (e: any) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.estate_amenities = e.target.checked
      ? e.target.value
      : null;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const searchPrice_rangeHandler = (e: any) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.estate_price_range = e.target.checked
      ? e.target.value
      : null;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const searchCategoryHandler = (e: any) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.estate_category = e.target.value;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const handlePaginationChange = (event: any, value: number) => {
    allEstateSearchObj.page = value;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  const targetLikeHandler = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

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

  const orderChangeHandler = (order: string) => {
    allEstateSearchObj.order = order;
    setAllEstateSearchObj({ ...allEstateSearchObj });
  };

  return (
    <div className="all_property">
      <Container>
        <Stack mt={5} mb={10} position={"relative"}>
          <Stack
            className="all_property_grid"
            sx={{ width: "100%", m: "15px 15px" }}
          >
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

              <Box>
                <BasicSelect
                  value={allEstateSearchObj.order}
                  options={[
                    { value: "newest", label: "Default" },
                    { value: "low_to_high", label: "Price-Low to High" },
                    { value: "high_to_low", label: "Price-High to Low" },
                  ]}
                  onChange={orderChangeHandler}
                />
              </Box>
            </Stack>

            <Stack
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-around"}
            >
              {/* ALL ESTATES CARD */}
              <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexGrow: 1, paddingTop: "20px", maxWidth: "820px" }}
                >
                  {allEstates.map((estate: Estate, index) => {
                    const image_path = `${serverApi}/${estate.estate_images[0]}`;
                    return (
                      <Grid item xs={6}>
                        <Card
                          key={estate._id}
                          sx={{ cursor: "pointer" }}
                          onClick={() => chosenEstateHandler(estate._id)}
                        >
                          <CardMedia
                            component="img"
                            alt="All Estate"
                            height="312"
                            image={image_path}
                          />
                          <CardContent sx={{ padding: 5 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{
                                marginBottom: "15px",
                                color: "#ff5a3c",
                                fontSize: "16px",
                                textTransform: "Uppercase",
                                fontWeight: "600",
                                lineHeight: "25px",
                              }}
                            >
                              {estate.estate_category}
                            </Typography>
                            <Typography
                              color="text.primary"
                              sx={{
                                marginBottom: "15px",
                                fontSiz: "22px",
                                textTransform: "Uppercase",
                                fontWeight: "600",
                                lineHeight: "28px",
                              }}
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
                                variant="body2"
                                color="text.secondary"
                                sx={{ color: "#5c727d" }}
                              >
                                {estate.estate_address}
                              </Typography>
                            </Stack>
                            <Typography
                              sx={{ color: "#ff5a3c", marginBottom: "25px" }}
                            >
                              {estate.estate_bed} Bedrooms /{estate.estate_bath}
                              Bathrooms /{estate.estate_area} square Ft
                            </Typography>
                            <Stack
                              flexDirection={"row"}
                              gap={1}
                              className="lates_frame_button_wrapper"
                            >
                              <IconButton
                                aria-label="delete"
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
                                aria-label="delete"
                                onClick={(e) => {
                                  props.onAdd(estate);
                                  e.stopPropagation();
                                }}
                              >
                                <AddCircleOutlineOutlinedIcon />
                              </IconButton>
                            </Stack>
                            <Divider sx={{ mt: "10px", mb: "10px" }} />
                            <Stack flexDirection={"row"} alignItems={"center"}>
                              <Typography
                                variant="h3"
                                component="h2"
                                style={{ color: "#ff5a3c" }}
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
                                    {" "}
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
                            </Stack>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>

              {/* ADVANCED INFO */}
              <Box ml={2} mt={-21} sx={{ position: "relative" }}>
                <Typography
                  gutterBottom
                  component="div"
                  fontSize={24}
                  fontWeight={700}
                  mt={8}
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
                <Box mt={7}>
                  <Card
                    sx={{
                      width: "370px",
                      paddingLeft: "35px",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      fontWeight={600}
                      mt={2}
                      mb={2}
                    >
                      Estate Collection
                    </Typography>
                    {/* ESTATE COLLECTION */}
                    <FormGroup>
                      {collection.map((ele: string) => {
                        return (
                          <FormControlLabel
                            control={<Checkbox />}
                            key={ele}
                            value={ele}
                            label={ele}
                            onChange={searchCollectionHandler}
                          />
                        );
                      })}
                    </FormGroup>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      fontWeight={600}
                      mt={8}
                      mb={2}
                    >
                      Amenities
                    </Typography>
                    {/* ESTATE AMENITIES */}
                    <FormGroup>
                      {amenities.map((ele: string) => {
                        return (
                          <FormControlLabel
                            control={<Checkbox />}
                            key={ele}
                            value={ele}
                            label={ele}
                            onChange={searchAmenitiesHandler}
                          />
                        );
                      })}
                    </FormGroup>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      fontWeight={600}
                      mt={8}
                      mb={2}
                    >
                      Filter by Price
                    </Typography>

                    <RangeSlider />

                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      fontWeight={600}
                      mt={8}
                      mb={2}
                    >
                      Category
                    </Typography>
                    <FormGroup>
                      {category.map((ele: string) => {
                        return (
                          <FormControlLabel
                            control={<Checkbox />}
                            key={ele}
                            value={ele}
                            label={ele}
                            onChange={searchCategoryHandler}
                          />
                        );
                      })}
                    </FormGroup>
                  </Card>
                </Box>
              </Box>
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
      </Container>
    </div>
  );
}
