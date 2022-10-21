import { useState } from 'react'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { v4 as uuid } from 'uuid'

import {
  HomeContainer,
  IntroSection,
  IntroContainer,
  IntroTitleContainer,
  IntroItensContainer,
  IntroItems,
  CoffeeContainer,
  ButtonFilter,
  CoffeeList,
} from './styles'

import ImgCoffee from '../../assets/bg.svg'

import { CoffeeItem } from './Components/CoffeeItem'
import { coffees } from '../../server/data'

const id = uuid()

export interface CoffeeProps {
  id: string
  imgUrl: string
  labels: string[]
  title: string
  subtitle: string
  price: number
}

interface FilterButtonsProps {
  id: string
  title: string
  isActive: boolean
}

const initialState = [
  {
    id,
    title: 'todos',
    isActive: true,
  },
  {
    id,
    title: 'Tradicional',
    isActive: false,
  },
  {
    id,
    title: 'especial',
    isActive: false,
  },
  {
    id,
    title: 'com leite',
    isActive: false,
  },
  {
    id,
    title: 'alcoólico',
    isActive: false,
  },
  {
    id,
    title: 'gelado',
    isActive: false,
  },
]

export function Home() {
  const [filtersButton, setFilterButton] =
    useState<FilterButtonsProps[]>(initialState)
  const [filters, setFilters] = useState<string[]>([])

  return (
    <HomeContainer>
      <IntroSection>
        <IntroContainer>
          <IntroTitleContainer>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>
            <IntroItensContainer>
              <div>
                <IntroItems itemsColor="yellowDark">
                  <ShoppingCart size={17} weight="fill" />
                </IntroItems>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <IntroItems itemsColor="baseText">
                  <Package size={17} weight="fill" />
                </IntroItems>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <IntroItems itemsColor="yellow">
                  <Timer size={17} weight="fill" />
                </IntroItems>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <IntroItems itemsColor="purple">
                  <Coffee size={17} weight="fill" />
                </IntroItems>
                <span>O café chega fresquinho até você</span>
              </div>
            </IntroItensContainer>
          </IntroTitleContainer>
          <img src={ImgCoffee} alt="" />
        </IntroContainer>
      </IntroSection>
      <CoffeeContainer>
        <header>
          <h1>Nossos Cafés</h1>
          <nav>
            {filtersButton.map((filter) => (
              <ButtonFilter
                key={filter.id}
                data-id={filter.id}
                isSelected={filter.isActive}
              >
                {filter.title.toUpperCase()}
              </ButtonFilter>
            ))}
          </nav>
        </header>
        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeItem key={coffee.id} coffee={coffee} />
          })}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
