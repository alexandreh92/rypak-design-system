import { definePreset } from '@pandacss/dev';
import { darkTheme } from './dark-theme';

export const defaultPreset = definePreset({
  name: 'rypak-default-preset',
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  themes: {
    dark: { ...darkTheme },
  },
  theme: {
    extend: {
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
        fonts: {
          default: { value: 'Poppins, sans-serif' },
        },
        fontWeights: {
          bold: { value: '700' },
          'semi-bold': { value: '600' },
          medium: { value: '500' },
          regular: { value: '400' },
          light: { value: '300' },
        },
      },
      textStyles: {
        h1: {
          description: 'Heading 1',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.medium}',
            fontSize: '44px',
            lineHeight: '128%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'h1.tablet': {
          description: 'Heading 1 - Tablet',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.medium}',
            fontSize: '32px',
            lineHeight: '124%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'h1.mobile': {
          description: 'Heading 1 - Mobile',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.semi-bold}',
            fontSize: '29px',
            lineHeight: '124%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        h2: {
          description: 'Heading 2',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.medium}',
            fontSize: '30px',
            lineHeight: '120%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'h2.tablet': {
          description: 'Heading 2 - Tablet',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.medium}',
            fontSize: '24px',
            lineHeight: '128%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'h2.mobile': {
          description: 'Heading 2 - Mobile',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.semi-bold}',
            fontSize: '22px',
            lineHeight: '128%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        h3: {
          description: 'Heading 3',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.semi-bold}',
            fontSize: '22px',
            lineHeight: '124%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'h3.mobile': {
          description: 'Heading 3 - Mobile',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.semi-bold}',
            fontSize: '19px',
            lineHeight: '128%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        h4: {
          description: 'Heading 4',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.bold}',
            fontSize: '18px',
            lineHeight: '132%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'h4.mobile': {
          description: 'Heading 4 - Mobile',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.bold}',
            fontSize: '16px',
            lineHeight: '128%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'paragraph-lg': {
          description: 'Paragraph - Large',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.regular}',
            fontSize: '22px',
            lineHeight: '144%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'paragraph-md': {
          description: 'Paragraph - Medium',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.regular}',
            fontSize: '18px',
            lineHeight: '132%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'paragraph-sm': {
          description: 'Paragraph - Small',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.regular}',
            fontSize: '16px',
            lineHeight: '148%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
        'paragraph-xs': {
          description: 'Paragraph - Extra Small',
          value: {
            fontFamily: '{fonts.default}',
            fontWeight: '{fontWeights.regular}',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
          },
        },
      },
    },
  },
});
