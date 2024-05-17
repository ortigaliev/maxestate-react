import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";
import { AgencyPage } from ".";

const selectAgencyPage = (state: AppRootState) => state.agencyPage;
export const retrieveRandomAgencies = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.randomAgencies
);
export const retrieveTargetAgencies = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.targetAgencies
);
export const retrieveChosenAgency = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.chosenAgency
);
export const retrieveTargetEstates = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.targetEstates
);
export const retrieveSelectedEstate = createSelector(
  selectAgencyPage,
  (AgencyPage) => AgencyPage.selectedEstate
);
