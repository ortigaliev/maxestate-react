import { Box, Button, Container, Divider, Stack } from "@mui/material";

import Typography from "@mui/material/Typography";

import React from "react";
//REDUX
import { useSelector } from "react-redux";
import { retrieveFinishedOrders } from "../../screens/Card/selector";
import { createSelector } from "reselect";
import TabPanel from "@mui/lab/TabPanel";

// REDUX SELECTOR
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

export default function Finished() {
  /**INITIALIZATIONS */
  //const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <div>
      <TabPanel value={"3"}>
        <Container>
          <Stack p={4}>
            <Typography
              variant="h2"
              style={{ padding: "20px 25px", borderLeft: "3px solid #ff5a3c" }}
            >
              Finished Process
            </Typography>

            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Box>
                <Typography fontSize={50} component="h2" mb={3}>
                  Thanks for Ordering in this property!
                </Typography>
                <Typography variant="h2" component="h2">
                  Your Order ID:{" "}
                  <Typography
                    variant="h2"
                    component="h2"
                    fontWeight={800}
                    mb={3}
                  >
                    1243GT56YH
                  </Typography>
                </Typography>
                <Typography variant="h2" component="h2">
                  You Will Shortly Recived an phone call confitmation at 010-
                  9371-71**
                </Typography>
              </Box>
              <Divider sx={{ height: "4px", color: "#071c1f", padding: 4 }} />
              <Box width={560}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ height: "58px" }}
                >
                  Continue to Show Property
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </TabPanel>
    </div>
  );
}
