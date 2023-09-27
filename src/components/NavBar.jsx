import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import "./NavBar.css";
import "./NavBarModal.css";
import idmap from "./idmap";

const stripePromise = loadStripe(
  "pk_test_51Nti1AFz6BJIRQtNXATLet5VqoThfJYxsnxnPJQQ5yDoLUmB9nvKzwTUU8JGUZzlDuRBh95jsR1KWWdvt5w5SU1x00j7wFvTSI"
);
function NavBar({ cart, setCart, token, setToken }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setQuantity] = useState({});
  const isloggedin = localStorage.getItem("token");
  const navigatte = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (quantity[item.id] || 1),
    0
  );

  function deleteItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe is not loaded");

      const lineItems = cart.map((item) => {
        const stripePriceId = idmap[item.id];
        if (!stripePriceId)
          throw new Error(`Item not found for item ID: ${item.id}`);
        return {
          price: stripePriceId,
          quantity: item.quantity || 1,
        };
      });

      const { error } = await stripe.redirectToCheckout({
        lineItems,
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) throw error;
    } catch (err) {
      console.error("You have an error ", err);
    }
  };

  function handleplusQuantity(item, plus) {
    const newquantity = (quantity[item.id] || 0) + 1;

    setQuantity((quantity) => ({ ...quantity, [item.id]: newquantity }));
  }
  function handleminusQuantity(item, minus) {
    const newquantity = (quantity[item.id] || 0) - 1;

    setQuantity((quantity) => ({ ...quantity, [item.id]: newquantity }));
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
                {isloggedin ? (
                  <Link
                    onClick={() => {
                      localStorage.clear();
                      navigatte("/");
                    }}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link className="nav-link" to="/login">
                    Log In
                  </Link>
                )}
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
                <button
                  onClick={() => {
                    handleplusQuantity(item, 1);
                  }}
                >
                  +
                </button>
                <p>Quantity</p>
                <p>{quantity[item.id] || 0}</p>
                <button
                  onClick={() => {
                    handleminusQuantity(item, -1);
                  }}
                >
                  -
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
          <button id="cartmodalcheckout" onClick={handleCheckout}>
            Checkout
          </button>
          <button id="cartmodalclose" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
