import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectBlogPage = (state: AppRootState) => state.blogPage;
export const retrieveTargetBoBlogs = createSelector(
  selectBlogPage,
  (BlogPage) => BlogPage.targetBoBlogs
);
