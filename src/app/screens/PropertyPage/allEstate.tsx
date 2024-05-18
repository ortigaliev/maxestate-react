import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import BasicSelect from "./basicSelect";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { HomeModal } from "../../components/modal/home-modal";
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

import { RangeSlider } from "./slider";

export function AllEstate(props: any) {
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

              {/* BASIC SEARCH TOP SELECTOR */}
              <Box>
                <BasicSelect />
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
              <IconButton type="button" sx={{ p: 2, m: 0 }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>

            <Stack flexDirection={"row"}>
              {/* ALL ESTATES CARD */}
              <Box>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexGrow: 1, paddingTop: "20px" }}
                >
                  <Grid item xs={6}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt="All Estate"
                        height="312"
                        image="/images/home/h4.jpg"
                      />
                      <CardContent sx={{ padding: 5 }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            marginBottom: "15px",
                            color: "#ff5a3c",
                            fontSiz: "16px",
                          }}
                        >
                          Estate category
                        </Typography>
                        <Typography
                          color="text.primary"
                          sx={{ marginBottom: "15px", fontSiz: "22px" }}
                        >
                          Estate Name
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
                            Estate Address
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{ color: "#5c727d", marginBottom: "25px" }}
                        >
                          2 Bedrooms 2 Bathrooms 209 square Ft
                        </Typography>
                        <Stack
                          flexDirection={"row"}
                          gap={1}
                          className="lates_frame_button_wrapper"
                        >
                          <IconButton aria-label="delete">
                            <Favorite />
                          </IconButton>
                          <IconButton aria-label="delete">
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
                            Estate Price
                          </Typography>
                          <Box ml="auto" display="flex" gap={1}>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <div
                              /*  ref={(element) =>
                                  (refs.current[estate._id] = element)
                                } */
                              >
                                {" "}
                                3{/* {estate.estate_likes} */}
                              </div>
                              <Favorite sx={{ ml: 1 }} />
                            </IconButton>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Visibility sx={{ mr: 1 }} />3{" "}
                              {/* {estate.estate_views} */}
                            </IconButton>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt="All Estate"
                        height="312"
                        image="/images/home/h4.jpg"
                      />
                      <CardContent sx={{ padding: 5 }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            marginBottom: "15px",
                            color: "#ff5a3c",
                            fontSiz: "16px",
                          }}
                        >
                          Estate category
                        </Typography>
                        <Typography
                          color="text.primary"
                          sx={{ marginBottom: "15px", fontSiz: "22px" }}
                        >
                          Estate Name
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
                            Estate Address
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{ color: "#5c727d", marginBottom: "25px" }}
                        >
                          2 Bedrooms 2 Bathrooms 209 square Ft
                        </Typography>
                        <Stack
                          flexDirection={"row"}
                          gap={1}
                          className="lates_frame_button_wrapper"
                        >
                          <IconButton aria-label="delete">
                            <Favorite />
                          </IconButton>
                          <IconButton aria-label="delete">
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
                            Estate Price
                          </Typography>
                          <Box ml="auto" display="flex" gap={1}>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <div
                              /*  ref={(element) =>
                                  (refs.current[estate._id] = element)
                                } */
                              >
                                {" "}
                                3{/* {estate.estate_likes} */}
                              </div>
                              <Favorite sx={{ ml: 1 }} />
                            </IconButton>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Visibility sx={{ mr: 1 }} />3{" "}
                              {/* {estate.estate_views} */}
                            </IconButton>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
              {/* ADVANCED INFO */}
              <Box ml={2} mt={-21}>
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
                <Box mt={4}>
                  <Card sx={{ width: "370px", paddingLeft: "35px" }}>
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
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="House"
                      />
                      <FormControlLabel control={<Checkbox />} label="Willa" />
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
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Swimming Pool"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Parking"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Library"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Medical Center"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Kid's Playground"
                      />
                    </FormGroup>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      fontWeight={600}
                      mt={8}
                      mb={2}
                    >
                      Price Renge
                    </Typography>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Low Budget"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Medium"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="High Budget"
                      />
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
                      Bed/Bath
                    </Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Single" />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="double"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="High Tech"
                      />
                    </FormGroup>
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
                      <FormControlLabel control={<Checkbox />} label="Buying" />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Renting"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Selling"
                      />
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
                3
                /* allEstateSearchObj.page >= 3 ? allEstateSearchObj.page + 1 : 3 */
              }
              page={1 /* allEstateSearchObj.page */}
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
             /*  onChange={handlePaginationChange} */
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
