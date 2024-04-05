import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  TextField,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import TabPanel from "@material-ui/lab/TabPanel";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";

//REDUX
import { useSelector } from "react-redux";
import { retrievePausedOrders } from "../../screens/Card/selector";
import { createSelector } from "reselect";
import { serverApi } from "../../lib/config";
import { Dispatch } from "@reduxjs/toolkit";
import { useHistory, useParams } from "react-router-dom";

// REDUX SELECTOR
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const order_card_list = Array.from(Array(1).keys());

export default function Paused() {
  /**INITIALIZATIONS */
  //const { pausedOrders } = useSelector(pausedOrdersRetriever);
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <TabPanel value={"1"}>
        <Container>
          <Box>
            <Typography
              variant="h2"
              style={{
                padding: "20px 25px",
                borderLeft: "3px solid #ff5a3c",
              }}
            >
              My Orders
            </Typography>
          </Box>
          <Stack flexDirection={"row"} gap={2} mt={3}>
            <Stack>
              <Card sx={{ maxWidth: "100%", padding: 4 }}>
                {order_card_list.map((ele, index) => {
                  const card_img = "/images/home/h2.jpg";
                  return (
                    <CardActionArea key={index}>
                      <CardContent>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Box style={{ padding: "5px 10px" }}>
                            {" "}
                            <Checkbox
                              icon={<ClearIcon />}
                              checkedIcon={
                                <ClearIcon style={{ color: "red" }} />
                              }
                            />
                          </Box>
                          <Box style={{ padding: "5px 10px" }}>
                            <img
                              width={100}
                              height={71}
                              src={card_img}
                              alt="Card property Img"
                            />
                          </Box>
                          <Box style={{ padding: "5px 10px" }}>
                            <Link
                              underline="none"
                              variant="h5"
                              sx={{
                                fontWeight: "500",
                                color: "#071c1f",
                                "&:hover": {
                                  color: "#ff5a3c",
                                },
                              }}
                              href="#"
                            >
                              Luxury Villa in Hang-gang Seoul
                            </Link>
                          </Box>
                          <Typography
                            variant="h4"
                            style={{ padding: "5px 10px" }}
                          >
                            $650.550
                          </Typography>
                          <Stack
                            spacing={2}
                            direction="row"
                            alignItems={"center"}
                          >
                            <Button
                              onClick={handleDecrement}
                              className="decrement"
                              style={{
                                fontSize: "20px",
                                height: "37px",
                                borderColor: "#f2f6f7",
                                backgroundColor: "#f2f6f7",
                                color: "#000",
                              }}
                            >
                              -
                            </Button>
                            <Box
                              style={{
                                fontSize: "24px",
                              }}
                            >
                              {count}
                            </Box>
                            <Button
                              onClick={handleIncrement}
                              className="increment"
                              style={{
                                fontSize: "24px",
                                height: "37px",
                                borderColor: "#f2f6f7",
                                backgroundColor: "#f2f6f7",
                                color: "#000",
                              }}
                            >
                              +
                            </Button>
                          </Stack>
                          <Typography
                            variant="h4"
                            style={{ padding: "5px 10px" }}
                          >
                            $650.550
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  );
                })}
                <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "250px" },
                      display: "flex",
                      alignItems: "center",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Coupon Code"
                      variant="outlined"
                    />
                    <Button
                      size="large"
                      variant="contained"
                      sx={{ padding: 2, margin: 0 }}
                    >
                      Apply Coupon
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      size="large"
                      variant="contained"
                      sx={{ padding: 2, margin: 0 }}
                    >
                      Clear
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Stack>

            <Stack width="400px">
              <Card sx={{ maxWidth: "100%", mb: 3, pt: 3 }}>
                <CardActionArea>
                  <Box>
                    <img
                      src="/images/blogs/blog_user1.jpg"
                      width={117}
                      height={112}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      alt="user"
                    />
                  </Box>
                  <Chip
                    label="User"
                    sx={{
                      display: "flex",
                      ml: "auto",
                      mr: "auto",
                      width: "70px",
                      bgcolor: "#ff5a3c",
                      color: "#fff",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                    >
                      Muhammadjon Ortigaliyev
                    </Typography>

                    <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                    <Typography variant="body2" color="text.secondary" mt={3}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia, hic!
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        gap: 2,
                      }}
                    >
                      <LocationOnIcon /> Ansan
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Box>
                <Card sx={{ p: 3 }}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "20px 0",
                      fontWeight: "700",
                    }}
                  >
                    Card Total
                  </Typography>
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" color="text.secondary">
                        Cart Subtotal
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        $2.750.350
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" color="text.secondary">
                        Shipping
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        Free Shipping
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" color="text.secondary">
                        Vat
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        No
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h5" color="#000" fontWeight="700">
                        Order Total
                      </Typography>
                      <Typography variant="h5" color="#000" fontWeight="700">
                        $2.750.350
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        height: "58px",
                        bgcolor: "#ff5a3c",
                        color: "#fff",
                        "&:hover": {
                          bgcolor: "#fff",
                          color: "#ff5a3c",
                        },
                      }}
                    >
                      Proceed to checkout
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </TabPanel>
    </div>
  );
}
