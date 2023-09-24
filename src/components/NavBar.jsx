import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import "./NavBar.css";
import "./NavBarModal.css";
function NavBar({ cart, setCart }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  function deleteItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              id="navbarimage"
              height="150px"
              width="150px"
              src="public/download.jpg"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <ShoppingCartOutlinedIcon
                    onClick={handleShow}
                    fontSize="large"
                  />{" "}
                  {cart.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="modal-item">
                <img src={item.image} alt={item.title} />
                <div className="modal-item-details">
                  <span>{item.title}</span>
                  <span className="modal-price">${item.price}</span>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  id="removeitembutton"
                >
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
          {totalPrice !== 0 && (
            <div>
              <h3 id="totalpricecart">Your Total Is: ${totalPrice}</h3>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div id="cartcontainerfooter">
            <button id="cartmodalcheckout">Checkout</button>
            <button id="cartmodalclose" onClick={handleClose}>
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
