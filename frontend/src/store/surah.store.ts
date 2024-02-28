import { createSlice } from "@reduxjs/toolkit";
import { SurahType } from "../utils/types";

type surahType = {
  surahDuration: string,
  surahProgress: number,
  currentSurah: SurahType,
  surahSlider: number,
  suwar: SurahType[]
}

const initialState: surahType = {
  surahDuration: '',
  surahProgress: 0,
  currentSurah: {} as SurahType,
  surahSlider: 0,
  suwar: []
};

const surahSlice = createSlice({
  name: "surah",
  initialState: initialState,
  reducers: {
    setSurahDuration(state, action) {
      state.surahDuration = action.payload;
    },
    setSurahProgress(state, action) {
      state.surahProgress = action.payload;
    },
    setCurrentSurah(state, action) {
      state.currentSurah = action.payload;
    },
    setSurahSlider(state, action) {
      state.surahSlider = action.payload;
    },
    setSuwar(state, action) {
      state.suwar = action.payload;
    },
  },
});

export const surahActions = surahSlice.actions;
export const surahReducer = surahSlice.reducer
