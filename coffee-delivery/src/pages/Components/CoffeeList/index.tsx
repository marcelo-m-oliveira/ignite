import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import {
  CoffeeMain,
  CoffeeListCard,
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeListAmount,
  CoffeeListAmountButton,
  CoffeeCount,
  CoffeeForm,
} from './styles'

import coffeeTradicional from '../../../../public/CoffeeImages/expresso.svg'

export function CoffeeList() {
  return (
    <CoffeeMain>
      <h1>Nossos cafés</h1>
      <CoffeeListContainer>
        <CoffeeListCard>
          <img src={coffeeTradicional} alt="" />
          <CoffeeListTitle>
            <label>Tradicional</label>
            <p>Expresso Tradicional</p>
            <span>O tradicional café feito com água quente e grãos moídos</span>
          </CoffeeListTitle>
          <CoffeeListAmount>
            <span>
              R$ <span>9,90</span>
            </span>
            <CoffeeForm>
              <CoffeeCount>
                <Minus size={16} weight="fill" />
                <div>1</div>
                <Plus size={16} weight="fill" />
              </CoffeeCount>
              <CoffeeListAmountButton>
                <ShoppingCart weight="fill" size={22} />
              </CoffeeListAmountButton>
            </CoffeeForm>
          </CoffeeListAmount>
        </CoffeeListCard>
      </CoffeeListContainer>
    </CoffeeMain>
  )
}
