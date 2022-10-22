import React, { useEffect, useState } from 'react'

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
  const [coffee, setCoffee] = useState<CoffeeProps[]>([])
  const [filterButtons, setFilterButtons] =
    useState<FilterButtonsProps[]>(initialState)
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    const formattedFilters: string[] = []
    filters.map((filter) => {
      return formattedFilters.push('labes_like=' + filter)
    })
    async function getCoffees() {
      const c = coffees.map((coffees) => {
        return coffees
      })
      setCoffee(c)
    }

    getCoffees()
  }, [filters])

  function handleFiltering(event: React.MouseEvent | React.TouchEvent) {
    const button = event.target as HTMLElement

    const filterId = String(button.dataset.id)

    if (filterId === '') {
      setFilterButtons(initialState)
      setFilters([])
    } else {
      const changedFilterButtons = filterButtons.map((filter) => {
        if (filter.id === filterId) {
          const filterIsActive = filter.isActive
          return { ...filter, isActive: !filterIsActive }
        } else if (filter.id === '') {
          return { ...filter, isActive: false }
        } else {
          return { ...filter }
        }
      })
      const activatedValidation = changedFilterButtons.filter((e) => {
        return e.isActive === true
      })
      if (activatedValidation.length > 0) {
        setFilterButtons(changedFilterButtons)

        const newFilteredList = activatedValidation.map((active) => {
          return active.title.toLowerCase().replace(' ', '').replace('ó', 'o')
        })

        setFilters(newFilteredList)
      } else {
        setFilterButtons(initialState)
        setFilters([])
      }
    }
  }

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
            {filterButtons.map((filter) => (
              <ButtonFilter
                key={filter.title}
                data-id={filter.id}
                onClick={handleFiltering}
                isSelected={filter.isActive}
                value={filter.title.toUpperCase()}
              >
                {filter.title.toUpperCase()}
              </ButtonFilter>
            ))}
          </nav>
        </header>
        <CoffeeList>
          {coffee.map((coffee) => {
            return <CoffeeItem key={coffee.subtitle} coffee={coffee} />
          })}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
