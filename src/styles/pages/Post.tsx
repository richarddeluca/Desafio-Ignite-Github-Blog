import { styled } from "..";

export const PostPageContainer = styled('main', {
  position: 'relative',
  margin: '-4.5rem auto 0',

  maxWidth: '54rem'
})

export const PostInfo = styled('section', {
  position: 'relative',

  padding: '2rem 2rem 2rem 2.5rem',

  borderRadius: '10px',

  backgroundColor: '$baseProfile',
  header: {
    display: 'flex',
    justifyContent: 'space-between',

    a: {
      display: 'flex',
      gap: '.5rem',

      color: '$blue',

      fontSize: '.75rem',
      fontWeight: '$bold',
      textDecoration: 'none',
    },
  },

  h2: {
    fontSize: '1.5rem',
    color: '$BaseTitle',
    marginTop: '1.25rem',
    marginBottom: '.5rem',
  },

  '.info': {
    display: 'flex',
    gap: '2rem',

    div: {
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center'
    },

    svg: {
      width: '1.125rem',
      height: '1.125rem',
      color: '$baseLabel'
    }


  },
})

export const Content = styled('section', {
  padding: '2.5rem 2rem',
  img: {
    objectFit: 'cover'
  },

  pre: {
    padding: '1rem',

  }
})