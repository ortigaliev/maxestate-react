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

//Redux
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setLatestEstate } from "./slice";
import { retrieveLatestEstate } from "./selector";
import { Estate } from "../../../types/estate";
//import RestaurantApiService from "../../apiServices/restaurantApiService";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setLatestEstate: (data: Estate[]) => dispach(setLatestEstate(data)),
});
// REDUX SELECTOR
const latestEstateRetriever = createSelector(
  retrieveLatestEstate,
  (latestEstate) => ({
    latestEstate,
  })
);

export function HomePage() {
  /* INITIALIZATION */
  const { setLatestEstate } = actionDispatch(useDispatch());

  //selector: store => data

  useEffect(() => {
    //backend data request => data

    setLatestEstate([]);

    //slice: data => store
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
