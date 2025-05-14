import { dirname, join, resolve } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

import tsconfigPaths from 'vite-tsconfig-paths';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        baseUrl: '.',
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        paths: {
          '@rypak/ui/styled-system/*': ['../../packages/ui/styled-system/*'],
          '@rypak/ui/*': ['../../packages/ui/src/*'],
          'styled-system/*': ['../../packages/ui/styled-system/*'],
        },
      },
      tsconfigPath: resolve(__dirname, '../tsconfig.json'),
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      EXPERIMENTAL_useWatchProgram: true,
      savePropValueAsString: true,
      skipChildrenPropWithoutDoc: true,
      propFilter: (prop) => {
        console.log({ prop });
        return true;
      },
    },
  },
  core: {
    enableCrashReports: false,
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    return {
      plugins: [...(config.plugins || []), tsconfigPaths()],
      ...config,
    };
  },
  docs: {
    docsMode: true,
  },
};

export default config;
