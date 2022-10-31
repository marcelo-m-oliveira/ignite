import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0 1.5rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const CartItemTitleContainer = styled.div`
  height: 100%;

  display: flex;
  gap: 1.25rem;
  align-items: center;
  max-height: 4rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    margin-bottom: 0.25rem;
  }
`

export const CartItemTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CartItemTitleQuantity = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    gap: 4px;

    border: none;
    border-radius: 6px;

    background: ${(props) => props.theme['base-button']};
    cursor: pointer;

    span {
      margin: 0;
      text-transform: uppercase;
      font-size: 0.75rem;
    }

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
