import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer_root">
      <Stack className="footer_up">
        <Container>
          <Stack
            className="footer_main_stack"
            color={"white"}
            flexDirection={"row"}
          >
            <Stack className="col_1 footer_info_column">
              <Box>
                <img
                  className="footer_logo"
                  src="/images/home/logo.png"
                  alt="Footer Logo"
                />
              </Box>
              <Box className="footer_text">
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum is dummy text of the printing.
              </Box>
              <Stack
                className="footer_text_row"
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/location.svg"
                    alt="location"
                  />
                </Box>
                <Box className="footer_text">
                  Brooklyn, New York, United States
                </Box>
              </Stack>
              <Stack
                className="footer_text_row"
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/phone.svg"
                    alt="phone"
                  />
                </Box>
                <Box className="footer_text">+0123-456789</Box>
              </Stack>
              <Stack
                className="footer_text_row"
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/mail.svg"
                    alt="mail"
                  />
                </Box>
                <Box className="footer_text">example@example.com</Box>
              </Stack>
              <Stack
                className="footer_text_row"
                flexDirection={"row"}
                alignItems={"center"}
                style={{ marginTop: "10px" }}
              >
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/facebook.svg"
                    alt="facebook"
                  />
                </Box>
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/linkedin.svg"
                    alt="linkedin"
                  />
                </Box>
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/twitter.svg"
                    alt="twitter"
                  />
                </Box>
                <Box>
                  <img
                    className="footer_text_icon"
                    src="/icons/youtube.svg"
                    alt="youtube"
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack className="footer_info_column">
              <Stack className="footer_title">Company</Stack>
              <Box className="footer_text title-margin">About</Box>
              <Box className="footer_text title-margin">Blog</Box>
              <Box className="footer_text title-margin">All Products</Box>
              <Box className="footer_text title-margin">Location Map</Box>
              <Box className="footer_text title-margin">FAQ</Box>
              <Box className="footer_text title-margin">Contact us</Box>
            </Stack>

            <Stack className="footer_info_column">
              <Stack className="footer_title">Services</Stack>
              <Box className="footer_text title-margin">Order tracking</Box>
              <Box className="footer_text title-margin">Wish List</Box>
              <Box className="footer_text title-margin">Login</Box>
              <Box className="footer_text title-margin">My account</Box>
              <Box className="footer_text title-margin">Terms & Conditions</Box>
              <Box className="footer_text title-margin">Promotional Offers</Box>
            </Stack>
            <Stack className="footer_info_column">
              <Stack className="footer_title">Customer Care</Stack>
              <Box className="footer_text title-margin">Login tracking</Box>
              <Box className="footer_text title-margin">My account</Box>
              <Box className="footer_text title-margin">Wish List</Box>
              <Box className="footer_text title-margin">Order tracking</Box>
              <Box className="footer_text title-margin">FAQ</Box>
              <Box className="footer_text title-margin">Contact us</Box>
            </Stack>
            <Stack className="footer_info_column ">
              <Stack className="footer_title">Newsletter</Stack>
              <Box className="footer_text title-margin">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </Box>
              <Stack>
                <form action="#">
                  <Stack className="form_wrapper" flexDirection={"row"}>
                    <input
                      className="footer_form_input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <div className="btn_wrapper">
                      <button className="email_btn" type="submit">
                        <img src="/icons/send.svg" alt="Submit" />
                      </button>
                    </div>
                  </Stack>
                </form>
              </Stack>
              <Box className="footer_title text_padding">We Accept</Box>
              <Box className="footer_text" style={{ width: "270px" }}>
                <a href="/card">
                  <img
                    className="footer_payment_img"
                    src="/images/home/payment.png"
                    alt="payment"
                  />
                </a>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack className="footer_down">
        <Container>
          <Stack
            className="footer_down_wrapper"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box className="footer_text">All Rights Reserved @ Company</Box>
            <Stack flexDirection={"row"}>
              <NavLink className="footer_link_item footer_text" to={"#"}>
                Terms & Conditions
              </NavLink>
              <NavLink className="footer_link_item footer_text" to={"#"}>
                Claim
              </NavLink>
              <NavLink className="footer_link_item footer_text" to={"#"}>
                Privacy & Policy
              </NavLink>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
}
