import { createSlice } from "@reduxjs/toolkit";

// type LoadingState = {
//   id: string
// };

const initialState: string[] = []

const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: initialState },
  reducers: {
    setLoading(state, action) {
      state.loading.push(action.payload)
    },
    removeLoading(state, action) {
      state.loading = state.loading.filter((id) => id !== action.payload)
    }
  },
});

export const loadingActions = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer
