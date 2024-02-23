import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import React from "react";
import { Box, Container } from "@mui/joy";
import { Stack } from "@mui/material";

import HalfRating from "../rating";
import BasicRating from "../rating";

export function JOYMODAL() {
  const [open, setOpen] = React.useState<boolean>(false);

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
                maxWidth: 500,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
              }}
            >
              <ModalClose variant="plain" sx={{ m: 1 }} />
              <Stack>
                <Box sx={{ mr: "15px" }}>
                  <img
                    width={"445px"}
                    src="/images/modal_img.jpg"
                    alt="modal-picture"
                  />
                </Box>
                <Box>
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                  >
                    Luxury apartment in Han-gang Seoul
                  </Typography>
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h3"
                    textColor="#ff5a3c"
                    fontWeight="lg"
                    mb={1}
                  >
                    $650.500{" "}
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="maroon"
                      fontWeight="lg"
                      mb={1}
                      style={{ textDecoration: "line-through" }}
                    >
                      690.00
                    </Typography>{" "}
                    5 % Off
                  </Typography>

                  <Typography mt={5} id="modal-desc" textColor="text.tertiary">
                    To the left is the modern kitchen with central island,
                    leading through to the unique breakfast family room which
                    feature glass walls and doors out onto the garden and access
                    to the separate utility room.
                  </Typography>
                </Box>
              </Stack>
            </Sheet>
          </Modal>
        </React.Fragment>
      </Container>
    </div>
  );
}
