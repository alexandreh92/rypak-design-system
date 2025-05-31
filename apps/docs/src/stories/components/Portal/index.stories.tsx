import type { Meta, StoryObj } from '@storybook/react-vite';

import Portal from '@rypak/ui/components/Portal';

const meta: Meta<typeof Portal> = {
  component: Portal,
  render: ({ ...args }) => <Portal {...args} />,
};

export default meta;

type Story = StoryObj<typeof Portal>;

export const Primary: Story = {
  name: 'primary',
  args: {
    children: 'Portal content',
    isOpen: true,
    onClose: () => console.log('Portal closed'),
    onOpen: () => console.log('Portal opened'),
    trigger: <button>Toggle Portal</button>,
  },
};
