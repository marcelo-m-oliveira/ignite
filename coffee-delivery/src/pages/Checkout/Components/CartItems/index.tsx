import { useContext, useEffect, useState } from 'react'

import { Trash } from 'phosphor-react'

import { CartContext } from '../../../../context/cartContext'

import { CountQuantity } from '../../../../components/CountQuantity'

import {
  CartItemContainer,
  CartItemTitleContainer,
  CartItemTitle,
  CartItemTitleInner,
  CartItemTitleQuantity,
} from './styles'

interface CartItemsProps {
  coffee: {
    id: string
    imgUrl: string
    title: string
    price: number
    quantity: number
  }
}

export function CartItems({
  coffee: { id, quantity, imgUrl, price, title },
}: CartItemsProps) {
  const { removeItemToCart, quantityItemChange } = useContext(CartContext)
  const [quantityItem, setQuantityItem] = useState(quantity)

  useEffect(() => {
    quantityItemChange(id, quantityItem)
  }, [id, quantityItem, quantityItemChange])

  return (
    <CartItemContainer>
      <CartItemTitleContainer>
        <img src={imgUrl} alt="" width={64} />
        <CartItemTitle>
          <CartItemTitleInner>
            <span>{title}</span>
            <CartItemTitleQuantity>
              <CountQuantity
                quantity={quantityItem}
                setQuantity={setQuantityItem}
              />
              <button onClick={() => removeItemToCart(id)}>
                <Trash size={16} />
                <span>Remover</span>
              </button>
            </CartItemTitleQuantity>
          </CartItemTitleInner>
        </CartItemTitle>
      </CartItemTitleContainer>
      <span>
        R${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
    </CartItemContainer>
  )
}
