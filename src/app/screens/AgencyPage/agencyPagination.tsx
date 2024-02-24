import { Box, Container } from "@mui/material";
import React from "react";

import Pagination from "@mui/material/Pagination";

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
