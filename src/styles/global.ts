import { globalCss } from ".";

export const globalStyles = globalCss({
  ':root': {
    display: 'grid',
    alignItems: 'center'
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$baseBackground',
    color: '$baseText',
    'webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
  },
  a: {
    textDecoration: 'none',
    '&:link': {
      color: '$blue'
    },

    '&:visited': {
      color: '$visited'
    }
  }
})