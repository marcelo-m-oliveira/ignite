import styled from 'styled-components'
import background from '../../assets/Background.svg'

export const HomeContainer = styled.main`
  margin-top: 6.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const IntroSection = styled.section`
  width: 100%;
  height: 34rem;
  padding: 5.75rem 10rem;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  cursor: default;

  img {
    height: 22.5rem;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IntroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  div {
    display: flex;
    flex-direction: column;
    max-width: 55rem;
    line-height: 1.3;
    gap: 1rem;
  }

  span {
    font-size: 1.25rem;
  }
`

export const IntroItensContainer = styled.div`
  display: grid !important;
  grid-template-columns: 15rem 18.3rem;
  row-gap: 1.25rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.white};
    }

    span {
      font-size: 1rem;
    }
  }
`

const itensBackground = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface IntroItensProps {
  itemsColor: keyof typeof itensBackground
}

export const IntroItems = styled.p<IntroItensProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme[itensBackground[props.itemsColor]]};
  border-radius: 100%;
  padding: 0.3125rem;
`

export const CoffeeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.725rem;
  padding: 5.75rem 10rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  cursor: default;
`

interface SelectedFiltersProps {
  isSelected: boolean
}

export const CoffeeList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ButtonFilter = styled.button<SelectedFiltersProps>`
  padding: 0.375rem 0.75rem;
  border: 2px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 1rem;

  font-weight: 700;
  color: ${(props) =>
    props.isSelected ? props.theme.background : props.theme['yellow-dark']};
  background: ${(props) =>
    props.isSelected ? props.theme['yellow-dark'] : props.theme.background};

  transition: background, color 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['yellow-light']};
  }
`
