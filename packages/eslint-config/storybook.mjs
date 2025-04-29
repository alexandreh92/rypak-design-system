import { defineConfig } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';
import * as mdx from 'eslint-plugin-mdx';

import reactConfig from './react.mjs';

export default defineConfig([
  ...reactConfig,
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {},
  },
  {
    files: ['**/*.@(mdx)'],
    rules: {
      'prettier/prettier': 'off',
      'import/namespace': 'off',
    },
  },
  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
]);
