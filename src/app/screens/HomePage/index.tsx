import { Container } from "@mui/material";
import React from "react";
import { LatestList } from "./latestList";
import { BestAgency } from "./bestAgency";
import { FeaturedList } from "./featuredList";
import { AppartmentPlan } from "./appartmentPlan";
import { Ads } from "./ads";
import { BuildingFacility } from "./buildingFacility";
import { Feedback } from "./feedback";
import { LatestNews } from "./latestNews";
import "../../../css/home.css";
import "swiper/css";

export function HomePage() {
  return (
    <div className="homepage">
      <LatestList />
      <BestAgency />
      <FeaturedList />
      <AppartmentPlan />
      <Ads />
      <BuildingFacility />
      <Feedback />
      <LatestNews />
    </div>
  );
}
