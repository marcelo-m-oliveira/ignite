import { MagnifyingGlass } from 'phosphor-react'
import { ShearchFormContainer } from './styles'

export function ShearchForm() {
  return (
    <ShearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </ShearchFormContainer>
  )
}
