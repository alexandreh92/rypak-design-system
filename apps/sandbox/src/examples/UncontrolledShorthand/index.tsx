import React, { useRef } from 'react';
import Modal from '../../components/Modal';
import { PortalHandles } from '../../components/Portal';

export default function UncontrolledShorthand() {
  const modalRef = useRef<PortalHandles>(null);

  return (
    <>
      <Modal
        // id="uncontrolled-shorthand"
        ref={modalRef}
        title="Shorthand"
        onClose={() => {
          // In this case, only way to close the modal is using the imperative API
          modalRef.current?.toggle();
        }}
        actions={[
          {
            text: 'Save',
            onClick: () => {
              // In this case, only way to close the modal is using the imperative API
              modalRef.current?.toggle();
            },
          },
        ]}
        trigger={<button type="button">Open Uncontrolled Shorthand</button>}
      >
        I am the children
      </Modal>
    </>
  );
}
