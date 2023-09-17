import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DescriptionButton({ product1, product2 }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="modalbutton" variant="primary" onClick={handleShow}>
        Description
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header id="modalheader">
          <Modal.Title id="modaltitle">{product1}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalbody">{product2}</Modal.Body>
        <Modal.Footer>
          <Button id="modalclose" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionButton;
