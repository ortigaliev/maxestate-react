import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
/* import moment from "moment"; */

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/images/blogs/blog_img1.jpg";
        const art_avatar = "/images/blogs/blog_user1.jpg";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none", borderRadius: "30px" }}
          >
            <Card
              sx={{
                maxWidth: "100%",
                borderRadius: "30px",
                mb: 2,
                display: "flex",
              }}
            >
              <CardActionArea
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <Box>
                  <Box>
                    <img
                      width="155px"
                      height="155px"
                      src={art_image_url}
                      alt="Blog main bg"
                      style={{
                        borderTopLeftRadius: "15px",
                        borderBottomLeftRadius: "15px",
                      }}
                    />
                  </Box>
                </Box>
                <CardContent>
                  <Stack flexDirection={"row"}>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Avatar alt="Article Avatar" src={art_avatar} />
                        <Chip
                          label="@username"
                          variant="outlined"
                          sx={{
                            "&:hover": {
                              color: "#fff",
                              bgcolor: "#ff5a3c",
                            },
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h4"
                        component="h5"
                        sx={{
                          "&:hover": {
                            color: "#ff5a3c",
                          },
                        }}
                      >
                        Renovating a Living Room? Experts Share Their Secrets
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "auto",
                          mt: 2,
                        }}
                      >
                        <Typography variant="h5" component="h1">
                          24-05-10 13:15
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mr: 2,
                          }}
                        >
                          {" "}
                          <Box>
                            <Checkbox
                              {...label}
                              icon={<FavoriteIcon />}
                              checkedIcon={
                                <FavoriteIcon style={{ color: "red" }} />
                              }
                            />
                          </Box>
                          5
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <VisibilityIcon /> 10
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
}
