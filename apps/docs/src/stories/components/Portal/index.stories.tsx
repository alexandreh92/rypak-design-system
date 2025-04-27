import type { Meta, StoryObj } from '@storybook/react';
import { Test } from '@rypak/ui';
import { css } from '@rypak/ui/styled-system/css';

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

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <div className={css({ color: 'grayscale.disabled' })}>
      another testa
      <Test />
    </div>
  ),
  name: 'Button',
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
