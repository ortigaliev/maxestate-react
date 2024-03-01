import React, { useState } from "react";

import "../../../css/modal.css";
import { Box, Button, Container } from "@mui/joy";

export function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <Container>
        <Button onClick={toggleModal} className="btn-modal">
          Open
        </Button>

        {modal && (
          <Box className="modal">
            <Box onClick={toggleModal} className="overlay">
              <Box className="modal-content">
                <h2>Hello Modal</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, dolorum? Labore non culpa sint ut repudiandae,
                  tempora illo, reprehenderit officiis voluptates possimus
                  eligendi nisi eum voluptatum eveniet magnam maxime recusandae
                  veritatis mollitia excepturi dignissimos similique aspernatur
                  sunt? Quidem, aut eum? Quod corrupti, nulla eaque in quas
                  ratione debitis cupiditate harum.
                </p>
                <Button className="close-modal" onClick={toggleModal}>
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </div>
  );
}
