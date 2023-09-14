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
        data.map((product) => <h1 key={product.id}>{product.title}</h1>)
      )}
    </div>
  );
}

export default Products;
