import {
  Container,
  Stack,
  Box,
  Button,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import Basket from "./basket";

export function NavbarHome(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <div className="format format-home home_navbar">
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
              <Box className="hover-line">
                <NavLink to="/" activeClassName="underline">
                  Home
                </NavLink>
              </Box>

              {/*  <Box className="hover-line">
                <NavLink to="/agency" activeClassName="underline">
                  Agency
                </NavLink>
              </Box> */}

              <Box className="hover-line">
                <NavLink to="/estate" activeClassName="underline">
                  Property
                </NavLink>
              </Box>
              <Box className="hover-line">
                <NavLink to="/blog" activeClassName="underline">
                  Blog
                </NavLink>
              </Box>
              {props.verifiedMemberData ? (
                <Box className="hover-line">
                  <NavLink to="/member" activeClassName="underline">
                    My page
                  </NavLink>
                </Box>
              ) : null}
              <Box className="hover-line">
                <NavLink to="/contact" activeClassName="underline">
                  Contact
                </NavLink>
              </Box>
              {props.verifiedMemberData ? (
                <Box className="hover-line">
                  <NavLink to="/order" activeClassName="underline">
                    Order
                  </NavLink>
                </Box>
              ) : null}

              <Basket />

              {!props.verifiedMemberData ? (
                <Box>
                  <Button
                    variant="contained"
                    style={{ color: "#fff", textDecoration: "none" }}
                    onClick={props.handleLoginOpen}
                  >
                    Sign In
                  </Button>
                </Box>
              ) : (
                <img
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "24px",
                  }}
                  src={props.verifiedMemberData.mb_image}
                  onClick={props.handleLogOutClick}
                />
              )}

              <Menu
                anchorEl={props.anchorEl}
                open={props.open}
                onClose={props.handleCloseLogOut}
                onClick={props.handleCloseLogOut}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={props.handleLogOutRequest}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" style={{ color: "blue" }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <Box>
                {!props.verifiedMemberData ? (
                  <Button variant="contained" onClick={props.handleSignUpOpen}>
                    Sign Up
                  </Button>
                ) : null}
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
