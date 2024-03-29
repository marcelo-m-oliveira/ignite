import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1100,
  margin: '0 auto',

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@bp1': {
    maxWidth: 250,
    height: 300,

    img: {
      objectFit: 'cover',
      height: 300,
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',

    '@bp1': {
      fontSize: '$xl',
    },
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$purple300',

    '@bp1': {
      fontSize: '$xl',
    },
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    textAlign: 'justify',
  },

  button: {
    marginTop: 'auto',
    background: '$purple500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:not(:disabled):hover': {
      background: '$purple300',
      transition: 'background-color 0.2s',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '@bp1': {
      marginTop: '2.5rem',
    },
  },
})
