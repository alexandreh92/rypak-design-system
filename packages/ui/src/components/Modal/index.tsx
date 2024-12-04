import React, { useState } from 'react';
import { Portal } from '../Portal';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  return <Portal containerId="test">{children}</Portal>;
}
