import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: null,
  name: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const { token, email } = action.payload;

      state.token = token;
      state.email = email;
    },
    setName: (state, action) => {
      const name = action.payload;
      state.name = name;
    },
    logoutAction: (state) => {
      return initialState;
    },
  },
});

export const { loginAction, logoutAction, setName } = accountSlice.actions;

export default accountSlice.reducer;
