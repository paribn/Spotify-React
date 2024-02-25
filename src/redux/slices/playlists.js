import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = playlistSlice.actions;

export default playlistSlice.reducer;
