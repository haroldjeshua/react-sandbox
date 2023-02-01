import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-12 flex justify-between items-center gap-4 bg-neutral-900">
      <div className="w-full max-w-xl h-inherit mx-auto flex justify-between items-center">
        <Link to="/">
          <h1>Wear</h1>
        </Link>
        <Link to="/checkout">
          <div className="h-12 flex items-center gap-2">
            <FiShoppingBag />
            <span>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
