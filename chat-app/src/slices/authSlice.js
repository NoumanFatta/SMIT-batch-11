import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginuser: null,
  loadinguser: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    init(state) {
      state.loadinguser = false;
    },
    login(state, action) {
      state.loginuser = action.payload;
      state.loadinguser = false;
    },
    logout(state) {
      state.loginuser = null;
    },
  },
});

export const { login, logout, init } = authSlice.actions;
export default authSlice.reducer;
