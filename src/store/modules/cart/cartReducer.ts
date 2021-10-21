import { cartActionName } from "./constants";

const initialState = {
  cartItem: [],
  itemCount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionName.ADD_TO_CART:
      let cart = [...state.cartItem];
      console.log(action.payload, state.cartItem);
      //   debugger;
      if (cart.findIndex((item) => item.id === action.payload.id) === -1) {
        cart.push({
          count: 1,
          ...action.payload,
          totalPrice: parseFloat(action.payload.price.replace(/\$|,/g, "")),
          stock: action.payload.stock - 1,
        });
      } else {
        let cartItem = cart.find((item) => item.id === action.payload.id);
        if (cartItem.stock === 0) {
          alert("Product is out of stock!");
        } else {
          cartItem.count++;
          cartItem.totalPrice =
            parseFloat(cartItem.price.replace(/\$|,/g, "")) * cartItem.count;
          cartItem.stock = cartItem.stock - 1;
        }
        //   cartItem.
      }
      let itemCount = cart.length;
      return { ...state, cartItem: cart, itemCount: itemCount };
    case cartActionName.REMOVE_ITEM_FROM_CART:
      let cartData = [...state.cartItem];
      const filterItem = cartData.filter(function (item) {
        return item.id !== action.payload;
      });
      let count = filterItem.length;
      return { ...state, cartItem: filterItem, itemCount: count };
    case cartActionName.INCREMENT_ITEM_COUNT_FROM_CART:
      let item = [...state.cartItem];
      let foundItem = item.find((item) => item.id === action.payload);
      console.log(foundItem, "foundItem");
      if (foundItem.stock === 0) {
        alert("Product is out of stock!");
      } else {
        foundItem.count++;
        foundItem.totalPrice =
          parseFloat(foundItem.price.replace(/\$|,/g, "")) * foundItem.count;
        foundItem.stock = foundItem.stock - 1;
      }
      return { ...state, cartItem: item };
    case cartActionName.DECREMENT_ITEM_COUNT_FROM_CART:
      let cartItem = [...state.cartItem];
      let foundCartItem = cartItem.find((item) => item.id === action.payload);
      foundCartItem.count--;
      if (foundCartItem.count === 0) {
        // alert("Product is out of stock!");
        cartItem = cartItem.filter(
          (content) => foundCartItem.id !== content.id
        );
      } else {
        foundCartItem.totalPrice =
          foundCartItem.totalPrice -
          parseFloat(foundCartItem.price.replace(/\$|,/g, ""));
        foundCartItem.stock = foundCartItem.stock + 1;
      }
      return { ...state, cartItem: cartItem };
    default:
      return state;
  }
};

// /**
//  * Remove Item from cart
//  * */

// export const removeItemFromCartReducer = (state,action) => {
//   switch (action.type) {

//     default:
//       break;
//   }
// }
