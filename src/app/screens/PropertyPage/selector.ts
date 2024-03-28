import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectPropertyPage = (state: AppRootState) => state.propertyPage;

export const retrieveTopSellingEstates = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.topSellingEstates
);
export const retrieveTargetEstates = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.targetEstates
);
export const retrieveEstatesByCategory = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.estatesByCategory
);
export const retrieveChosenEstate = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.chosenEstate
);
export const retrieveMemberReviews = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.memberReviews
);
