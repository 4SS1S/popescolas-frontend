import { action } from "typesafe-actions";
import { Loading, LoadingState, LoadingTypes } from "./types";

export const isLoading = () => action(LoadingTypes.LOADING);
