import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import DescriptionButton from "./DescriptionButton";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
    fetchAll();
  }, []);
  const productsToDisplay = searchParam
    ? data.filter((product) =>
        product.title.toLowerCase().includes(searchParam)
      )
    : data;

  return (
    <>
      <div id="productsearchbox">
        <label id="productlabelsearch">
          Search:{" "}
          <input
            id="productinputsearch"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
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
            {productsToDisplay.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="category">{product.category}</p>

                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                {/* <p>{product.description}</p> */}
                <p className="price">${product.price}</p>
                <div>
                  {" "}
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
