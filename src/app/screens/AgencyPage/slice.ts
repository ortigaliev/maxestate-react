import { createSlice } from "@reduxjs/toolkit";
import { AgencyPageState } from "../../../types/screen";

const initialState: AgencyPageState = {
  targetAgencies: [],
  randomAgencies: [],
  chosenAgency: null,
  targetEstates: [],
  chosenEstate: null,
};

const agencyPageSlice = createSlice({
  name: "agencyPage",
  initialState,
  reducers: {
    setTargetAgencies: (state, action) => {
      state.targetAgencies = action.payload;
    },
    setRandomAgencies: (state, action) => {
      state.randomAgencies = action.payload;
    },
    setChosenAgency: (state, action) => {
      state.chosenAgency = action.payload;
    },
    setTargetEstates: (state, action) => {
      state.targetEstates = action.payload;
    },
    setChosenEstate: (state, action) => {
      state.chosenEstate = action.payload;
    },
  },
});

export const {
  setTargetAgencies,
  setRandomAgencies,
  setChosenAgency,
  setTargetEstates,
  setChosenEstate,
} = agencyPageSlice.actions;

const AgencyPageReducer = agencyPageSlice.reducer;
export default AgencyPageReducer;
