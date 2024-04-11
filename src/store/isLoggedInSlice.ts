import { createSlice } from "@reduxjs/toolkit";

type LoggedInState = { state: boolean };

const initialState = { state: false } as LoggedInState;

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
