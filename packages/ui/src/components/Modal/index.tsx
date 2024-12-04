import React, { forwardRef } from 'react';
import { Portal } from '../Portal';
import type { PortalProps, PortalHandleProps } from '../Portal';

interface ModalProps extends PortalProps {
  children: React.ReactNode;
}

export const Modal = forwardRef<PortalHandleProps, ModalProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Portal ref={ref} {...rest}>
        {children}
      </Portal>
    );
  }
);

Modal.displayName = 'Modal';
