import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectPropertyPage = (state: AppRootState) => state.propertyPage;

export const retrieveAllEstates = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.allEstates
);
export const retrieveEstatesByCategory = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.estatesByCategory
);
export const retrieveChosenEstate = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.chosenEstate
);
export const retrieveEstateReviews = createSelector(
  selectPropertyPage,
  (PropertyPage) => PropertyPage.estateReviews
);
