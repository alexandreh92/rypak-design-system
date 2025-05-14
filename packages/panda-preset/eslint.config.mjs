import baseConfig from '@rypak/eslint-config/react';

export default [
  ...baseConfig,
  {
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];
