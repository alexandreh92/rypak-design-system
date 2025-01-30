import React, { forwardRef } from 'react';
import { Portal } from '../PortalOld';
import type { PortalProps, PortalHandleProps } from '../PortalOld';

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
