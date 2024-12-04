/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rypak/eslint-config/react.js'],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '^(useUpdateEffect)$',
      },
    ],
  },
};
