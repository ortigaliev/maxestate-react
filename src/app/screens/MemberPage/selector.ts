import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectMemberPage = (state: AppRootState) => state.memberPage;
export const retrieveChosenMember = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenMember
);
export const retrieveChosenMemberBoBlogs = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenMemberBoBlogs
);
export const retrieveChosenSingleBoBlog = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenSingleBoBlog
);
export const retrieveMemberFollowers = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.memberFollowers
);
export const retrieveMemberFollowing = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.memberFollowing
);
