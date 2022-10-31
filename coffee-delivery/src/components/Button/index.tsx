import { ButtonHTMLAttributes } from 'react'
import { ButtonBase } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

export function Button(props: ButtonProps) {
  return <ButtonBase {...props} />
}
