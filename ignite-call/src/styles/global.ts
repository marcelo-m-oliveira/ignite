import { Button, globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,

    button: {
      '&:not(:disabled):hover': {
        transition: 'background 0.2s',
      },
    },

    [`${Button}`]: {
      '&:not(:disabled):hover': {
        transition: 'background 0.2s',
      },
    },
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
