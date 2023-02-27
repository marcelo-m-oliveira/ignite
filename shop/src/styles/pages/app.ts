import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  a: {
    fontSize: '$lg',
    color: '$purple500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$purple300',
      transition: 'color 0.2s',
    },

    '@bp1': {
      fontSize: '$md',
    },
  },
})
