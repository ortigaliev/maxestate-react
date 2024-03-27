import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectAgencyPage = (state: AppRootState) => state.agencyPage;
export const retrieveTargetAgencies = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.targetAgencies
);
export const retrieveRandomAgencies = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.randomAgencies
);

export const retrieveChosenAgency = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.chosenAgency
);

export const retrieveTargetEstates = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.targetEstates
);

export const retrieveChosenProperty = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.chosenEstate
);
