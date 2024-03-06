import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  userId: null,
};

export const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setData, setUserId } = playlistSlice.actions;

export default playlistSlice.reducer;
