import { Container, Stack, Box, Button, Badge } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function NavbarHome(props: any) {
  const location = useLocation();
  const page = location.pathname.replace("/", "");

  console.log("page", page);
  // home => ''
  // agency => 'agency'

  return (
    <div className="format home_navbar">
      <div className="overlay">
        <Container>
          <Stack
            flexDirection={"row"}
            className={`navbar_config ${
              page === "agency" ? "agency_navbar_config" : ""
            }`}
            justifyContent={"space-between"}
          >
            <Box>
              {page === "" ? (
                <img src="/images/home/logo.png" alt="Logo" />
              ) : (
                <img src="/images/agency/logo_black.png" alt="Logo" />
              )}
            </Box>
            <Stack
              className="navbar_links"
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                className={`hover-line ${
                  page === "agency" ? "agency_hover-line" : ""
                }`}
              >
                <NavLink to="/" activeClassName="underline">
                  Home
                </NavLink>
              </Box>

              <Box className="hover-line">
                <NavLink to="/agency" activeClassName="underline">
                  Agency
                </NavLink>
              </Box>

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
              <Box className="hover-line">
                <Badge badgeContent={3} color="secondary">
                  <NavLink to="/card" activeClassName="underline">
                    <ShoppingCartIcon />
                  </NavLink>
                </Badge>
              </Box>

              <Box>
                <Button
                  className=" hover-line"
                  variant="text"
                  onClick={props.handleLoginOpen}
                >
                  SIGN IN
                </Button>
              </Box>
              <Box>
                <Button
                  className=" agency_hover-line hover-line"
                  variant="contained"
                  onClick={props.handleSignUpOpen}
                >
                  SIGN UP
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
