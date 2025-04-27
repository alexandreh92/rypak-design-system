import * as path from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setup/tests/index.ts'],
    alias: {
      'test-utils': path.resolve(__dirname, './src/setup/tests/testUtils'),
    },
  },
});
