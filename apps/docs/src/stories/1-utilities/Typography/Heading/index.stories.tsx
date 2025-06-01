import type { Meta, StoryObj } from '@storybook/react-vite';

import H1 from '@rypak/ui/components/Typography/H1';
import H2 from '@rypak/ui/components/Typography/H2';
import H3 from '@rypak/ui/components/Typography/H3';
import H4 from '@rypak/ui/components/Typography/H4';

const meta: Meta<typeof H1> = {
  title: 'Utilities/Typography/Heading',
  component: H1,
  render: ({ ...args }) => <H1 {...args} />,
};

export default meta;

type Story = StoryObj<typeof H1>;

export const H1Story: Story = {
  render: () => (
    <H1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H1>
  ),
  name: 'H1',
};

export const H2Story: Story = {
  render: () => (
    <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H2>
  ),
  name: 'H2',
};

export const H3Story: Story = {
  render: () => (
    <H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H3>
  ),
  name: 'H3',
};

export const H4Story: Story = {
  render: () => (
    <H4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H4>
  ),
  name: 'H4',
};
