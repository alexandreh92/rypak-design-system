import { forwardRef } from 'react';

import type { ModalRootProps } from './Root';
import type { PortalHandles } from '../Portal';

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

const ShorthandModal = forwardRef<PortalHandles, ShorthandModalProps>(
  ({ id = 'modal-container', children, ...props }, ref) => {
    return (
      <Root ref={ref} id={id} {...props}>
        <Container>
          <Header title={props.title} onClose={props.onClose} />
          <Body>{children}</Body>
          <Actions actions={props.actions} />
        </Container>
      </Root>
    );
  }
);

ShorthandModal.displayName = 'ShorthandModal';

const ComposableModal = forwardRef<PortalHandles, ComposableModalProps>(
  ({ id = 'modal-container', composable, children, ...props }, ref) => {
    return (
      <Root ref={ref} id={id} {...props}>
        <Container>{children}</Container>
      </Root>
    );
  }
);

ComposableModal.displayName = 'ComposableModal';

type ModalProps =
  | (ShorthandModalProps & { composable?: never })
  | ComposableModalProps;

const ModalComponent = forwardRef<PortalHandles, ModalProps>(
  ({ id = 'modal-container', ...props }, ref) => {
    // This abstraction is because we need to narrow down the type of the ModalProps.
    // It also helps with the readability of the code and the code isolation.
    return (
      <>
        {props.composable ? (
          <ComposableModal
            id={id}
            ref={ref}
            {...(props as ComposableModalProps)}
          >
            {props.children}
          </ComposableModal>
        ) : (
          <ShorthandModal id={id} ref={ref} {...(props as ShorthandModalProps)}>
            {props.children}
          </ShorthandModal>
        )}
      </>
    );
  }
);

ModalComponent.displayName = 'Modal';

type ModalComponentType = typeof ModalComponent & {
  Header: typeof Header;
  Body: typeof Body;
  Actions: typeof Actions;
};

const Modal = Object.assign(ModalComponent, {
  Header,
  Body,
  Actions,
}) as ModalComponentType;

export default Modal;
