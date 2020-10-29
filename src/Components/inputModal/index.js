import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FormModal from "../formModal";

function InputModal(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ENTER YOUR NAME.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
        </Form>

        <FormModal show={modalShow} onHide={() => setModalShow(false)} />
      </Modal.Body>
      <Modal.Footer>
        <p className="foot">
          Your personal information is always protected and safe with us.
        </p>
        <Button
          type="button"
          variant="success"
          onClick={() => setModalShow(true)}
        >
          Proceed
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InputModal;
