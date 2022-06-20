import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../state";

export const useSetter = () => useDispatch<AppDispatch>();
export const useGetter: TypedUseSelectorHook<AppState> = useSelector;
