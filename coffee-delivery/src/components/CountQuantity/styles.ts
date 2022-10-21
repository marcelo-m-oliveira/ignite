import styled from 'styled-components'

export const NumberInput = styled.div`
  height: 100%;
  max-height: 2.375rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  font-size: 1.2rem;

  div {
    padding: 0.25rem;
  }

  button {
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-dark']};
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`
