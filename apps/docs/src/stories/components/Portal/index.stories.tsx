import type { Meta, StoryObj } from '@storybook/react';

import { Test } from '@rypak/ui';

const meta: Meta<typeof Test> = {
  component: Test,
  render: ({ ...args }) => <Test {...args} />,
};

export default meta;

type Story = StoryObj<typeof Test>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'primary',
};
