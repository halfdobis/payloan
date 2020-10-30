import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FormModal from "../formModal";

function InputModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const [myName, setMyName] = useState("");

  return modalShow ? (
    <FormModal
      show={modalShow}
      onHide={() => {
        setModalShow(false);
        setMyName("");
        props.setModal(false);
      }}
      name={myName}
    />
  ) : (
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
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Your Name"
              id="myName"
              onChange={(e) => setMyName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p className="foot">
          Your personal information is always protected and safe with us.
        </p>
        <Button
          type="button"
          variant="success"
          onClick={() => {
            if (myName !== "") {
              setModalShow(true);
            }
          }}
        >
          Proceed
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InputModal;
