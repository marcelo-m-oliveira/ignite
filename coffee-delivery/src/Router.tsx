import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Checkout } from './pages/Checkout/index'
import { Finish } from './pages/Finish/index'
import { Home } from './pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finish" element={<Finish />} />
      </Route>
    </Routes>
  )
}
