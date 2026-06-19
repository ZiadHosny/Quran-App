import { createSlice } from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';

type SettingsType = {
  theme: Theme;
};

const savedTheme = localStorage.getItem('theme') as Theme | null;

const initialState: SettingsType = {
  theme: savedTheme ?? 'light',
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const settingsActions = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
