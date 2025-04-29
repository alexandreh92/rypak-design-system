import { dirname, join, resolve } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/stories/**/*.stories.tsx'],
  addons: [
    // getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    enableCrashReports: false,
    disableTelemetry: true,
  },
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: 'ui',
            replacement: resolve(__dirname, '../../../packages/ui/'),
          },
        ],
      },
    };
  },
  docs: {
    docsMode: true,
  },
};

export default config;
