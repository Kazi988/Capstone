import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
    fetchAll();
  }, []);

  return (
    <div className="spinnah">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center full-height">
          <div className="spinner-border large-spinner" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="products-grid">
          {data.map((product, index) => (
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
