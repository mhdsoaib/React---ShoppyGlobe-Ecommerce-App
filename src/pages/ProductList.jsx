import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { selectSearchQuery } from "../redux/searchSlice";

import "../styles/ProductList.css";

const ProductList = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const [products, setProducts] = useState([]); 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        setError("Oops! Something went wrong while loading the products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2>Loading products... Please wait.</h2>;
  if (error) return <h2>{error}</h2>;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div className="product-list">
      {filteredProducts.map(product => (

        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
