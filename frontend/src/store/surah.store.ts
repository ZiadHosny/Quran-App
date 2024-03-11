import { createSlice } from "@reduxjs/toolkit";
import { QuranReciterType, SurahType } from "../utils/types";

type surahType = {
  surahDuration: string,
  surahProgress: number,
  currentSurah: SurahType,
  surahSlider: number,
  suwar: SurahType[],
  playlist: SurahType[],
  quranReciters: QuranReciterType[]
  searchedSuwar: SurahType[],
  searchedQuranReciters: QuranReciterType[],
  searchTerm: string,
}

const initialState: surahType = {
  surahDuration: '',
  surahProgress: 0,
  currentSurah: {} as SurahType,
  surahSlider: 0,
  suwar: [],
  playlist: [],
  quranReciters: [],
  searchedSuwar: [],
  searchedQuranReciters: [],
  searchTerm: '',
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
    setPlaylist(state, action) {
      state.playlist = action.payload;
    },
    setQuranReciters(state, action) {
      state.quranReciters = action.payload
    },
    setSearchedQuranReciters(state, action) {
      state.searchedQuranReciters = action.payload
    },
    setSearchedSuwar(state, action) {
      state.searchedSuwar = action.payload
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    }
  },
});

export const surahActions = surahSlice.actions;
export const surahReducer = surahSlice.reducer
