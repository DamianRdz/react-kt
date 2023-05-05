import React, { createContext } from "react";

export enum ActionTypes {
  SetLabel,
  IncrementCount,
  DecreaseCount,
}

export type SetLabel = {
  type: ActionTypes.SetLabel;
  payload: string;
};

export type DecreaseCount = {
  type: ActionTypes.DecreaseCount;
  payload: number;
};

export type IncrementCount = {
  type: ActionTypes.IncrementCount;
  payload: number;
};

export type AppActions = SetLabel | IncrementCount | DecreaseCount;

export type AppState = {
  label: string;
  counter: number;
};

export const INITIAL_STATE: AppState = {
  label: "Global STATE With Context",
  counter: 10,
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});
