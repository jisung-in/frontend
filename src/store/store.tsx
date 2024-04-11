import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./isLoggedInSlice";

export const store = configureStore({
  reducer: {
    loggedin: loggedInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
