import { createSlice } from "@reduxjs/toolkit";
import { BlogPageState } from "../../../types/screen";

const initialState: BlogPageState = {
  targetBoBlogs: [],
};

const blogPageSlice = createSlice({
  name: "blogPage",
  initialState,
  reducers: {
    setTargetBoBlogs: (state, action) => {
      state.targetBoBlogs = action.payload;
    },
  },
});

export const { setTargetBoBlogs } = blogPageSlice.actions;
const BlogPageReducer = blogPageSlice.reducer;
export default BlogPageReducer;
