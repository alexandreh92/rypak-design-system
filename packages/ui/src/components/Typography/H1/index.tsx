import { styled } from 'styled-system/jsx';

export const H1 = styled('h1', {
  base: {
    textStyle: {
      base: 'h1',
      sm: 'h1.mobile',
      md: 'h1.tablet',
    },
  },
});

H1.displayName = 'H1';

export default H1;
