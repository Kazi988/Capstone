import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

export default function SingleProduct({ setCart, cart }) {
  const [single, setSingle] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const result = await response.json();
        setSingle(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleProduct();
  }, [productId]);

  function addToCart(single) {
    const cartItem = { ...single, quantity: 1 };
    setCart([...cart, cartItem]);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={single.image} alt={single.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{single.title}</h5>
          <p className="card-text">{single.description}</p>
          <p>Price: ${single.price}</p>
          {single.rating && (
            <p>
              Rating: {single.rating.rate} (from {single.rating.count} reviews)
            </p>
          )}
          <button onClick={() => addToCart(single)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
