import { combineReducers, createStore, Store } from "redux";

import { LoadingState } from "./loading/types";

import { reducer as LoadingReducer } from "./loading/reducers";

const rootReducer = combineReducers({
  LoadingReducer
});

export interface ApplicationState {
  loading: LoadingState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
