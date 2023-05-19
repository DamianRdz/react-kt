import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Counter";
import usersReducer from "./slices/Users";
import appReducer from "./slices/App";

const store = configureStore({
  reducer: combineReducers({
    count: counterReducer,
    users: usersReducer,
    app: appReducer,
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
