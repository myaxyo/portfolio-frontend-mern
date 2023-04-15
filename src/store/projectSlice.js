import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  loading: true,
  error: null,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
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
      state.projects = state.projects.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { setProjects, setLoading, setError, deleteItem } =
  projectSlice.actions;

export default projectSlice.reducer;
