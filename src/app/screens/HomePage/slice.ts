import { createSlice } from "@reduxjs/toolkit";

import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
  latestEstate: [],
  bestAgencies: [],
  trendEstate: [],
  bestBoBlogs: [],
  newsBoBlogs: [],
};

const HomePageSlice = createSlice({
  name: "homePage",

  initialState,

  reducers: {
    setLatestEstate: (state, action) => {
      state.latestEstate = action.payload;
    },

    setBestAgencies: (state, action) => {
      state.bestAgencies = action.payload;
    },

    setTrendEstate: (state, action) => {
      state.trendEstate = action.payload;
    },

    setBestBoBlogs: (state, action) => {
      state.bestBoBlogs = action.payload;
    },

    setNewsBoBlogs: (state, action) => {
      state.newsBoBlogs = action.payload;
    },
  },
});

export const {
  setLatestEstate,
  setBestAgencies,
  setTrendEstate,
  setBestBoBlogs,
  setNewsBoBlogs,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;
