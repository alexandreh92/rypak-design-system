import React, { useCallback, useRef, useState } from 'react';
import Modal from '../../components/Modal';
import { PortalHandles } from '../../components/Portal';

export default function ComposableWithTrigger() {
  // const { someAbstractionThatShouldNotbeHEre } = useModal();

  const modalRef = useRef<PortalHandles>(null);

  return (
    <>
      <Modal
        id="composable-with-trigger"
        ref={modalRef}
        composable
        trigger={
          <button type="button">Open Composable Modal With Trigger</button>
        }
      >
        <Modal.Header composable>
          <Modal.Header.Title>Composable Modal With Trigger</Modal.Header.Title>
          <Modal.Header.CloseButton onClick={() => modalRef.current?.toggle()}>
            X
          </Modal.Header.CloseButton>
        </Modal.Header>
        <Modal.Body>
          This is a composable modal, I can be split in several components and
          preserve the style and behavior logic. I am being opened by a trigger
          component. It could be a ref.current too.
        </Modal.Body>
        <Modal.Actions composable>
          <Modal.Actions.Action
            onClick={() => {
              alert('Wohoo!');
              modalRef.current?.toggle();
            }}
          >
            Ok
          </Modal.Actions.Action>
          <Modal.Actions.Action onClick={() => modalRef.current?.toggle()}>
            Cancel
          </Modal.Actions.Action>
        </Modal.Actions>
      </Modal>
    </>
  );
}
