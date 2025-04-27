import { defineThemeContract } from '@pandacss/dev';
import * as types from '@pandacss/types';

export const defineTheme = defineThemeContract({
  semanticTokens: {
    colors: {
      link: {
        value: '',
      },
      information: {
        error: { value: '' },
        success: { value: '' },
        warning: { value: '' },
      },
      grayscale: {
        bgLightGrey: { value: '' },
        spacerLight: { value: '' },
        spacer: { value: '' },
        disabled: { value: '' },
        border: { value: '' },
        hintText: { value: '' },
      },
    },
  },
  tokens: {
    colors: {
      black: {
        DEFAULT: { value: '' },
      },
      gray: {
        100: { value: '' },
        200: { value: '' },
        300: { value: '' },
        400: { value: '' },
        500: { value: '' },
        600: { value: '' },
      },
      blue: {
        100: { value: '' },
        200: { value: '' },
        300: { value: '' },
      },
      purple: {
        100: { value: '' },
        200: { value: '' },
        300: { value: '' },
        400: { value: '' },
      },
      red: {
        100: { value: '' },
        200: { value: '' },
      },
      orange: {
        100: { value: '' },
      },
      green: {
        100: { value: '' },
      },
      yellow: {
        100: { value: '' },
      },
      white: {
        DEFAULT: { value: '' },
      },
    },
    gradients: {
      purple: {
        value: '',
      },
    },
  },
});
