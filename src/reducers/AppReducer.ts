import {
  ActionTypes,
  AppActions,
  AppState,
  DecreaseCount,
  IncrementCount,
} from "../Context/AppContext";

export const AppReducer = (state: AppState, { type, payload }: AppActions) => {
  switch (type) {
    case ActionTypes.SetLabel:
      return { ...state, label: payload };
    case ActionTypes.IncrementCount:
      return { ...state, counter: state.counter + payload };
    case ActionTypes.DecreaseCount:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

export const incrementCount = (val: number): IncrementCount => ({
  type: ActionTypes.IncrementCount,
  payload: val,
});

export const decreaseCount = (val: number): DecreaseCount => ({
  type: ActionTypes.DecreaseCount,
  payload: val,
});
