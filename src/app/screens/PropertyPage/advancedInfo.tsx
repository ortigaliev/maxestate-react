import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { RangeSlider } from "./slider";

export function AdvancedInfo() {
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
            <FormControlLabel control={<Checkbox />} label="House" />
            <FormControlLabel control={<Checkbox />} label="Office Villa" />
            <FormControlLabel control={<Checkbox />} label="Luxary Home" />
            <FormControlLabel control={<Checkbox />} label="Apartment" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Studio"
            />
            <FormControlLabel control={<Checkbox />} label="Single Family" />
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
            <FormControlLabel control={<Checkbox />} label="Heigh Budget" />
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
