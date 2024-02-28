import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer
