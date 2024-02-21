import { Box, Container } from "@mui/material";
import React from "react";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export function AgencyPagination() {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "20px 0",
          }}
        >
          <Pagination count={5} page={2} color={"primary"} />
        </Box>
      </Container>
    </div>
  );
}
