import { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';

export { default as H1 } from './H1';

export const H1Style = styled('h1', {
  base: {
    textStyle: {
      base: 'h1',
      sm: 'h1.mobile',
      md: 'h1.tablet',
    },
  },
});

export type H1Type = ComponentProps<typeof H1Style>;

export interface FooBarProps {
  foo: string;
  bar: string;
}

export const H2 = styled('h2', {
  base: {
    textStyle: {
      base: 'h2',
      sm: 'h2.mobile',
      md: 'h2.tablet',
    },
  },
});

H2.displayName = 'Typography.H2';

export const H3 = styled('h3', {
  base: {
    textStyle: {
      base: 'h3',
      sm: 'h3.mobile',
    },
  },
});

H3.displayName = 'Typography.H3';

export const H4 = styled('h4', {
  base: {
    textStyle: {
      base: 'h4',
      sm: 'h4.mobile',
    },
  },
});

H4.displayName = 'Typography.H4';

export const P = styled('p', {
  base: {
    textStyle: {
      base: 'paragraph-sm',
    },
  },
  variants: {
    size: {
      xs: {
        textStyle: 'paragraph-xs',
      },
      sm: {
        textStyle: 'paragraph-sm',
      },
      md: {
        textStyle: 'paragraph-md',
      },
      lg: {
        textStyle: 'paragraph-lg',
      },
    },
  },
});

P.displayName = 'Typography.P';
