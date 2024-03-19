import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrieveLatestEstate = createSelector(
  selectHomePage,
  (HomePage) => HomePage.latestEstate
);
export const retrieveBestAgencies = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestAgencies
);
export const retrieveTrendEstate = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendEstate
);
export const retrieveBestBoBlogs = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestBoBlogs
);
export const retrieveNewsBoBlogs = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newsBoBlogs
);
