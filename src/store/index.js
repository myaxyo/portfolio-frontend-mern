import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice";
import projectReducer from "./projectSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    projects: projectReducer,
  },
});

export default store;
