import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  songList: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setNextSong: (state) => {
      const currentIndex = state.songList.findIndex(
        (song) => song.id === state.current.id
      );
      const nextIndex = (currentIndex + 1) % state.songList.length;
      state.current = state.songList[nextIndex];
    },
    setPreviousSong: (state) => {
      const currentIndex = state.songList.findIndex(
        (song) => song.id === state.current.id
      );
      const previousIndex =
        (currentIndex - 1 + state.songList.length) % state.songList.length;
      state.current = state.songList[previousIndex];
    },
  },
});

export const {
  setControls,
  setCurrent,
  setPlaying,
  setSidebar,
  setData,
  setNextSong,
  setPreviousSong,
} = playerSlice.actions;

export default playerSlice.reducer;
