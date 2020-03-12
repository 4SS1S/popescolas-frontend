export enum LoadingTypes {
  LOADING = "@loading/LOADING",
  LOADED = "@loading/LOADED"
}

export interface Loading {
  isLoading: boolean;
}

export interface LoadingState {
  loading: boolean;
}
