import type { Preview } from '@storybook/react';

import '../src/index.css';

const preview: Preview = {
  decorators: [],
  parameters: {
    viewMode: 'docs',
    docs: {
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
    },
  },
  globalTypes: {},
  initialGlobals: {},
};

export default preview;
