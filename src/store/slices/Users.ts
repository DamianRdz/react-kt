import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getUsers } from "../thunks/Users";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Error = {
  message: string;
  code: number;
};

export type UsersState = {
  users: User[] | null;
  selectedUser: null | User;
};

const INITIAL_STATE: UsersState = {
  users: null,
  selectedUser: null,
};

const { reducer, actions } = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: {
    [getUsers.pending.type]: (state, action: PayloadAction<null>) => {
      if (state.selectedUser) state.selectedUser = null;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<any>) => {
      console.log("User Error: ", action.payload);
    },
    [getUsers.fulfilled.type]: (state, { payload }: PayloadAction<User[]>) => {
      state.users = payload;
    },
  },
});

export const { setUser } = actions;

export const selectUsers = (state: RootState) => state.users.users;

export default reducer;
