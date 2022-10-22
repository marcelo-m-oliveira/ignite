import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, ButtonLocal, ButtonShoppingCart } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'

import { CartContext } from '../../context/cartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    const itemsOnCart = cart.length

    setCartItems(itemsOnCart)
  }, [cart])

  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <ButtonLocal>
          <MapPin weight="fill" size={22} /> Salvador, BA
        </ButtonLocal>
        <NavLink to="/checkout" title="Coffee Delivery - Checkout">
          <ButtonShoppingCart>
            {cartItems > 0 && <span>{cartItems}</span>}
            <ShoppingCart weight="fill" size={22} />
          </ButtonShoppingCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
