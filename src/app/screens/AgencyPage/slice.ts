import { createSlice } from "@reduxjs/toolkit";
import { AgencyPageState } from "../../../types/screen";

const initialState: AgencyPageState = {
  targetAgencies: [],
  chosenAgency: null,
  targetEstate: [],
  selectedEstate: null,
};

const AgencyPageSlice = createSlice({
  name: "agencyPage",

  initialState,

  reducers: {
    setTargetAgencies: (state, action) => {
      state.targetAgencies = action.payload;
    },
    setChosenAgency: (state, action) => {
      state.chosenAgency = action.payload;
    },
    setTargetEstate: (state, action) => {
      state.targetEstate = action.payload;
    },
    setSelectedEstate: (state, action) => {
      state.selectedEstate = action.payload;
    },
  },
});

export const {
  setTargetAgencies,
  setChosenAgency,
  setTargetEstate,
  setSelectedEstate,
} = AgencyPageSlice.actions;

const AgencyPageReducer = AgencyPageSlice.reducer;

export default AgencyPageReducer;