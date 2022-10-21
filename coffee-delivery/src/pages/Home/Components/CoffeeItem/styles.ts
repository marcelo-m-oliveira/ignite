import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem;
  margin: 0 2rem;
  margin-bottom: 3rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  box-shadow: 0 1px 1px -3px rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 2px rgba(0, 0, 0, 0.12);

  img {
    top: -20px;
    position: relative;

    width: 7.5rem;
    height: 7.5rem;
  }

  label {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
`

export const CoffeeLabelContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CoffeeLabel = styled.label`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 15px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  text-align: center;

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.8875rem;
  }
`

export const CoffeeFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;

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

export const CoffeeForm = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  border: 0;
  border-radius: 6px;
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
