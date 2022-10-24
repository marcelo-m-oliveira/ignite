import styled from 'styled-components'
import { ButtonProps } from './index'

export const ButtonBase = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme.purple};
  }

  border: ${(props) =>
    props.isActive ? `1px solid ${props.theme['purple-dark']}` : ''};
  background: ${(props) =>
    props.isActive ? props.theme['purple-light'] : props.theme['base-button']};

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-light']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
