import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import React, { useState } from "react";
import { Box, Container } from "@mui/joy";
import { Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendIcon from "@mui/icons-material/Send";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export function JOYMODAL() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <Container>
        <React.Fragment>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => setOpen(true)}
          >
            Open modal
          </Button>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 978,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
              }}
            >
              <ModalClose variant="plain" sx={{ m: 1 }} />
              <Stack flexDirection={"row"}>
                <Box sx={{ mr: "15px", maxWidth: "445px" }}>
                  <img
                    width={"445px"}
                    height={"320px"}
                    src="/images/modal_img.jpg"
                    alt="modal-picture"
                  />
                </Box>
                <Box sx={{ ml: "15px", maxWidth: "445px" }}>
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h3"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                  >
                    Luxury apartment in Han-gang Seoul
                  </Typography>
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h1"
                    textColor="#ff5a3c"
                    fontWeight="lg"
                    mb={1}
                  >
                    $650.500{" "}
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h2"
                      textColor="maroon"
                      fontWeight="lg"
                      mb={1}
                      style={{ textDecoration: "line-through" }}
                    >
                      690.00
                    </Typography>{" "}
                    5 % Off
                  </Typography>

                  <Typography mt={10} id="modal-desc" textColor="text.tertiary">
                    To the left is the modern kitchen with central island,
                    leading through to the unique breakfast family room which
                    feature glass walls and doors out onto the garden and access
                    to the separate utility room.
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    gap={2}
                    mt={6}
                  >
                    <Stack spacing={2} direction="row" alignItems={"center"}>
                      <Button
                        onClick={handleDecrement}
                        className="decrement"
                        style={{
                          borderColor: "#f2f6f7",
                          backgroundColor: "#f2f6f7",
                          color: "#000",
                        }}
                      >
                        -
                      </Button>
                      <Box style={{ color: "#ff5a3c" }}>{count}</Box>
                      <Button
                        onClick={handleIncrement}
                        className="increment"
                        style={{
                          borderColor: "#f2f6f7",
                          backgroundColor: "#f2f6f7",
                          color: "#000",
                        }}
                      >
                        +
                      </Button>
                    </Stack>
                    <Button disabled>Out of Stock</Button>
                    <Button
                      style={{
                        borderColor: "#f2f6f7",
                        backgroundColor: "#f2f6f7",
                        color: "#000",
                      }}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Button>
                    <Button
                      style={{
                        borderColor: "#f2f6f7",
                        backgroundColor: "#f2f6f7",
                        color: "#000",
                      }}
                    >
                      <SendIcon />
                    </Button>
                  </Stack>
                  <Stack flexDirection={"row"} mt={5} gap={2}>
                    <Typography>Share: </Typography>
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      gap={2}
                    >
                      <Link href="#" underline="none">
                        <FacebookIcon
                          sx={{
                            "&:hover": { color: "#ff5a3c" },
                          }}
                        />
                      </Link>
                      <Link href="#" underline="none">
                        <TwitterIcon
                          sx={{
                            "&:hover": { color: "#ff5a3c" },
                          }}
                        />
                      </Link>
                      <Link href="#" underline="none">
                        <LinkedInIcon
                          sx={{
                            "&:hover": { color: "#ff5a3c" },
                          }}
                        />
                      </Link>
                      <Link href="#" underline="none">
                        <InstagramIcon
                          sx={{
                            "&:hover": { color: "#ff5a3c" },
                          }}
                        />
                      </Link>
                    </Stack>
                  </Stack>
                  <Box textAlign={"end"} mt={2}>
                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        fontSize: "14px",
                        "&:hover": { color: "#ff5a3c" },
                      }}
                    >
                      View Details
                    </Link>
                  </Box>
                </Box>
              </Stack>
            </Sheet>
          </Modal>
        </React.Fragment>
      </Container>
    </div>
  );
}
