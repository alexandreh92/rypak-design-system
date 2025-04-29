// import { styled } from '../../../../styled-system/jsx';
import { Test } from '@rypak/ui';
import { styled as rypak } from '@rypak/ui/styled-system/jsx';

export const Button = rypak('button', {
  base: {
    py: '2',
    px: '4',
    rounded: 'md',
  },
  variants: {
    variant: {
      primary: {
        bg: 'blue.500',
        color: 'white',
      },
      secondary: {
        bg: 'gray.500',
        color: 'white',
      },
    },
  },
});
Button.displayName = 'Button';

export const RypakButton = rypak('button', {
  base: {
    py: '2',
    px: '20',
    rounded: 'md',
  },
  variants: {
    variant: {
      primary: {
        bg: 'red.200',
        color: 'grayscale.border',
      },
      secondary: {
        bg: 'gray.500',
        color: 'white',
      },
    },
  },
});
RypakButton.displayName = 'RypakButton';

export const ButtonRestyle = rypak(Button, {
  base: {
    color: 'blue',
    backgroundColor: 'green',
  },
});

export const StyledTest = rypak(Test, {
  base: { margin: '5px', backgroundColor: 'green' },
});
ButtonRestyle.displayName = 'ButtonRestyle';
