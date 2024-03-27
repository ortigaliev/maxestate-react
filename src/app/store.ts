import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/HomePage/slice";
import reduxLogger from "redux-logger";
import AgencyPageReducer from "./screens/AgencyPage/slice";

export const store = configureStore({
  middleware: (getDefaulMiddleware) =>
    (getDefaulMiddleware() as any[]).concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    agencyPage: AgencyPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
