import type { Meta, StoryObj } from '@storybook/react';

import H1 from '@rypak/ui/components/Typography/H1';
// "/Users/alexandre/rypak-design-system/packages/ui/src/components/Typography/H1/index"
// import TestComponent, {
//   TestComponentProps,
// } from '../../../../../../packages/ui/src/components/Typography/H1';
// "/Users/alexandre/rypak-design-system/packages/ui/src/components/Typography/H1/index"

const meta: Meta<typeof H1> = {
  title: 'TestComponent3',
  component: H1,
  render: ({ ...args }) => <H1 {...args} />,
};

export default meta;

type Story = StoryObj<typeof H1>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'primary',
};

// import type { Meta, StoryObj } from '@storybook/react';

// import H1 from '../../../../../../packages/ui/src/components/Typography/H1/index';

// const meta: Meta<typeof H1> = {
//   component: H1,
//   render: ({ ...args }) => <H1 {...args} />,
// };

// export default meta;

// type Story = StoryObj<typeof H1>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */

export const H1Story: Story = {
  name: 'primary',
};

// // export const H2Story: Story = {
// //   render: () => (
// //     <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H2>
// //   ),
// //   name: 'H2',
// // };

// // export const H3Story: Story = {
// //   render: () => (
// //     <H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H3>
// //   ),
// //   name: 'H3',
// // };

// // export const H4Story: Story = {
// //   render: () => (
// //     <H4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H4>
// //   ),
// //   name: 'H4',
// // };

// // export const PStory: Story = {
// //   render: ({ ...args }) => (
// //     <P {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
// //   ),
// //   argTypes: {
// //     size: {
// //       options: ['xs', 'sm', 'md', 'lg'],
// //       control: { type: 'select' },
// //     },
// //   },
// // };
