import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefalutLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
