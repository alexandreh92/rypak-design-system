import { styled } from 'styled-system/jsx';

export const H2 = styled('h2', {
  base: {
    textStyle: {
      base: 'h2',
      sm: 'h2.mobile',
      md: 'h2.tablet',
    },
  },
});

H2.displayName = 'H2';

export default H2;
