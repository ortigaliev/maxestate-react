import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

export function NavbarOthers(props: any) {
  return (
    <div className="format_others home_navbar">
      <Container style={{ height: "116px" }}>
        <Stack
          flexDirection={"row"}
          className="navbar_config others_navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/images/agency/logo_black.png" alt="Logo" />
          </Box>
          <Stack
            className="navbar_links"
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box
              className="others_hover-line hover-line"
              onClick={props.setPath}
            >
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box
              className="others_hover-line hover-line"
              onClick={props.setPath}
            >
              <NavLink to="/agency" activeClassName="underline">
                Agency
              </NavLink>
            </Box>
            <Box
              className="agency_hover-line hover-line"
              onClick={props.setPath}
            >
              <NavLink to="/property" activeClassName="underline">
                Property
              </NavLink>
            </Box>
            <Box
              className="agency_hover-line hover-line"
              onClick={props.setPath}
            >
              <NavLink to="/blog" activeClassName="underline">
                Blog
              </NavLink>
            </Box>
            <Box
              className="agency_hover-line hover-line"
              onClick={props.setPath}
            >
              <NavLink to="/contact" activeClassName="underline">
                Contact
              </NavLink>
            </Box>
            {/* Shopping Cart  */}
            <Box className="others_hover-line hover-line ">
              <IconButton
                aria-label="cart"
                id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                //onClick={handleClick}
              />
              <Badge badgeContent={3} color="secondary">
                <Box className="others_hover-line_icon-box">
                  <ShoppingCartCheckoutOutlinedIcon />
                </Box>
              </Badge>
            </Box>
            <Box>
              <Button
                className=" others_hover-line hover-line"
                variant="contained"
                style={{
                  width: "160px",
                  height: "56px",
                  backgroundColor: "#ff5a3c",
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <div className="format_others_header">
        <Box className="format_others_img">
          {/* <img src="/images/home/others_bg.jpg" alt="" /> */}
        </Box>
      </div>
    </div>
  );
}
