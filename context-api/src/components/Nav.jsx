import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-routed-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Wear</h1>
      </Link>
      <Link to="/checkout">
        <div className="cart">
          <FiShoppingBag />
          <span>0</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
