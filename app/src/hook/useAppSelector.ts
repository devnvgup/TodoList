import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducer/reducers.js";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
