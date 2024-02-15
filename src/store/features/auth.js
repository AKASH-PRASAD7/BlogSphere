import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, error } = authSlice.actions;

export default authSlice.reducer;
