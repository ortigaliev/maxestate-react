import {
  Container,
  Stack,
  Box,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <div className="overlay">
        <Container>
          <Stack
            flexDirection={"row"}
            className="navbar_config"
            justifyContent={"space-between"}
          >
            <Box>
              <img src="/images/home/logo.png" alt="Logo" />
            </Box>
            <Stack
              className="navbar_links"
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/" activeClassName="underline">
                  Home
                </NavLink>
              </Box>
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/agency" activeClassName="underline">
                  Agency
                </NavLink>
              </Box>
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/property" activeClassName="underline">
                  Property
                </NavLink>
              </Box>
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/blog" activeClassName="underline">
                  Blog
                </NavLink>
              </Box>
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/contact" activeClassName="underline">
                  Contact
                </NavLink>
              </Box>
              {/* Shopping Cart  */}
              <Box className="hover-line ">
                <IconButton
                  aria-label="cart"
                  id="basic-button"
                  aria-controls={undefined}
                  aria-haspopup="true"
                  aria-expanded={undefined}
                  //onClick={handleClick}
                />
                <Badge badgeContent={3} color="secondary">
                  <Box className="hover-line_icon-box">
                    <img
                      className="hover-line_icon"
                      src="/images/home/shopping_cart.svg"
                      alt="Shopping Cart"
                    />
                  </Box>
                </Badge>
              </Box>
              <Box>
                <Button
                  className=" hover-line"
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
      </div>
    </div>
  );
}
