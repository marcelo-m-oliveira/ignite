import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['purple-500']};
      }

      &.active {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`

export const NavLogo = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 0 0 0;

    font-size: 1.55rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};

    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
