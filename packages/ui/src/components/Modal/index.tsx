import React from 'react';
import { Portal } from '../Portal';
import type { PortalProps } from '../Portal';

interface ModalProps extends PortalProps {
  children: React.ReactNode;
}

export function Modal({ children, ...rest }: ModalProps) {
  return <Portal {...rest}>{children}</Portal>;
}
