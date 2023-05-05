import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Counter";

const store = configureStore({
  reducer: counterReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
