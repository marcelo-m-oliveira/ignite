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
  img {
    top: -20px;
    position: relative;

    width: 120px;
    height: 120px;
  }
`

export const CoffeeListCard = styled.div`
  width: 256px;
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem;
  margin: 0 2rem;
  margin-bottom: 3rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    top: -20px;
    position: relative;

    width: 120px;
    height: 120px;
  }
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
`
export const CoffeeListTitle = styled.header``
export const CoffeeListAmount = styled.header``
export const CoffeeListAmountButton = styled.header``
export const CoffeeCount = styled.input``
