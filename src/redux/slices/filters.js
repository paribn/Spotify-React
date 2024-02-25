import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = filtersSlice.actions;

export default filtersSlice.reducer;
