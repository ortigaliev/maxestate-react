import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/HomePage/slice";
import reduxLogger from "redux-logger";
import PropertyPageReducer from "./screens/PropertyPage/slice";
import OrdersPageReducer from "./screens/Card/slice";
import BlogPageReducer from "./screens/BlogPage/slice";

export const store = configureStore({
  middleware: (getDefaulMiddleware) =>
    (getDefaulMiddleware() as any[]).concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    propertyPage: PropertyPageReducer,
    card: OrdersPageReducer,
    blogPage: BlogPageReducer,
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
