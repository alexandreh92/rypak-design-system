import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/**/*@(ts|tsx)'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: [/node_modules/],
  ignore: ['**/*.test.tsx', '**/*.spec.tsx', 'src/setup/**'],
  ...options,
}));
