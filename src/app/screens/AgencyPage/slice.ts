import { createSlice } from "@reduxjs/toolkit";
import { AgencyPageState } from "../../../types/screen";

const initialState: AgencyPageState = {
  randomAgencies: [],
  targetAgencies: [],
  chosenAgency: null,
  targetEstates: [],
  selectedEstate: null,
};

const AgencyPageSlice = createSlice({
  name: "agencyPage",

  initialState,

  reducers: {
    setRandomAgencies: (state, action) => {
      state.randomAgencies = action.payload;
    },
    setTargetAgencies: (state, action) => {
      state.targetAgencies = action.payload;
    },
    setChosenAgency: (state, action) => {
      state.chosenAgency = action.payload;
    },
    setTargetEstates: (state, action) => {
      state.targetEstates = action.payload;
    },
    setSelectedEstate: (state, action) => {
      state.selectedEstate = action.payload;
    },
  },
});

export const {
  setRandomAgencies,
  setTargetAgencies,
  setChosenAgency,
  setTargetEstates,
  setSelectedEstate,
} = AgencyPageSlice.actions;

const AgencyPageReducer = AgencyPageSlice.reducer;

export default AgencyPageReducer;
