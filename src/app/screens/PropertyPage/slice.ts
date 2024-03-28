import { createSlice } from "@reduxjs/toolkit";
import { PropertyPageState } from "../../../types/screen";

const initialState: PropertyPageState = {
  topSellingEstates: [],
  targetEstates: [],
  estatesByCategory: [],
  chosenEstate: null,
  memberReviews: null,
};

const PropertyPageSlice = createSlice({
  name: "propertyPage",
  initialState,
  reducers: {
    setTargetEstates: (state, action) => {
      state.targetEstates = action.payload;
    },
    setEstatesByCategory: (state, action) => {
      state.estatesByCategory = action.payload;
    },
    setChosenEstate: (state, action) => {
      state.chosenEstate = action.payload;
    },
    setMemberReviews: (state, action) => {
      state.memberReviews = action.payload;
    },
  },
});

export const {
  setTargetEstates,
  setEstatesByCategory,
  setChosenEstate,
  setMemberReviews,
} = PropertyPageSlice.actions;

const PropertyPageReducer = PropertyPageSlice.reducer;
export default PropertyPageReducer;
