import { useAppSelector } from "hooks/hooks";
import * as React from "react";
import { BsCartFill } from "react-icons/bs";
import { useHistory } from "react-router";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const cartData = useAppSelector((state) => state.cart);
  const history = useHistory();

  const handlePushToCartPage = () => {
    history.push("/cart");
  };
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">BookList</div>
        <ul className="cart">
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
