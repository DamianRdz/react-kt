import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

type CounterSlice = {
  counter: number;
};

const INITIAL_STATE: CounterSlice = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state, { payload }: PayloadAction<number>) {
      state.counter = state.counter + payload;
    },
    decrement(state, { payload }: PayloadAction<number>) {
      state.counter = state.counter - payload;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increment, decrement } = actions;

export const selectCounter = (state: RootState) => state.count.counter;

export default reducer;
