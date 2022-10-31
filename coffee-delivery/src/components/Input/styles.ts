import styled from 'styled-components'

export const InputBase = styled.input`
  padding: 0.75rem;
  border: none;
  width: 100%;
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.3;
  }

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
`
