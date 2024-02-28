import { createSlice } from "@reduxjs/toolkit";

export type RepeatSection = {
  isRepeat: boolean,
  start: number,
  end: number,
  times: number
}

type ControllersType = {
  volume: number,
  isRepeat: boolean,
  isRandom: boolean,
  isPlaying: boolean,
  repeatSection: RepeatSection
}

const initialState: ControllersType = {
  volume: 100,
  isRepeat: false,
  isRandom: false,
  isPlaying: false,
  repeatSection: {
    isRepeat: false,
    start: 0,
    end: 100,
    times: 0
  }
};

const controllersSlice = createSlice({
  name: "controllers",
  initialState: initialState,
  reducers: {
    setVolume(state, { payload }) {
      state.volume = payload;
    },
    setIsRepeat(state, { payload }) {
      state.isRepeat = payload;
    },
    setIsRandom(state, { payload }) {
      state.isRandom = payload;
    },
    setIsPlaying(state, { payload }) {
      state.isPlaying = payload;
    },
    setRepeatSection(state, { payload }) {
      state.repeatSection = { ...state.repeatSection, ...payload };
    },
  },
});

export const controllersActions = controllersSlice.actions;
export const controllersReducer = controllersSlice.reducer
