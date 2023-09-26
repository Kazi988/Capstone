import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/LogIn";
import CheckOut from "./components/CheckOut";
import Success from "./Success";
import Cancel from "./Cancel";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);

  console.log(cart);
  return (
    <>
      <div>
        <NavBar cart={cart} setCart={setCart} />

        <Routes>
          <Route
            path="/about"
            element={<About token={token} setToken={setToken} />}
          />
          <Route
            path="/"
            element={
              <Home
                token={token}
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                setCart={setCart}
                token={token}
                setToken={setToken}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LogIn
                token={token}
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <SingleProduct
                cart={cart}
                setCart={setCart}
                token={token}
                setToken={setToken}
              />
            }
          />
          <Route
            path="/checkout"
            element={<CheckOut token={token} setToken={setToken} />}
          />
          <Route
            path="/cancel"
            element={<Cancel token={token} setToken={setToken} />}
          />
          <Route
            path="/success"
            element={<Success token={token} setToken={setToken} />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
