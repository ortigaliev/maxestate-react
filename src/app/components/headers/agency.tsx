import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Basket from "./basket";
import { verifyMemberData } from "../../apiServer/verify";

export function NavbarAgency(props: any) {
  return (
    <div className="format_agency home_navbar">
      <div className="agency_overlay">
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
                <NavLink to="/">Home</NavLink>
              </Box>

              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/agency" activeClassName="underline">
                  Agency
                </NavLink>
              </Box>

              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/estate" activeClassName="underline">
                  Property
                </NavLink>
              </Box>
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/blog" activeClassName="underline">
                  Blog
                </NavLink>
              </Box>
              {verifyMemberData ? (
                <Box className="hover-line">
                  <NavLink to="/member" activeClassName="underline">
                    My page
                  </NavLink>
                </Box>
              ) : null}
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/contact" activeClassName="underline">
                  Contact
                </NavLink>
              </Box>
              {verifyMemberData ? (
                <Box className="hover-line" onClick={props.setPath}>
                  <NavLink
                    to="/orders"
                    activeClassName="underline"
                    style={{ color: "#fff" }}
                  >
                    Order
                  </NavLink>
                </Box>
              ) : null}

              <Basket
                cartItems={props.cartItems}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                onDelete={props.onDelete}
                onDeleteAll={props.onDeleteAll}
              />

              {!verifyMemberData ? (
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
                    objectFit: "cover",
                  }}
                  src={verifyMemberData.mb_image}
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
                {!verifyMemberData ? (
                  <Button variant="contained" onClick={props.handleSignUpOpen}>
                    Sign Up
                  </Button>
                ) : null}
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>

      {/* <div className="format_agency_header">
        <Box className="format_agency_img"></Box>
      </div> */}
    </div>
  );
}
