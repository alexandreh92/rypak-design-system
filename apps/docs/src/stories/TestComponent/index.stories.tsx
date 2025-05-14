import type { Meta, StoryObj } from '@storybook/react';

import TestComponent, { TestComponentProps } from '../../TestComponent';

const meta: Meta<TestComponentProps> = {
  component: TestComponent,
  render: ({ ...args }) => <TestComponent {...args} />,
};

export default meta;

type Story = StoryObj<TestComponentProps>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'primary',
};
