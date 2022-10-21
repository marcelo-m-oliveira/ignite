import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/Logo.svg'

import { HeaderContainer, ButtonLocal, ButtonShoppingCart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <ButtonLocal>
          <MapPin weight="fill" size={22} /> Salvador, BA
        </ButtonLocal>
        <NavLink to="/history" title="Histórico">
          <ButtonShoppingCart>
            <ShoppingCart weight="fill" size={22} />
          </ButtonShoppingCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
