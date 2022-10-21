import { Minus, Plus } from 'phosphor-react'
import React from 'react'

import { NumberInput } from './styles'

interface CountQuantityProps {
  quantity: number
  setQuantity: (value: number) => void
}

export function CountQuantity({ quantity, setQuantity }: CountQuantityProps) {
  function handleCounterCoffee(count: React.FormEvent<HTMLButtonElement>) {
    count.preventDefault()
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }

  function handleCounterSubtractCoffee(
    count: React.FormEvent<HTMLButtonElement>,
  ) {
    count.preventDefault()
    if (quantity > 0) {
      count.preventDefault()
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
    }
  }

  return (
    <NumberInput>
      <button onClick={handleCounterSubtractCoffee}>
        <Minus size={16} weight="fill" />
      </button>
      <div>{quantity}</div>
      <button onClick={handleCounterCoffee}>
        <Plus size={16} weight="fill" />
      </button>
    </NumberInput>
  )
}
