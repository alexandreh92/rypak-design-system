import { defineConfig } from '@pandacss/dev';
import { defaultPreset } from '@rypak/panda-preset';
import pandaPreset from '@pandacss/preset-panda';

export default defineConfig({
  presets: [pandaPreset, defaultPreset],
  jsxFramework: 'react',
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.stories.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  importMap: {
    css: '@rypak/ui/styled-system/css',
    recipes: '@rypak/ui/styled-system/recipes',
    patterns: '@rypak/ui/styled-system/patterns',
    jsx: '@rypak/ui/styled-system/jsx',
  },
  outdir: 'styled-system',
});
