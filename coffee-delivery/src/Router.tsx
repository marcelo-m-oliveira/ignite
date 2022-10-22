import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Checkout } from './pages/Checkout/index'
import { Home } from './pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  )
}
