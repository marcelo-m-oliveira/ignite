import styled from 'styled-components'

export const CoffeeMain = styled.main`
  padding: 5.75rem 10rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    padding-bottom: 3.375rem;
  }
`

export const CoffeeListContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CoffeeListCard = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  margin: 0 0 2.5rem 0;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    margin: -20px 0 0 0;
    position: relative;

    width: 7.5rem;
    height: 7.5rem;
  }

  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
`
export const CoffeeListTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    margin: 0.75rem 0 1rem 0;
    font-weight: bold;
    font-size: 14px;
    border-radius: 15px;
    text-transform: uppercase;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0 0 0.5rem 0;
    font-weight: bold;
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
  }

  span {
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.9375rem;
    margin-bottom: 1.9375rem;
  }
`

export const CoffeeListAmount = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 24px 1.25rem 24px;
  gap: 22px;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    margin-bottom: 0;

    span {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
    }
  }
`

export const CoffeeForm = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CoffeeCount = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  div {
    padding: 0.25rem;
  }
`

export const CoffeeListAmountButton = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.white};
  }
`
