import { defineConfig } from '@pandacss/dev';
import { defaultPreset } from '@rypak/panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  staticCss: {
    themes: ['light'],
  },

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  presets: [defaultPreset],

  // The output directory for your css system
  outdir: 'styled-system',
});
