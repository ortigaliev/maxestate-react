import { Container } from "@mui/material";
import React, { useEffect } from "react";
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
import AgencyApiServer from "../../apiServer/agencyApiServer";
import { setBestAgencies } from "./slice";
import { Agency } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setBestAgencies: (data: Agency[]) => dispach(setBestAgencies(data)),
});

export function HomePage() {
  /* INITIALIZATION */
  const {setBestAgencies} = actionDispatch(useDispatch());


  useEffect(() => {
    const agencyServer = new AgencyApiServer();
    agencyServer
      .getAgencies({ page: 1, limit: 3, order: "mb_point" })
      .then((data) => {
        setBestAgencies(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
