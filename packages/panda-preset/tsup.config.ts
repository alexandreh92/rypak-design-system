import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['index.ts'],
  dts: true,
  format: ['cjs', 'esm'],
  clean: true,
  external: [/node_modules/],
  ...options,
}));
