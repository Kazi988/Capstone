import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function SingleProduct({ setCart, cart }) {
  const [single, setSingle] = useState("");
  const { productId } = useParams();

  const navigate = useNavigate();
  const productsPage = () => {
    navigate("/products");
  };

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const result = await response.json();
        setSingle(result);
      } catch (error) {
        console.error("Error fetching single product", error);
      }
    }
    fetchSingleProduct();
  }, [productId]);

  function addToCart(single) {
    const cartItem = { ...single, quantity: 1 };
    setCart([...cart, cartItem]);
  }

  return (
    <>
      <button onClick={productsPage} id="gobackbutton">
        {" "}
        <ArrowBackIcon />
        Products
      </button>
      <div className="container mt-5">
        <div className="card">
          <img src={single.image} alt={single.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{single.title}</h5>
            <p className="card-text">{single.description}</p>
            <p>Price: ${single.price}</p>
            {single.rating && (
              <p>
                Rating: <StarBorderIcon /> {single.rating.rate} (from{" "}
                {single.rating.count} reviews)
              </p>
            )}
            <button
              id="singleproductbtn"
              onClick={() => addToCart(single)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
