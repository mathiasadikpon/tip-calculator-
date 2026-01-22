import React from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

// Info modal component
export default function InfoModal({ isOpen, toggle }) {
  // Render the modal with information about the app
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Info</ModalHeader>
      <ModalBody>
        // Description of the app
        <p>
          Use the spinner to select the number of people splitting the total.
          <br />
          Select a rounding option:
        </p>
        <ul>
          <li>
            <strong>No:</strong> Exact bill, tip, and total
          </li>
          <li>
            <strong>Tip:</strong> Tip is rounded up before adding to total
          </li>
          <li>
            <strong>Total:</strong> Bill + tip is rounded up
          </li>
        </ul>
      </ModalBody>
      {/* OK button to close the modal */}
      <div className="text-center mb-3">
        {/* Button to close the modal */}
        <Button color="info" onClick={toggle}>
          OK
        </Button>
      </div>
    </Modal>
  );
}
