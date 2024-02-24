import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const user_comment_list = Array.from(Array(4).keys());

export default function UserComment() {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {user_comment_list.map((ele, index) => {
        return (
          <Card
            sx={{
              maxWidth: 250,
              border: "3px solid #ff5a3c",
              pt: 2,
              pb: 2,
              borderRadius: 5,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/home/user_comment.jpg"
                alt="Comment Image"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: "auto",
                  mr: "auto",
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                >
                  USER
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <Stack spacing={1} display={"flex"} alignItems={"center"}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </CardActionArea>
          </Card>
        );
      })}
    </Stack>
  );
}
