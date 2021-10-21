import { combineReducers } from "redux";
import { cartReducer, toggleCartReducer } from "./modules/cart/cartReducer";
import { getBookListReducer } from "./modules/product/get-book-list";

export const appReducer = combineReducers({
  listBookData: getBookListReducer,
  cart: cartReducer,
  isCartOpen: toggleCartReducer,
});

export type RootState = ReturnType<typeof appReducer>;
// type TState = ReturnType<typeof appReducer> | undefined;
