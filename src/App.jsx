import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/LogIn";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
