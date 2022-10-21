import { useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { CountQuantity } from '../../../../components/CountQuantity/index'

import {
  CoffeeItemContainer,
  CoffeeLabelContainer,
  CoffeeDescription,
  CoffeeLabel,
  CoffeeFormContainer,
  CoffeeForm,
  CardButton,
} from './styles'

interface CoffeeItemProps {
  coffee: {
    id: string
    imgUrl: string
    labels: string[]
    title: string
    subtitle: string
    price: number
  }
}

export function CoffeeItem({
  coffee: { id, imgUrl, labels, title, subtitle, price },
}: CoffeeItemProps) {
  const [count, setCount] = useState(1)

  return (
    <CoffeeItemContainer>
      <img src={imgUrl} alt="" />

      <CoffeeLabelContainer>
        {labels.map((label) => {
          return <CoffeeLabel key={label}>{label}</CoffeeLabel>
        })}
      </CoffeeLabelContainer>
      <CoffeeDescription>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </CoffeeDescription>
      <CoffeeFormContainer>
        <span>
          R$<span>{price}</span>
        </span>
        <CoffeeForm>
          <CountQuantity quantity={count} setQuantity={setCount} />
          <CardButton type="submit">
            <ShoppingCart size={22} weight="fill" />
          </CardButton>
        </CoffeeForm>
      </CoffeeFormContainer>
    </CoffeeItemContainer>
  )
}
