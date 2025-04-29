import { defineTheme } from './theme-contract';

export const darkTheme = defineTheme({
  semanticTokens: {
    colors: {
      link: {
        value: '{colors.blue.200}',
      },
      information: {
        error: { value: '{colors.red.200}' },
        success: { value: '{colors.green.100}' },
        warning: { value: '{colors.orange.100}' },
      },
      grayscale: {
        bgLightGrey: { value: '{colors.gray.100}' },
        spacerLight: { value: '{colors.gray.200}' },
        spacer: { value: '{colors.gray.300}' },
        disabled: { value: '{colors.gray.400}' },
        border: { value: '{colors.gray.500}' },
        hintText: { value: '{colors.gray.600}' },
      },
    },
  },
  tokens: {
    colors: {
      black: {
        DEFAULT: { value: '#1A141F' },
      },
      gray: {
        100: { value: '#F5F3F7' },
        200: { value: '#E5E0EB' },
        300: { value: '#D9D1E0' },
        400: { value: '#D4D2D5' },
        500: { value: '#ABA7AF' },
        600: { value: '#4B3A5A' },
      },
      blue: {
        100: { value: '#1A15D3' },
        200: { value: '#0F0BAB' },
        300: { value: '#0F0C9E' },
      },
      purple: {
        100: { value: '#AE60EB' },
        200: { value: '#9D3FE7' },
        300: { value: '#6A17AB' },
        400: { value: '#602093' },
      },
      red: {
        100: { value: '#E8A1B6' },
        200: { value: '#D51A52' },
      },
      orange: {
        100: { value: '#FF9500' },
      },
      green: {
        100: { value: '#00B998' },
      },
      yellow: {
        100: { value: '#FFE600' },
      },
      white: {
        DEFAULT: { value: '#FFFFFF' },
      },
    },
    gradients: {
      purple: {
        value:
          'linear-gradient(159.13deg, theme(colors.purple.100) -24.13%, theme(colors.purple.200) 132.21%)',
      },
    },
  },
});
