import { Box, Container, Stack } from "@mui/material";

import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";

import React, { useEffect, useState } from "react";
import Paused from "../../components/card/paused";
import Process from "../../components/card/processOrders";
import Finished from "../../components/card/finishedOrders";

//REDUX
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { serverApi } from "../../lib/config";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders,
} from "../Card/slice";
import { useHistory, useParams } from "react-router-dom";
import { Order } from "../../../types/order";
import OrderApiServer from "../../apiServer/orderApiServer";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
});

export default function OrderCardPage(props: any) {
  // INITIALIZATIONS
  const [value, setValue] = useState("1");
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  const { cartItems } = props;

  useEffect(() => {
    const orderServer = new OrderApiServer();
    orderServer
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderServer
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderServer
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, []);

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container>
        <TabContext value={value}>
          <Box className="order_nav_frame">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#979797",
                }}
              >
                <Tab
                  label="My orders"
                  value={"1"}
                  sx={{ fontSize: "20px", fontWeight: 600, color: "#ff5a3c" }}
                />
                <Tab
                  label="Order Process"
                  value={"2"}
                  sx={{ fontSize: "20px", fontWeight: 600, color: "#ff5a3c" }}
                />
                <Tab
                  label="Finished"
                  value={"3"}
                  sx={{ fontSize: "20px", fontWeight: 600, color: "#ff5a3c" }}
                />
              </TabList>
            </Box>
          </Box>
          <Stack className="order_main_content">
            <Paused />
            <Process />
            <Finished />
          </Stack>
        </TabContext>
        {/* <Stack p={4}>
          <Typography
            variant="h2"
            style={{ padding: "20px 25px", borderLeft: "3px solid #ff5a3c" }}
          >
            Card
          </Typography>
          <Card sx={{ maxWidth: "100%", padding: 4, mt: 3 }}>
            {order_card_list.map((ele, index) => {
              const card_img = "/images/home/h2.jpg";
              return (
                <CardActionArea>
                  <CardContent>
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box style={{ padding: "20px 25px" }}>
                        {" "}
                        <Checkbox
                          icon={<ClearIcon />}
                          checkedIcon={<ClearIcon style={{ color: "red" }} />}
                        />
                      </Box>
                      <Box style={{ padding: "20px 25px" }}>
                        <img
                          width={100}
                          height={71}
                          src={card_img}
                          alt="Card property Img"
                        />
                      </Box>
                      <Box style={{ padding: "20px 25px" }}>
                        <Link
                          underline="none"
                          variant="h3"
                          sx={{
                            fontWeight: "700",
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
                      <Typography variant="h3" style={{ padding: "20px 25px" }}>
                        $650.550
                      </Typography>
                      <Stack spacing={2} direction="row" alignItems={"center"}>
                        <Button
                          onClick={handleDecrement}
                          className="decrement"
                          style={{
                            fontSize: "24px",
                            width: "28px",
                            height: "57px",
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
                            width: "28px",
                            height: "57px",
                            borderColor: "#f2f6f7",
                            backgroundColor: "#f2f6f7",
                            color: "#000",
                          }}
                        >
                          +
                        </Button>
                      </Stack>
                      <Typography variant="h3" style={{ padding: "20px 25px" }}>
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
        <Stack width="450px" flexDirection={"column"} marginLeft={"auto"} p={4}>
          <Box>
            <Card sx={{ maxWidth: 450, p: 3 }}>
              <Typography
                variant="h3"
                style={{
                  padding: "20px 0",
                  fontWeight: "700",
                }}
              >
                Card Total
              </Typography>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" color="text.secondary">
                    Cart Subtotal
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
                    $2.750.350
                  </Typography>
                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" color="text.secondary">
                    Shipping
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
                    Free Shipping
                  </Typography>
                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" color="text.secondary">
                    Vat
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
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
                  <Typography variant="h4" color="#000" fontWeight="700">
                    Order Total
                  </Typography>
                  <Typography variant="h4" color="#000" fontWeight="700">
                    $2.750.350
                  </Typography>
                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Link
                  href="/card/checkout"
                  underline="none"
                  sx={{ height: "58px" }}
                >
                  Proceed to checkout
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Stack> */}
      </Container>
    </div>
  );
}
