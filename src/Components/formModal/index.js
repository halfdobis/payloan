import { Modal } from "react-bootstrap";
import Tab from "../Tabs/tab";
import "./style.css";

function FormModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-tab"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Tab />
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

export default FormModal;
