import { styled } from "..";

export const HomeContainer = styled('main', {
  position: 'relative',
  margin: '-4.5rem auto 0',

  maxWidth: '54rem'
})

export const Profile = styled('section', {
  position: 'relative',
  display: "grid",
  gridTemplateColumns: "10rem 1fr",
  gap: '2rem',

  padding: '2rem 2rem 2rem 2.5rem',

  borderRadius: '10px',

  backgroundColor: '$baseProfile',

  '.avatar': {
    borderRadius: '8px',
    width: '148px',
    height: '148px'
  },

  h2: {
    fontSize: '1.5rem',
    color: '$BaseTitle',
    marginTop: '.5rem',
  },

  '.bioText': {
    color: '$baseText',
    lineHeight: '1.5rem',

    marginTop: '.5rem',
    marginBottom: '1.5rem'
  },

  '.info': {
    display: 'flex',
    gap: '1.5rem',

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

  '.githubLink': {
    position: 'absolute',
    right: '2rem',
    top: '2rem',

    display: 'flex',
    gap: '.5rem',

    color: '$blue',

    fontSize: '.75rem',
    fontWeight: '$bold',
    textDecoration: 'none'

  },
})

export const PublicationsSection = styled('form', {
  marginTop: '4.5rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '.75rem ',
    h3: {
      fontSize: '1.125rem',
      color: '$baseSubtitle'
    },

    '.numberOfPublications': {
      fontSize: '.875rem',
      color: '$baseSpan'
    },

  },

  '.searchInput': {
    width: '100%',
    height: '3.125rem',
    marginBottom: '3rem',

    padding: '.75rem 1rem',

    backgroundColor: '$baseInput',
    color: '$baseLabel',
    border: '1px solid $baseBorder',

    fontSize: '1rem',
    '&:focus': {
      border: '1px solid $blue',
      outline: 'none'

    }
  }
})

export const Post = styled('a', {
  textDecoration: 'none',

  width: '416px',
  height: '260px',
  padding: '2rem',

  flex: '0 0 auto',
  borderRadius: '10px',

  backgroundColor: '$basePost',

  header: {
    display: 'grid',
    gridTemplateColumns: '16rem 1fr',
    gap: '.5rem',
    justifyContent: 'space-between',

    h4: {
      color: '$baseTitle',
      fontSize: '1.125rem',
      // lineHeight: '160%',
      fontWeight: '$bold',
    },

    '.date': {
      color: '$baseSpan',
      fontSize: '.875rem',
      textAlign: 'right',
    },

  },

  p: {
    color: '$baseText',
    lineHeight: '160%',
  },

  '&:hover': {
    outline: '2px solid $baseLabel'
  }
})

export const PostsContainer = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',


})