import { styled } from 'styled-system/jsx';

export const H3 = styled('h3', {
  base: {
    textStyle: {
      base: 'h3',
      sm: 'h3.mobile',
    },
  },
});

H3.displayName = 'H3';

export default H3;
