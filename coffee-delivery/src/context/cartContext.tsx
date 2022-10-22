import { createContext, ReactNode, useState } from 'react'

interface Coffee {
  id: string
  imgUrl: string
  labels: string[]
  title: string
  subtitle: string
  price: number
  quantity: number
}

interface Checkout {
  zipCode: number
  road: string
  number: number
  complement?: string | undefined
  district: string
  city: string
  state: string
  payment: string
}

interface CartContextType {
  cart: Coffee[]
  checkout?: Checkout
  quantityItemChange: (id: string, quantity: number) => void
  removeItemToCart: (id: string) => void
  addItemToCart: (data: Coffee) => void
  setCheckout: (data: Checkout) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])
  const [checkout, setCheckout] = useState<Checkout>()

  function addItemToCart(data: Coffee) {
    const newItem = data

    setCart((state) => [...state, newItem])
  }

  function removeItemToCart(id: string) {
    const newItem = cart.filter((cartItem) => cartItem.id !== id)

    setCart(newItem)
  }

  function quantityItemChange(id: string, quantity: number) {
    const newItem = cart.map((cartItem) => {
      if (cartItem.id !== id) {
        return cartItem
      } else {
        return { ...cartItem, quantity }
      }
    })

    setCart(newItem)
  }
  console.log(cart)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemToCart,
        quantityItemChange,
        setCheckout,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
