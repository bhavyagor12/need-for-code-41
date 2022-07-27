import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: null,
  loading: false,
  error: false,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    }
  },
});

export const { fetchStart,fetchFailure ,fetchSuccess } =
  teamSlice.actions;

export default teamSlice.reducer;