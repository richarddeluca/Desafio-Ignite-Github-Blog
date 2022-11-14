import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      blue: '#3294F8',
      baseTitle: '#E7EDF4',
      baseSubtitle: '#C4D4E3',
      baseText: '#AFC2D4',
      baseSpan: '#7B96B2',
      baseLabel: '#3A536B',
      baseBorder: '#1C2F41',
      basePost: '#112131',
      baseProfile: '#0b1b2b',
      baseBackground: '#071422',
      baseInput: '#040f1a',
      visited: '#8264fb',
    },

    fontSizes: {
      f12: '0.75rem',
      f14: '0.875rem',
      f16: '1rem',
      f18: '1.125rem',
      f20: '1.25rem',
      f24: '1.5rem'
    },
    fontWeights: {
      regular: '400',
      bold: '700'
    }
  }
})