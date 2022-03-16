import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import type { StoreState, AppDispatch } from "@/types";

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()