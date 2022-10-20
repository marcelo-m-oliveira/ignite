import styled from 'styled-components'
import background from '../../../assets/Background.svg'

export const IntroContainer = styled.main`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  height: 34rem;
  padding: 5.75rem 10rem;
  gap: 3.5rem;

  background-image: url(${background});

  cursor: default;
  img {
    height: 22.5rem;
  }
`
export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.header`
  width: 55rem;
  line-height: 1.3;

  p {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    padding-bottom: 1rem;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const ItensContainer = styled.div`
  padding-top: 4.125rem;
  display: flex;
  gap: 2.5rem;
`

const BaseItens = styled.div`
  color: ${(props) => props.theme['base-text']};
  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 100%;
      color: ${(props) => props.theme.white};
    }
  }

  p:first-child {
    padding: 0 0 1.25rem 0;
  }
`

export const ItensColumn1 = styled(BaseItens)`
  p:first-child {
    svg {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  svg {
    background: ${(props) => props.theme.yellow};
  }
`
export const ItensColumn2 = styled(BaseItens)`
  p:first-child {
    svg {
      background: ${(props) => props.theme['base-text']};
    }
  }

  svg {
    background: ${(props) => props.theme.purple};
  }
`
