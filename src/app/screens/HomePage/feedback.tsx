import {
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export function Feedback() {
  return (
    <div className="feedback_frame service_frame">
      <Container>
        <Stack className="feedback_frame_wrapper">
          <Typography className="card_sub_title">Our Testimonial</Typography>
          <Typography className="card_tite">Clients Feedback</Typography>
          <Stack className="feedback_card_wrapper" mt={5}>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(3)).map((_, index) => (
                  <Grid
                    className="feedback_grid"
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={index}
                  >
                    <Item
                      className={"feedback_grid_item"}
                      style={{ padding: "35px", cursor: "pointer" }}
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      <Typography className="feedback_text">
                        <FormatQuoteOutlinedIcon className="feedback_icon" />
                        Precious ipsum dolor sit amet consectetur adipisicing
                        elit, sed dos mod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad min veniam, quis nostrud
                        Precious ips um dolor sit amet, consecte
                      </Typography>
                      <Stack
                        className={"client_feedback-box"}
                        style={{ marginTop: "20px" }}
                        flexDirection={"row"}
                      >
                        <Box mr={2}>
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="/images/home/agent.jpg"
                            />
                          </StyledBadge>
                        </Box>
                        <Box>
                          <Typography
                            variant="h5"
                            gutterBottom
                            style={{ fontWeight: 700, textAlign: "left" }}
                          >
                            Adam Joseph
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            gutterBottom
                            style={{ textAlign: "left" }}
                          >
                            Selling Agent
                          </Typography>
                        </Box>
                      </Stack>
                    </Item>
                    <Box className="choyxona"></Box>
                  </Grid>
                ))}
              </Grid>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
