import {
  CoffeeMain,
  CoffeeListCard,
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeListAmount,
  CoffeeListAmountButton,
  CoffeeCount,
} from './styles'

import coffeeTradicional from '../../../../public/CoffeeImages/expresso.svg'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeList() {
  return (
    <CoffeeMain>
      <h1>Nossos cafés</h1>
      <CoffeeListContainer>
        <CoffeeListCard>
          <img src={coffeeTradicional} alt="" />

          <CoffeeListTitle>
            <p>TRADICIONAL</p>
            <h2>Expresso Tradicional</h2>
            <span>O tradicional café feito com água quente e grãos moídos</span>
          </CoffeeListTitle>
          <CoffeeListAmount>
            <h3>R$ 9,90</h3>
            <CoffeeListAmountButton>
              <CoffeeCount type="number" placeholder="1" value={1} />
              <ShoppingCart weight="fill" size={22} />
            </CoffeeListAmountButton>
          </CoffeeListAmount>
        </CoffeeListCard>
      </CoffeeListContainer>
    </CoffeeMain>
  )
}
