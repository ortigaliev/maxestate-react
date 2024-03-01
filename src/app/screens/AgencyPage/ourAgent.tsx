import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function OurAgent() {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      position={"relative"}
      mt={30}
    >
      <Box>
        <Box
          sx={{
            width: "310px",
            height: "262px",
            position: "absolute",
            top: -160,
            left: 50,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            width="310px"
            height="262px"
            src="https://houzez.co/wp-content/uploads/2024/01/Group-15-1.png"
            alt="agent"
          />
        </Box>
        <Card
          sx={{
            width: "400px",
            border: "1 px solid #DFE0E6",
            p: "100px 20px 10px 20px",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
              >
                Alice Brian
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                Real Estate Agent
              </Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"flex-end"}
                justifyContent={"center"}
                mt={2}
                mb={2}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontWeight="700"
                >
                  35 Sale
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ width: "2px", height: 17, mx: 1, bgcolor: "#000" }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontWeight="700"
                >
                  60 Rent
                </Typography>
              </Stack>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                Operating Since 2013
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                35 Verified Properties
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                4212+Buyers Served
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
                mt={4}
                mb={4}
              >
                <LocalPhoneIcon /> 010-9371-7177
              </Typography>
              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  display: "flex",
                  ml: "auto",
                  mr: "auto",
                  background: "none",
                  color: "#ff5a3c",
                  border: "2px solid #ff5a3c",
                  "&:hover": {
                    background: "#ff5a3c",
                    color: "#fff",
                  },
                }}
              >
                Contact Agent
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box>
        <Box
          sx={{
            width: "310px",
            height: "262px",
            position: "absolute",
            top: -160,
            left: 490,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            width="310px"
            height="262px"
            src="https://houzez.co/wp-content/uploads/2024/01/Group-37.png"
            alt="agent"
          />
        </Box>
        <Card
          sx={{
            width: "400px",
            border: "1 px solid #DFE0E6",
            p: "100px 20px 10px 20px",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
              >
                John David
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                Real Estate Agent
              </Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"flex-end"}
                justifyContent={"center"}
                mt={2}
                mb={2}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontWeight="700"
                >
                  32 Sale
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ width: "2px", height: 17, mx: 1, bgcolor: "#000" }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontWeight="700"
                >
                  43 Rent
                </Typography>
              </Stack>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                Operating Since 2015
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                39 Verified Properties
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                4212+Buyers Served
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
                mt={4}
                mb={4}
              >
                <LocalPhoneIcon /> 010-9371-7177
              </Typography>
              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  display: "flex",
                  ml: "auto",
                  mr: "auto",
                  background: "none",
                  color: "#ff5a3c",
                  border: "2px solid #ff5a3c",
                  "&:hover": {
                    background: "#ff5a3c",
                    color: "#fff",
                  },
                }}
              >
                Contact Agent
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box>
        <Box
          sx={{
            width: "310px",
            height: "262px",
            position: "absolute",
            top: -160,
            left: 930,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            width="310px"
            height="262px"
            src="https://houzez.co/wp-content/uploads/2024/01/Group-39-2.png"
            alt="agent"
          />
        </Box>
        <Card
          sx={{
            width: "400px",
            border: "1 px solid #DFE0E6",
            p: "100px 20px 10px 20px",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
              >
                Nathan James
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                Real Estate Agent
              </Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"flex-end"}
                justifyContent={"center"}
                mt={2}
                mb={2}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontWeight="700"
                >
                  44 Sale
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ width: "2px", height: 17, mx: 1, bgcolor: "#000" }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontWeight="700"
                >
                  53 Rent
                </Typography>
              </Stack>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                Operating Since 2017
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                22 Verified Properties
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                <CheckCircleOutlinedIcon sx={{ mx: 2, color: "#ff5a3c" }} />
                3500+Buyers Served
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
                mt={4}
                mb={4}
              >
                <LocalPhoneIcon /> 010-9371-7177
              </Typography>
              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  display: "flex",
                  ml: "auto",
                  mr: "auto",
                  background: "none",
                  color: "#ff5a3c",
                  border: "2px solid #ff5a3c",
                  "&:hover": {
                    background: "#ff5a3c",
                    color: "#fff",
                  },
                }}
              >
                Contact Agent
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Stack>
  );
}
