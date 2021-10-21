import { combineReducers } from "redux";
import { cartReducer } from "./modules/cart/cartReducer";
import { getBookListReducer } from "./modules/product/get-book-list";

export const appReducer = combineReducers({
  listBookData: getBookListReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof appReducer>;
// type TState = ReturnType<typeof appReducer> | undefined;
