import "./App.css";
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
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
