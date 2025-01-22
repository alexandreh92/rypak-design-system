import { ReactElement, HTMLProps } from 'react';

import type { ModalRootProps } from './Root';

import Root from './Root';
import Header from './Header';
import Body from './Body';
import Actions from './Actions';

import { Container } from './styles';

type SharedModalProps = ModalRootProps & {
  defaultOpen?: boolean;
  onClose?: () => void;
};

type ComposableModalProps = ModalRootProps & {
  composable: true;
};

type ShorthandModalProps = SharedModalProps & {
  composable?: never;
  title: string;
  actions: ActionType[];
};

function ShorthandModal({
  id = 'modal-container',
  children,
  ...props
}: ShorthandModalProps) {
  return (
    <Root id={id} {...props}>
      <Container>
        <Header title={props.title} onClose={props.onClose} />
        <Body>{children}</Body>
        <Actions actions={props.actions} />
      </Container>
    </Root>
  );
}

function ComposableModal({
  id = 'modal-container',
  composable,
  children,
  ...props
}: ComposableModalProps) {
  return (
    <Root id={id} {...props}>
      <Container>{children}</Container>
    </Root>
  );
}

type ModalProps =
  | (ShorthandModalProps & { composable?: never })
  | ComposableModalProps;

function Modal({ id = 'modal-container', ...props }: ModalProps) {
  // This abstraction is because we need to narrow down the type of the ModalProps.
  // It also helps with the readability of the code and the code isolation.
  return (
    <>
      {props.composable ? (
        <ComposableModal {...(props as ComposableModalProps)}>
          {props.children}
        </ComposableModal>
      ) : (
        <ShorthandModal {...(props as ShorthandModalProps)}>
          {props.children}
        </ShorthandModal>
      )}
    </>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Actions = Actions;

export default Modal;
