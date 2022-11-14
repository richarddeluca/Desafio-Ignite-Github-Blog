import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  position: "relative",
  display: 'flex',
  width: '100%',
  height: '18.5rem',

  alignItems: "baseline",
  justifyContent: 'center',

  backgroundColor: "$baseProfile",

  overflow: 'hidden',

  '.effectRight': {
    position: 'absolute',
    top: '30px',
    right: '2px',
  },

  '.effectLeft': {
    position: 'absolute',
    top: '70px',
    left: '0px',
  },

  '.lightRight': {
    position: 'absolute',
    top: '-2rem',
    right: '.5rem',

    width: '10rem',
    height: '10rem',

    background: '#14589C',
    filter: 'blur(184px)',
    borderRadius: "50%",

  },
  '.lightLeft': {
    position: 'absolute',
    top: '-6rem',
    left: '-8rem',

    width: '14.75rem',
    height: '14.75rem',

    background: '#14589C',
    filter: 'blur(200px)',
    borderRadius: "50%",

  },

  '.rectangle': {
    position: 'absolute',
    margin: '0 auto',

    bottom: '10px',

    width: '891px',
    height: '52px',
    background: '#14589C',
    filter: 'blur(106px)',

  }

})

export const LogoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',

  color: "$blue",

})