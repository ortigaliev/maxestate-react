import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TabPanel from "@material-ui/lab/TabPanel";

import React from "react";

export default function Process() {

  return (
    <div>
      <TabPanel value={"2"}>
        <Container>
          <Stack flexDirection={"row"} gap={2}>
            <Stack>
              <Typography
                variant="h2"
                style={{
                  padding: "20px 25px",
                  borderLeft: "3px solid #ff5a3c",
                }}
              >
                Paymen Method
              </Typography>
              <Stack width="600px" flexDirection={"column"} mt={3}>
                <Box>
                  <Card sx={{ maxWidth: 660, p: 3 }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Card Number"
                      />
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          id="outlined-helperText"
                          label="Valid Date"
                          defaultValue="08/26"
                        />
                        <TextField
                          id="outlined-password-input"
                          label="Authorized Signature"
                          type="Password"
                          autoComplete="current-password"
                        />
                      </Box>
                      <TextField
                        id="outlined-required"
                        label="Full name"
                        defaultValue="Ortigaliyev Muhammadjon"
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <img
                        width="50px"
                        height="31px"
                        src="/images/master.svg"
                        alt="master"
                      />
                      <img
                        width="50px"
                        height="31px"
                        src="/images/Paypal.svg"
                        alt="paypal"
                      />
                      <img
                        width="50px"
                        height="31px"
                        src="/images/union.svg"
                        alt="union"
                      />
                      <img
                        width="50px"
                        height="31px"
                        src="/images/viza.svg"
                        alt="viza"
                      />
                    </Box>
                  </Card>
                </Box>
              </Stack>
            </Stack>
            <Stack width="600px">
              <Typography
                variant="h2"
                style={{
                  padding: "20px 25px",
                  borderLeft: "3px solid #ff5a3c",
                }}
              >
                Card Total
              </Typography>
              <Box mt={3}>
                <Card sx={{ maxWidth: 600, p: 3 }}>
                  <Typography
                    variant="h3"
                    style={{
                      padding: "20px 0",
                      fontWeight: "700",
                      marginBottom: 3,
                    }}
                  >
                    Card Total
                  </Typography>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h4" color="text.secondary">
                        3 Rooms Manhattan × 2
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        $1.150.350
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h4" color="text.secondary">
                        OE Replica Wheels × 2
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        $1.700.000
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h4" color="text.secondary">
                        Wheel Bearing Retainer × 2
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        $990.000
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h4" color="text.secondary">
                        Moving Service and Handing
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        $700
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h4" color="text.secondary">
                        Vat
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        $00.00
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
                        $4.750.350
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ height: "58px" }}
                    >
                      Complete Your Order
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
