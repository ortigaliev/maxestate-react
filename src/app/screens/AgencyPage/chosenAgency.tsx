import CardOverflow from "@mui/joy/CardOverflow";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import React, { useEffect, useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/joy/CardContent";
import {
  AspectRatio,
  Card,
  CssVarsProvider,
  Divider,
  IconButton,
} from "@mui/joy";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveChosenAgency, retrieveTargetEstates } from "./selector";
import { Agency } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenAgency, setTargetEstates } from "./slice";
import { Estate } from "../../../types/estate";
import { EstateSearchObj } from "../../../types/others";
import EstateApiServer from "../../apiServer/estateApiServer";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import MemberApiServer from "../../apiServer/memberApiServer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";

/* REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenAgency: (data: Agency) => dispach(setChosenAgency(data)),
  setTargetEstates: (data: Estate[]) => dispach(setTargetEstates(data)),
});

/* REDUX SELECTOR */
const chosenAgencyRetriever = createSelector(
  retrieveChosenAgency,
  (chosenAgency) => ({
    chosenAgency,
  })
);

const targetEstatesRetriever = createSelector(
  retrieveTargetEstates,
  (targetEstates) => ({
    targetEstates,
  })
);

const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

export function ChosenAgency() {
  /* INITIALIZATION */
  const history = useHistory();
  let { agency_id } = useParams<{ agency_id: string }>();
  const { setChosenAgency, setTargetEstates } = actionDispatch(useDispatch());
  const { chosenAgency } = useSelector(chosenAgencyRetriever);
  const { targetEstates } = useSelector(targetEstatesRetriever);
  const [chosenAgencyId, setChosenAgencyId] = useState<string>(agency_id);
  const [targetEstateSearchObj, setTargetEstateSearchObj] =
    useState<EstateSearchObj>({
      page: 1,
      limit: 8,
      order: "createdAt",
    });

  const refs: any = useRef([]);

  useEffect(() => {
    const estateServer = new EstateApiServer();
    estateServer
      .getTargetEstates(targetEstateSearchObj)
      .then((data) => setTargetEstates(data))
      .catch((err) => console.log(err));
  }, [targetEstateSearchObj]);

  /* HANDLERS */
  const chosenAgencyHandler = (id: string) => {
    history.push(`estate/${id}`);
  };

  const targetLikeHandler = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberServer = new MemberApiServer(),
        like_result: any = await memberServer.memberLikeTarget({
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
    <div className="chosen_agency">
      <Container>
        <CssVarsProvider>
          <Stack>
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              className={"lf_card_wrapper"}
              sx={{
                paddingTop: "115px",
                paddingBottom: "90px",
              }}
            >
              <Typography
                className="card_tite"
                component={"h1"}
                style={{ fontSize: "48px", marginBottom: "40px" }}
              >
                Agency Name
              </Typography>

              <Stack
                className="featured_card_wrapper"
                flexDirection={"row"}
                flexWrap={"wrap"}
                display={"flex"}
                height={"auto"}
                gap={2}
              >
                {/* CARD 1 */}
                {targetEstates.map((estate: Estate) => {
                  const image_path = `${serverApi}/${estate.estate_images[0]}`;
                  function targetLikeHandler(
                    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
                    _id: any
                  ): void {
                    throw new Error("Function not implemented.");
                  }

                  return (
                    <Card
                      variant="outlined"
                      sx={{ width: 400 }}
                      key={estate._id}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="4/3">
                          <img
                            src={image_path}
                            className={"hero_img"}
                            loading="lazy"
                            alt="latestList"
                            background-size="cover"
                          />
                        </AspectRatio>
                        <Stack className="location_galery">
                          <Box className="location_galery_label">
                            {estate.estate_category}
                          </Box>
                          <Stack className="location_galery_info">
                            {/* Property address link*/}
                            <Link
                              /* sx={iconSx} */
                              /* href="#" */
                              className="location_galery_info-address"
                              to={"#"}
                            >
                              <LocationOnIcon
                                style={{
                                  display: "block",
                                  width: 16,
                                  height: 20,
                                  fontSize: 20,
                                  color: "#fff",
                                }}
                              />
                              <Typography
                                style={{ color: "#fff" }}
                                level="body-sm"
                              >
                                {estate.estate_address}
                              </Typography>
                            </Link>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                      <CardContent sx={{ padding: "15px" }}>
                        <Typography
                          sx={{
                            marginBottom: "15px",
                            color: "#ff5a3c",
                            fontWeight: 700,
                          }}
                          level="body-md"
                        >
                          ${estate.estate_price}
                        </Typography>
                        <Typography
                          sx={{ marginBottom: "15px" }}
                          level="title-lg"
                        >
                          {estate.estate_name}
                        </Typography>
                        <Stack
                          flexDirection="row"
                          justifyContent={"space-between"}
                          sx={{ width: 260 }}
                        >
                          {/* Featured home describtion -1 */}
                          <Stack>
                            <Stack flexDirection={"row"} marginRight={"20px"}>
                              <span>{estate.estate_bed}</span>
                              <BedOutlinedIcon
                                sx={{
                                  display: "block",
                                  width: 20,
                                  height: 20,
                                  fontSize: 20,
                                }}
                              />
                            </Stack>
                            <Typography
                              sx={{ color: "#5c727d" }}
                              level="body-sm"
                            >
                              Bedrooms
                            </Typography>
                            <Divider
                              orientation="vertical"
                              sx={{
                                height: "45px",
                                width: "2px",
                                position: "absolute",
                                left: 110,
                              }}
                            />
                          </Stack>
                          {/* Featured home describtion-2 */}
                          <Stack>
                            <Stack flexDirection={"row"}>
                              <span>{estate.estate_bath}</span>
                              <BathtubOutlinedIcon
                                sx={{
                                  display: "block",
                                  width: 20,
                                  height: 20,
                                  fontSize: 20,
                                }}
                              />
                            </Stack>
                            <Typography
                              sx={{ color: "#5c727d" }}
                              level="body-sm"
                            >
                              Bedrooms
                            </Typography>
                            <Divider
                              orientation="vertical"
                              sx={{
                                height: "45px",
                                width: "2px",
                                position: "absolute",
                                left: 210,
                              }}
                            />
                          </Stack>
                          {/* Featured home describtion-3 */}
                          <Stack>
                            <Stack flexDirection={"row"}>
                              <span>{estate.estate_area}</span>
                              <SquareFootOutlinedIcon
                                sx={{
                                  display: "block",
                                  width: 20,
                                  height: 20,
                                  fontSize: 20,
                                }}
                              />
                            </Stack>
                            <Typography
                              sx={{ color: "#5c727d" }}
                              level="body-sm"
                            >
                              square kv
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>
                      <CardOverflow variant="soft" sx={{ bgcolor: "#fff" }}>
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            <IconButton
                              sx={{
                                fontWeight: "md",
                                ml: "auto",
                                color: "text.secondary",
                                "&:hover": { color: "danger.plainColor" },
                              }}
                            >
                              <FavoriteIcon
                                style={{
                                  fill:
                                    estate?.me_liked &&
                                    estate?.me_liked[0]?.my_favorite
                                      ? "red"
                                      : "#ccc",
                                }}
                              />
                              <div
                                ref={(element) =>
                                  (refs.current[estate._id] = element)
                                }
                              >
                                {estate.estate_likes}
                              </div>
                            </IconButton>
                            <IconButton
                              sx={{
                                fontWeight: "md",
                                color: "text.secondary",
                                "&:hover": { color: "primary.plainColor" },
                              }}
                            >
                              <Visibility />
                              {estate.estate_views}
                            </IconButton>
                          </Box>
                        </CardContent>
                      </CardOverflow>
                    </Card>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </CssVarsProvider>
      </Container>
    </div>
  );
}
