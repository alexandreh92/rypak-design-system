import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.browser,
        ...globals.node,
        __dirname: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
  },
  reactHooks.configs['recommended-latest'],
  prettier,
  ...tseslint.config({
    files: ['**/*.ts', '**/*.tsx', '**/*.mdx'],
    extends: [
      tseslint.configs.recommended,
      importPlugin.flatConfigs.errors,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      'import/no-named-as-default': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'import/no-empty-named-blocks': 'error',
      'import/named': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          groups: [
            'builtin',
            'type',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          distinctGroup: false,
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/setup/tests/**',
            '**/*.test.js',
            '**/*.spec.js',
            '**/*.stories.tsx',
            '**/*.mdx',
          ],
        },
      ],
    },
  }),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-trailing-spaces': ['error'],
    },
  },
  {
    plugins: {
      vitest,
      '@typescript-eslint': tseslint.plugin,
    },
    files: ['test/**', '**/*.test.{js,ts,tsx}', '**/*.spec.{js,ts,tsx}'],
    rules: {
      ...vitest.configs.all.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'vitest/prefer-describe-function-title': 'off',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-lowercase-title': 'off',
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
]);
