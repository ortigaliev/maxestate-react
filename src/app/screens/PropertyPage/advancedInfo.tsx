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
import { useState } from "react";

export function AdvancedInfo() {
  const [allEstateSearchObj, setAllEstateSearchObj] = useState<EstateSearchObj>(
    {
      page: 1,
      limit: 8,
      order: "estate_views",
    }
  );

  /* HANDLERS */
  const searchCollectionHandler = (collection: string) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.estate_collection = collection;
    setAllEstateSearchObj({ ...allEstateSearchObj });
    console.log("estate_collection::", collection);
  };
  const searchOrderHandler = (order: string) => {
    allEstateSearchObj.page = 1;
    allEstateSearchObj.order = order;
    setAllEstateSearchObj({ ...allEstateSearchObj });
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
            <FormControlLabel
              control={<Checkbox />}
              label="House"
              value="apartment"
              onClick={() => searchCollectionHandler("apartment")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Office Villa"
              value="willa"
              onClick={() => searchCollectionHandler("willa")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Luxary Home"
              value="penthouse"
              onClick={() => searchCollectionHandler("penthouse")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Apartment"
              value="apartment"
              onClick={() => searchCollectionHandler("apartment")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Studio"
              value="office"
              onClick={() => searchCollectionHandler("office")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Single Family"
              value="family"
              onClick={() => searchCollectionHandler("family")}
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
