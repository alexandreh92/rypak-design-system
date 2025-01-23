import React, { useCallback, useState } from 'react';
import Modal from '../../components/Modal';

export default function Composable() {
  // const { someAbstractionThatShouldNotbeHEre } = useModal();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((oldState) => !oldState);
  }, []);

  return (
    <>
      <Modal id="composable" composable isOpen={isOpen}>
        <Modal.Header composable>
          <Modal.Header.Title>Composable Modal</Modal.Header.Title>
          <Modal.Header.CloseButton onClick={handleToggle}>
            X
          </Modal.Header.CloseButton>
        </Modal.Header>
        <Modal.Body>
          This is a composable modal, I can be split and preserve the style and
          behavior logic
        </Modal.Body>
        <Modal.Actions composable>
          <Modal.Actions.Action
            onClick={() => {
              alert('Wohoo!');
              handleToggle();
            }}
          >
            Ok
          </Modal.Actions.Action>
          <Modal.Actions.Action onClick={handleToggle}>
            Cancel
          </Modal.Actions.Action>
        </Modal.Actions>
      </Modal>
      <button type="button" onClick={handleToggle}>
        Open Composable Modal
      </button>
    </>
  );
}
