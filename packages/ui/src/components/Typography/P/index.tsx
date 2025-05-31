import { styled } from 'styled-system/jsx';

export const P = styled('p', {
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
  defaultVariants: {
    size: 'sm',
  },
});

P.displayName = 'P';

export default P;
