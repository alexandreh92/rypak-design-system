import type { Meta, StoryObj } from '@storybook/react';

import { Test } from '@rypak/ui';
import { css } from '@rypak/ui/styled-system/css';
// import { css } from '../../../../styled-system/css';
// import { styled } from '../../../../styled-system/jsx';

const meta: Meta<typeof Test> = {
  component: Test,
  argTypes: {
    // type: {
    //   control: { type: 'radio' },
    //   options: ['button', 'submit', 'reset'],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Test>;

import { Button, StyledTest, ButtonRestyle, RypakButton } from './fonfon';

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (_props) => (
    <div className={css({ color: 'grayscale.disabled', margin: '20px' })}>
      another testa
      <Test padding="20px" />
      <StyledTest />
      <Button variant="primary" margin="20px" color="red.200">
        fonfon
      </Button>
      <ButtonRestyle backgroundColor="yellow.100">fiooonna</ButtonRestyle>
      <RypakButton variant="primary">lflflfl</RypakButton>
    </div>
  ),
  name: 'ButtonS',
  args: {
    children: 'Hello',
    type: 'button',
    style: {
      color: 'blue',
      border: '1px solid gray',
      padding: 10,
      borderRadius: 10,
    },
  },
};
