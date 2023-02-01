import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiPackage } from "react-icons/fi";
import CartContext from "../CartContext";

const Nav = () => {
  const { items } = useContext(CartContext);
  return (
    <nav className="fixed top-0 left-0 w-screen h-12 flex justify-between items-center gap-4 bg-neutral-900">
      <div className="w-full max-w-xl h-inherit mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="flex gap-1 items-center">
            <FiPackage /> Shop
          </h1>
        </Link>
        <Link to="/checkout">
          <div className="h-12 flex items-center gap-2">
            <FiShoppingBag />
            <span>{items.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
