import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function AppartmentPlan() {
  const [index, setIndex] = useState(0);
  return (
    <div className="plan_frame" style={{ background: "#fff" }}>
      <Container>
        <Stack>
          <Typography className="card_sub_title">Apartment Sketch</Typography>
          <Typography className="card_tite">Apartments Plan</Typography>
          <Stack
            className="plan_tite_wrapper"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box className={index === 0 ? "plan_title" : ""}>The Studio</Box>
            <Box className={index === 1 ? "plan_title" : ""}>
              Deluxe Portion
            </Box>
            <Box className={index === 2 ? "plan_title" : ""}>Penthouse</Box>
            <Box className={index === 3 ? "plan_title" : ""}>Double Height</Box>
          </Stack>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(e) => setIndex(e.activeIndex)}
            autoplay
          >
            <SwiperSlide>
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                <Box
                  width="560px"
                  height="620px"
                  bgcolor="#ff5a3c"
                  mr={"5px"}
                ></Box>
                <img
                  src="/images/home/plan.png"
                  alt="plan"
                  width={"560px"}
                  height={"620"}
                />
              </Stack>
            </SwiperSlide>
            <SwiperSlide>
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                <img
                  src="/images/home/plan.png"
                  alt="plan"
                  width={"560px"}
                  height={"620"}
                />
                <Box
                  width="560px"
                  height="620px"
                  bgcolor="#ff5a3c"
                  mr={"5px"}
                ></Box>
              </Stack>
            </SwiperSlide>
            <SwiperSlide>
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                <Box
                  width="560px"
                  height="620px"
                  bgcolor="#ff5a3c"
                  mr={"5px"}
                ></Box>
                <img
                  src="/images/home/plan.png"
                  alt="plan"
                  width={"560px"}
                  height={"620"}
                />
              </Stack>
            </SwiperSlide>
            <SwiperSlide>
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                <img
                  src="/images/home/plan.png"
                  alt="plan"
                  width={"560px"}
                  height={"620"}
                />
                <Box
                  width="560px"
                  height="620px"
                  bgcolor="#ff5a3c"
                  mr={"5px"}
                ></Box>
              </Stack>
            </SwiperSlide>
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
