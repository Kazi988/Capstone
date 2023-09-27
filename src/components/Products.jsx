import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import DescriptionButton from "./DescriptionButton";
import { useNavigate } from "react-router-dom";

function Products({ setCart, cart, token }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  const hidecartbutton = localStorage.getItem("token");

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        const categories = result.map((product) => product.category);
        const uniqueCategories = [...new Set(categories)];
        setCategories(uniqueCategories);
        setData(result);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
    fetchAll();
  }, []);

  function addToCart(product) {
    const cartItem = { ...product, quantity: 1 };
    setCart([...cart, cartItem]);
  }

  function selectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  let filteredProducts = data;

  if (selectedCategory !== "all") {
    filteredProducts = data.filter(
      (product) => product.category === selectedCategory
    );
  }
  if (searchParam) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchParam)
    );
  }

  return (
    <>
      <div id="productsearchbox">
        <label id="productlabelsearch">
          Find Product:{" "}
          <input
            id="productinputsearch"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
        <select onChange={selectCategory}>
          <option value="all">All Products</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="spinnah">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center full-height">
            <div className="spinner-border large-spinner" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="category">{product.category}</p>
                <img
                  className="cardimage"
                  onClick={() => navigate(`/products/${product.id}`)}
                  src={product.image}
                  alt={product.title}
                />
                <h2>{product.title}</h2>
                <p className="price">${product.price}</p>
                <div id="cartanddescriptioncontainer">
                  <button onClick={() => addToCart(product)} id="cartbutton">
                    Add to Cart
                  </button>{" "}
                  <DescriptionButton
                    data={data}
                    product1={product.title}
                    product2={product.description}
                  />{" "}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
