import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type LoggedInState = { state: boolean };

const initialState = {
  state: Boolean(Cookies.get("accessToken")),
} as LoggedInState;

const loggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    login(state) {
      state.state = true;
    },
    logout(state) {
      state.state = false;
    },
  },
});

export const { login, logout } = loggedInSlice.actions;
export default loggedInSlice.reducer;
