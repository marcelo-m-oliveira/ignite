import { InputHTMLAttributes } from 'react'
import { InputBase } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return <InputBase {...props} />
}
