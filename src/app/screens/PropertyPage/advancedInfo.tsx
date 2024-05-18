import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Radio, Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { RangeSlider } from "./slider";
import { EstateSearchObj } from "../../../types/others";
import { useEffect, useState } from "react";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { Estate } from "../../../types/estate";
import { setTargetEstates } from "../AgencyPage/slice";
import { retrieveTargetEstates } from "../AgencyPage/selector";
import EstateApiServer from "../../apiServer/estateApiServer";
import { useParams } from "react-router-dom";

/* REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTargetEstates: (data: Estate[]) => dispach(setTargetEstates(data)),
});

/* REDUX SELECTOR */
const targetEstatesRetriever = createSelector(
  retrieveTargetEstates,
  (targetEstates) => ({
    targetEstates,
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

export function AdvancedInfo(props: any) {
  /* INITIALIZATION */

  const { setTargetEstates } = actionDispatch(useDispatch());

  const { targetEstates } = useSelector(targetEstatesRetriever);
  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());
  const [collections, setCollections] = useState("");

  const [targetEstateSearchObj, setTargetEstateSearchObj] =
    useState<EstateSearchObj>({
      page: 1,
      limit: 8,
      order: "createdAt",
      estate_collection: "",
    });

  useEffect(() => {
    const estateServer = new EstateApiServer();
    estateServer
      .getTargetEstates(targetEstateSearchObj)
      .then((data) => setTargetEstates(data))
      .catch((err) => console.log(err));
  }, [targetEstateSearchObj, orderRebuild]);

  /* HANDLERS */
  const chosenCollectionHandler = (e: any) => {
    targetEstateSearchObj.page = 1;
    targetEstateSearchObj.estate_collection = e.target.value;
    setCollections(e.target.value);
    setTargetEstateSearchObj({ ...targetEstateSearchObj });
  };

  return (
    <Stack mt={4}>
      <Card sx={{ width: "370px", paddingLeft: "35px" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight={600}
            mt={2}
            mb={2}
          >
            Property Type
          </Typography>
          <FormGroup>
            {collection?.map((ele: string) => {
              return (
                <FormControlLabel
                  key={ele}
                  value={ele}
                  label={ele}
                  onChange={chosenCollectionHandler}
                  control={<Checkbox />}
                />
              );
            })}

            {/*  <FormControlLabel
              control={<Checkbox />}
              label="Willa"
              value="willa"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Luxary Home"
              value="luxary home"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Apartment"
              value="apartment"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Studio"
              value="studio"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Single Family"
              value="single family"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Business Center"
              value="business center"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Penthouse"
              value="penthouse"
            />
            <FormControlLabel control={<Checkbox />} label="etc" value="etc" /> */}
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
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Swimming Pool" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Parking"
            />
            <FormControlLabel control={<Checkbox />} label="Library" />
            <FormControlLabel control={<Checkbox />} label="Medical Center" />
            <FormControlLabel control={<Checkbox />} label="Kid's Playground" />
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
            <FormControlLabel control={<Checkbox />} label="Low Budget" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Medium"
            />
            <FormControlLabel control={<Checkbox />} label="High Budget" />
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
            <FormControlLabel control={<Checkbox />} label="High Tech" />
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
            <FormControlLabel control={<Checkbox />} label="Selling" />
          </FormGroup>
        </CardContent>
      </Card>
    </Stack>
  );
}
