import { defineConfig } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';
import * as mdx from 'eslint-plugin-mdx';

import reactConfig from './react.mjs';

export default defineConfig([
  ...reactConfig,
  ...storybook.configs['flat/recommended'],
  {
    ...mdx.flat,
    languageOptions: {
      ...mdx.flat.languageOptions,
      parserOptions: {
        ...mdx.flat.languageOptions.parserOptions,
        markdownExtensions: ['.mjs', '.md', '.mdx'],
      },
    },
  },
]);
