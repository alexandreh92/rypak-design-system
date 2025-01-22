import React from 'react';
import Modal from '../../components/Modal';

export default function ControlledShorthand() {
  return (
    <>
      <Modal
        title="Shorthand"
        onClose={() => {
          // In this case, only way to close the modal is using the imperative API

          alert('Closed!');
        }}
        actions={[
          {
            text: 'Save',
            onClick: () => {
              // In this case, only way to close the modal is using the imperative API
              alert('Saved!');
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
