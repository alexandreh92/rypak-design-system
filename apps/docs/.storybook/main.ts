import { resolve } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        baseUrl: '.',
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        houldExtractLiteralValuesFromEnum: true,
        shouldRemoveUndefinedFromOptional: true,
        savePropValueAsString: true,
        paths: {
          '@rypak/ui/styled-system/*': ['../../packages/ui/styled-system/*'],
          '@rypak/ui/*': ['../../packages/ui/src/*'],
          'styled-system/*': ['../../packages/ui/styled-system/*'],
        },
      },
      tsconfigPath: resolve(__dirname, '../tsconfig.json'),
      propFilter: (prop) => {
        if (prop.name === 'children') {
          return true;
        }

        if (prop.parent) {
          return !(
            /@types\/react/.test(prop.parent.fileName) ||
            /styled-system\/types/.test(prop.parent.fileName)
          );
        }

        return true;
      },
    },
  },
  docs: {
    docsMode: true,
  },
};
export default config;
