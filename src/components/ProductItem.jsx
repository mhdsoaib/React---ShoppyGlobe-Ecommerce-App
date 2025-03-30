import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
      <img src={product.thumbnail || "path/to/placeholder/image.png"} alt={product.title} />

        <h3>{product.title}</h3>
        <p>₹{product.price}</p>
      </Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
