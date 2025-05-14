import { AppsProps, Typography, H1Type } from '@rypak/ui';
import React, { ComponentProps } from 'react';

// import { Container } from './styles';

export interface TestComponentProps extends H1Type {
  foo: string;
  bar: string;
}

export default function TestComponent({ ...props }: TestComponentProps) {
  return <div />;
}
