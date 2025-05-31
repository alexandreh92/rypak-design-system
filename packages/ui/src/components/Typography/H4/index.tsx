import { styled } from 'styled-system/jsx';

export const H4 = styled('h4', {
  base: {
    textStyle: {
      base: 'h4',
      sm: 'h4.mobile',
    },
  },
});

H4.displayName = 'H4';

export default H4;
