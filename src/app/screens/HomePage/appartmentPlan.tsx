import { Box, Container, Stack } from "@mui/material";
import React from "react";
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
  return (
    <div className="plan_frame">
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
