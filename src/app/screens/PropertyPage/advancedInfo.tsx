import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy";

export function AdvancedInfo() {
  return (
    <Stack>
      <Card sx={{ width: "370px", paddingLeft: "35px" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight={600}
          >
            Property Type
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
