import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { toggleLoading } from "../slices/App";
import { User } from "../slices/Users";

export const getUsers = createAsyncThunk<User[], void>(
  "getUsers",
  async (args, { dispatch, rejectWithValue, getState }) => {
    try {
      const state: any = getState();
      dispatch(toggleLoading("getUsers"));
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!data || data.length === 0) throw new Error("Could not get users");
      dispatch(toggleLoading("getUsers"));
      return data;
    } catch (error) {
      dispatch(toggleLoading("getUsers"));
      console.log(error);
      rejectWithValue(null);
    }
  }
);
