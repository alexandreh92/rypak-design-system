import type { Meta, StoryObj } from '@storybook/react-vite';

import P from '@rypak/ui/components/Typography/P';

const meta: Meta<typeof P> = {
  title: 'Utilities/Typography/Paragraph',
  component: P,
  render: ({ ...args }) => <P {...args} />,
  argTypes: {
    size: {
      table: {
        defaultValue: { summary: 'sm' },
      },
      description: 'Size of the paragraph',
    },
  },
};

export default meta;

type Story = StoryObj<typeof P>;

export const ExtraSmall: Story = {
  render: ({ ...args }) => (
    <P {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
  ),
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  render: ({ ...args }) => (
    <P {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
  ),
};

export const Medium: Story = {
  render: ({ ...args }) => (
    <P {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
  ),
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  render: ({ ...args }) => (
    <P {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
  ),
  args: {
    size: 'lg',
  },
};
