import * as React from "react";
import { BsCartFill } from "react-icons/bs";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">BookList</div>
        <ul>
          <li>
            <BsCartFill />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
