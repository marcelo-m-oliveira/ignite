import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  position: fixed;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  background: ${(props) => props.theme.background};

  img {
    padding: 5px;
  }
`
const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  line-height: 1.3;
  font-size: 16px;
`

export const ButtonLocal = styled(BaseButton)`
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
`

export const ButtonShoppingCart = styled(BaseButton)`
  cursor: pointer;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  span {
    height: 1.25rem;
    width: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: absolute;
    border-radius: 100%;

    margin: -35px 0 0px 18px;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-weight: bold;
    font-size: 0.85rem;
  }
`
