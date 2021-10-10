import { combineReducers } from "redux";
import { getBookListReducer } from "./modules/product/get-book-list";

export const appReducer = combineReducers({
  listBookData: getBookListReducer,
});

export type RootState = ReturnType<typeof appReducer>;
// type TState = ReturnType<typeof appReducer> | undefined;
