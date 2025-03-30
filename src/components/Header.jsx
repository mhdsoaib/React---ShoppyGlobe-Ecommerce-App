import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import "../styles/Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.length);
  const searchQuery = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1><Link to="/">ShoppyGlobe</Link></h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <Link to="/cart" className="cart-icon">
        🛒 {cartItems}
      </Link>
    </header>
  );
};

export default Header;
