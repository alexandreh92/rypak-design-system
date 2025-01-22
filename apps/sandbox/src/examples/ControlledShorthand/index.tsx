import React, { useCallback, useState } from 'react';
import Modal from '../../components/Modal';

export default function ControlledShorthand() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsOpen((oldState) => !oldState);
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        title="Shorthand"
        onClose={() => setIsOpen((oldState) => !oldState)}
        actions={[
          {
            text: 'Save',
            onClick: () => {
              alert('Saved!');
              handleToggleModal();
            },
          },
        ]}
      >
        I am the children
      </Modal>
      <button type="button" onClick={handleToggleModal}>
        Open Controlled Shorthand
      </button>
    </>
  );
}
