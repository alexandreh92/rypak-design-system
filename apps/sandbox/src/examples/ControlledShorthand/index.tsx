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
        id="controlled-shorthand"
        isOpen={isOpen}
        title="Controlled Shorthand"
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
        This is the children of controlled shorthand
      </Modal>
      <button type="button" onClick={handleToggleModal}>
        Open Controlled Shorthand
      </button>
    </>
  );
}
