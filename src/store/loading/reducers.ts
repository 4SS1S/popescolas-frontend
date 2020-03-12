import { Reducer } from "redux";
import { Loading, LoadingState, LoadingTypes } from "./types";

const INITIAL_STATE: LoadingState = {
  loading: false
};

export const reducer: Reducer<LoadingState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case LoadingTypes.LOADED:
      return {
        ...state,
        loading: false
      };

    case LoadingTypes.LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
