import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  IntroContainer,
  HeaderContainer,
  ItensContainer,
  IntroSection,
  ItensColumn1,
  ItensColumn2,
} from './styles'
import ImgCoffee from '../../../assets/bg.svg'

export function Intro() {
  return (
    <IntroContainer>
      <IntroSection>
        <HeaderContainer>
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </HeaderContainer>
        <ItensContainer>
          <ItensColumn1>
            <p>
              <ShoppingCart weight="fill" size={16} /> Compra simples e segura
            </p>
            <p>
              <Timer weight="fill" size={16} /> Entrega rápida e rastreada
            </p>
          </ItensColumn1>
          <ItensColumn2>
            <p>
              <Package weight="fill" size={16} /> Embalagem mantém o café
              intacto
            </p>
            <p>
              <Coffee weight="fill" size={16} /> O café chega fresquinho até
              você
            </p>
          </ItensColumn2>
        </ItensContainer>
      </IntroSection>
      <img src={ImgCoffee} alt="" />
    </IntroContainer>
  )
}
