import { cartActionName } from "./constants";

export function addToCartAction(cartItem) {
  return {
    type: cartActionName.ADD_TO_CART,
    payload: cartItem,
  };
}

export function removeItemFromCart(id) {
  return {
    type: cartActionName.REMOVE_ITEM_FROM_CART,
    payload: id,
  };
}

export function incrementCartItemCount(id) {
  return {
    type: cartActionName.INCREMENT_ITEM_COUNT_FROM_CART,
    payload: id,
  };
}

export function decrementCartItemCount(id) {
  return {
    type: cartActionName.DECREMENT_ITEM_COUNT_FROM_CART,
    payload: id,
  };
}

export function toggleCart() {
  return {
    type: cartActionName.OPEN_CART,
  };
}
