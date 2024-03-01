import {
  Box,
  Container,
  Divider,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const blog_list = Array.from(Array(3).keys());

export function FavoriteProperty() {
  return (
    <div>
      <Container>
        <Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h1" gutterBottom>
              My Property
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Box>Date Added</Box>
              <Box>Action</Box>
              <Box>Delete</Box>
            </Box>
          </Stack>
          <Divider sx={{ mt: 1, mb: 3 }} />

          {blog_list.map((ele, index) => {
            const blog_img = "/images/home/h3.jpg";
            return (
              <Stack>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  sx={{ keys: "index" }}
                >
                  <Box>
                    <img
                      width="165"
                      height="125"
                      src={blog_img}
                      alt="blog_bg"
                    />
                  </Box>
                  <Box sx={{ width: "316px" }}>
                    <Typography variant="h4" gutterBottom fontWeight={700}>
                      New Apartment with nice view
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#ff5a3c" }} /> Seoul
                      National Garden
                    </Box>
                    <Stack
                      flexDirection={"row"}
                      alignItems={" center"}
                      gap={4}
                      mt={2}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Rating
                          size="small"
                          name="Blog rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />{" "}
                        <Link
                          href="#"
                          underline="none"
                          sx={{
                            color: "#ffb800",
                            "&:hover": {
                              color: "#ff5a3c",
                            },
                          }}
                        >
                          (95 Reviews)
                        </Link>
                      </Box>
                    </Stack>
                  </Box>
                  <Box sx={{ mr: 2, width: "100px", textAlign: "center" }}>
                    {moment().startOf("hour").fromNow()}
                  </Box>
                  <Box sx={{ width: "80px", ml: 2, p: 2 }}>
                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        color: "#172b4d",
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                    >
                      Edit
                    </Link>
                  </Box>
                  <Box p={2}>
                    <DeleteIcon
                      sx={{
                        cursor: "pointer",
                        color: "#172b4d",
                        "&:hover": {
                          color: "#ff5a3c",
                        },
                      }}
                    />
                  </Box>
                </Stack>

                <Divider sx={{ mt: 3, mb: 3 }} />
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </div>
  );
}
