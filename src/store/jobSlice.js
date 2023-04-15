import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  loading: true,
  error: null,
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteItem: (state, action) => {
      state.jobs = state.jobs.filter((item) => item._id !== action.payload);
    },
  },
});

export const { setJobs, setLoading, setError, deleteItem, addJob } =
  jobSlice.actions;

export default jobSlice.reducer;
