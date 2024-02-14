import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth";

const store = configureStore({
  reducer: { authSlice },
});

export default store;
