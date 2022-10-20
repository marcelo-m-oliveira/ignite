import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header/index'
import { Home } from '../../pages/Home'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Home />
      <Outlet />
    </LayoutContainer>
  )
}
