import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type AppState = {
  loading: string[];
};

const INITIAL_STATE: AppState = {
  loading: [],
};

const { reducer, actions } = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    toggleLoading(state, { payload }: PayloadAction<string>) {
      const processIndex = state.loading.findIndex((l) => l === payload);
      if (processIndex >= 0) {
        const updatedLoading = [...state.loading].filter((l) => l !== payload);
        state.loading = updatedLoading;
      } else {
        state.loading.push(payload);
      }
    },
  },
});

/*
 * Action creators
 */
export const { toggleLoading } = actions;

/*
! Selectors
*/
export const selectLoading = (state: RootState) => state.app.loading;

/*
 * Global Reducer variable
 */
export default reducer;
