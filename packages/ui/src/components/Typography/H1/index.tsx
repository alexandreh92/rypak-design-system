import { ComponentProps } from 'react';

import { styled } from 'styled-system/jsx';

const H1Style = styled('h1', {
  base: {
    textStyle: {
      base: 'h1',
      sm: 'h1.mobile',
      md: 'h1.tablet',
    },
  },
});

const H1 = (props: ComponentProps<typeof H1Style>) => {
  return <H1Style {...props} />;
};

export default H1;

export type H1Type = ComponentProps<typeof H1>;
