import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      state.error = null;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
