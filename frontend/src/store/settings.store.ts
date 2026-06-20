import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';
export type Lang = 'ar' | 'en';

type SettingsType = {
  theme: Theme;
  lang: Lang;
};

const savedTheme = localStorage.getItem('theme') as Theme | null;
const savedLang = localStorage.getItem('lang') as Lang | null;
const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initialState: SettingsType = {
  theme: savedTheme ?? systemTheme,
  lang: savedLang ?? 'ar',
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    setLang(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
});

export const settingsActions = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
