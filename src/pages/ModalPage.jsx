import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={onModalClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={onModalClose} actionBar={actionBar}>
      <p> Hello this is a new modal</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
