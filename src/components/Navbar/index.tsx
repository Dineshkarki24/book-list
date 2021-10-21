import { useAppSelector } from "hooks/hooks";
import * as React from "react";
import { BsCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toggleCart } from "store/modules/cart/cartAction";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const cartData = useAppSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePushToCartPage = () => {
    // history.push("/cart");
    dispatch(toggleCart());
  };
  return (
    <nav>
      <div className="navbar">
        <div
          onClick={() => {
            history.push("/");
          }}
          className="navbar-brand"
        >
          BookList
        </div>
        <ul className="cart-indicator">
          <li onClick={handlePushToCartPage} className="cart__list">
            <span>{cartData.itemCount}</span>
            <BsCartFill />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
