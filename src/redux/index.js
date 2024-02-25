import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import playerReducer from "./slices/player";
import accountReducer from "./slices/accoutSlice";
import playlistsReducer from "./slices/playlists";
import filtersReducer from "./slices/filters";

const reducers = combineReducers({
  player: playerReducer,
  account: accountReducer,
  playlists: playlistsReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
