import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/logo.svg'

import { HeaderContainer, NavLogo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLogo>
        <NavLink to="/">
          <img src={logoIgnite} alt="" />
          <span>Pomodoro Timer</span>
        </NavLink>
      </NavLogo>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
