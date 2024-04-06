import { createSlice } from "@reduxjs/toolkit";
import { MemberPageState } from "../../../types/screen";

const initialState: MemberPageState = {
  chosenMember: null,
  chosenMemberBoBlogs: [],
  chosenSingleBoBlog: null,
  memberFollowers: [],
  memberFollowings: [],

};

const memberPageSlice = createSlice({
  name: "memberPage",
  initialState,
  reducers: {
    setChosenMember: (state, action) => {
      state.chosenMember = action.payload;
    },
    setChosenMemberBoBlogs: (state, action) => {
      state.chosenMemberBoBlogs = action.payload;
    },
    setChosenSingleBoBlog: (state, action) => {
      state.chosenSingleBoBlog = action.payload;
    },
    setMemberFollowers: (state, action) => {
      state.memberFollowers = action.payload;
    },
    setMemberFollowings: (state, action) => {
      state.memberFollowings = action.payload;
    },
  },
});

export const {
  setChosenMember,
  setChosenMemberBoBlogs,
  setChosenSingleBoBlog,
  setMemberFollowers,
  setMemberFollowings,
} = memberPageSlice.actions;

const MemberPageReducer = memberPageSlice.reducer;
export default MemberPageReducer;
