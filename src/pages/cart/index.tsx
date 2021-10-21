import { useAppSelector } from "hooks/hooks";
import * as React from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  decrementCartItemCount,
  incrementCartItemCount,
  removeItemFromCart,
  toggleCart,
} from "store/modules/cart/cartAction";
import { convertDollersToRupees, getCommaSeperateNumber } from "utils/utils";

interface ICartPageProps {}

const CartPage: React.FunctionComponent<ICartPageProps> = (props) => {
  const cartData = useAppSelector((state) => state.cart);
  const isCartOpen = useAppSelector((state) => state.isCartOpen.isCartOpen);

  const dispatch = useDispatch();
  const history = useHistory();

  const totalPrice = React.useMemo(() => {
    return cartData.cartItem.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.totalPrice;
    }, 0);
  }, [cartData]);
  console.log(isCartOpen, "isCartOpen");
  return (
    <div className={`cart cart-${isCartOpen ? "open" : "close"}`}>
      <div className="cart-header">
        <div className="cart-header__title">Cart</div>
        <div
          onClick={() => dispatch(toggleCart())}
          className="cart-header__icon"
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="cart-body">
        {cartData.cartItem.length === 0 ? (
          <div className="no-item">
            <h6>Your cart is empty.</h6>
          </div>
        ) : (
          cartData.cartItem?.map((item) => {
            return (
              <>
                <div key={item.id} className="row mb-0">
                  <div className="col-1-of-3">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="col-1-of-6">{item.name}</div>
                  <div className="col-1-of-3">
                    Rs.
                    {getCommaSeperateNumber(
                      convertDollersToRupees(`$ ${item.totalPrice}`)
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-1-of-3">
                    <span
                      onClick={() => {
                        dispatch(removeItemFromCart(item.id));
                      }}
                      className="remove-item"
                    >
                      <BsTrashFill />
                    </span>
                  </div>
                  <div className="col-1-of-8">
                    <div className="cart-icon">
                      <span
                        onClick={() => {
                          dispatch(decrementCartItemCount(item.id));
                        }}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="cart-icon__count">{item.count}</span>
                      <span
                        onClick={() => {
                          dispatch(incrementCartItemCount(item.id));
                        }}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-footer__cost">
          <div className="cart-footer__lable">Estimated total</div>
          <div className="cart-footer__price">
            Rs.{" "}
            {getCommaSeperateNumber(convertDollersToRupees(`$ ${totalPrice}`))}
          </div>
        </div>
        <button
          disabled={cartData.cartItem.length === 0}
          onClick={() => {
            history.push("/checkout");
          }}
          className="btn btn--green cart-footer__btn"
        >
          Checkout all items
        </button>
      </div>
    </div>
  );
};

export default CartPage;
