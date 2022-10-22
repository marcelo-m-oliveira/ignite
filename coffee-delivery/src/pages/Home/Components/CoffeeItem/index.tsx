import React, { useContext, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { CountQuantity } from '../../../../components/CountQuantity/index'

import { CartContext } from '../../../../context/cartContext'

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
  const [quantity, setQuantity] = useState(1)

  const { cart, addItemToCart } = useContext(CartContext)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const coffee = {
      id,
      imgUrl,
      labels,
      title,
      subtitle,
      price,
      quantity,
    }

    addItemToCart(coffee)
  }

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
          R${' '}
          <span>
            {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </span>
        <CoffeeForm onSubmit={handleSubmit}>
          <CountQuantity quantity={quantity} setQuantity={setQuantity} />
          <CardButton type="submit">
            <ShoppingCart size={22} weight="fill" />
          </CardButton>
        </CoffeeForm>
      </CoffeeFormContainer>
    </CoffeeItemContainer>
  )
}
