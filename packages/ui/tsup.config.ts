import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/**/*@(ts|tsx)', 'styled-system/**/*@(js|css)'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  treeshake: true,
  minify: true,
  external: [/node_modules/],
  ignore: ['**/*.test.tsx', '**/*.spec.tsx', 'src/setup/**'],
  ...options,
}));
