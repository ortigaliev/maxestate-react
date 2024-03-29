import { createSlice } from "@reduxjs/toolkit";
import { PropertyPageState } from "../../../types/screen";

const initialState: PropertyPageState = {
  allEstates: [],
  estatesByCategory: [],
  chosenEstate: null,
  estateReviews: null,
};

const PropertyPageSlice = createSlice({
  name: "propertyPage",
  initialState,
  reducers: {
    setAllEstates: (state, action) => {
      state.allEstates = action.payload;
    },
    setEstatesByCategory: (state, action) => {
      state.estatesByCategory = action.payload;
    },
    setChosenEstate: (state, action) => {
      state.chosenEstate = action.payload;
    },
    setEstateReviews: (state, action) => {
      state.estateReviews = action.payload;
    },
  },
});

export const {
  setAllEstates,
  setEstatesByCategory,
  setChosenEstate,
  setEstateReviews,
} = PropertyPageSlice.actions;

const PropertyPageReducer = PropertyPageSlice.reducer;
export default PropertyPageReducer;
