import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutForm,
  PaymentContainer,
  PaymentTitle,
  PaymentButtonsContainer,
  CartItensCheckoutContainer,
  CartItemsSummary,
  TotalSummaryContainer,
  TotalSummaryLabels,
} from './styles'

import { CartContext } from '../../context/cartContext'

import { Button } from '../Home/Components/CoffeeItem/Components/Button'
import { Input } from '../Home/Components/CoffeeItem/Components/Input'

export interface CartItemsProps {
  id: number
  imgUrl: string
  title: string
  price: number
  quantity: number
}

const AdressFormValidationSchema = zod.object({
  zipCode: zod
    .number({ required_error: 'Esse campo precisa ser preenchido' })
    .min(8, 'CEP inválido'),
  road: zod
    .string({ required_error: 'Esse campo precisa ser preenchido' })
    .min(5),
  number: zod
    .number({ required_error: 'Esse campo precisa ser preenchido' })
    .min(1, 'Adicione um número válido'),
  district: zod.string({ required_error: 'Esse campo precisa ser preenchido' }),
  complement: zod.string(),
  city: zod.string({ required_error: 'Esse campo precisa ser preenchido' }),
  state: zod
    .string({ required_error: 'Esse campo precisa ser preenchido' })
    .max(2),
})

export type AdressFormData = zod.infer<typeof AdressFormValidationSchema>

export function Checkout() {
  const [isActive, setIsActive] = useState([false, false, false])
  const { cart, setCheckout } = useContext(CartContext)

  const addressForm = useForm<AdressFormData>({
    resolver: zodResolver(AdressFormValidationSchema),
    defaultValues: {
      road: '',
      district: '',
      complement: '',
      city: '',
      state: '',
    },
  })

  function handlePaymentSelection(event: EventTarget & HTMLButtonElement) {
    const isActiveButton = !event.getAttribute('isActive')

    switch (event.value) {
      case 'one':
        return setIsActive([isActiveButton, false, false])
      case 'two':
        return setIsActive([false, isActiveButton, false])
      case 'three':
        return setIsActive([false, false, isActiveButton])
      default:
        return setIsActive([false, false, false])
    }
  }

  const navigate = useNavigate()

  function handleSubmitOrder(data: AdressFormData) {
    let metodPayment

    if (isActive[0] === true) {
      metodPayment = 'cartão de crédito'
    } else if (isActive[1] === true) {
      metodPayment = 'cartão de débito'
    } else if (isActive[2] === true) {
      metodPayment = 'dinheiro'
    }

    if (cart.length > 0 && metodPayment) {
      navigate('/finish')

      const order = {
        ...data,
        payment: metodPayment,
      }

      setCheckout(order)
    } else {
      alert(
        cart.length === 0
          ? 'Seu carrinho está vazio'
          : 'Selecione um método de pagamento',
      )
    }
  }

  const { handleSubmit, register } = addressForm

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitOrder)}>
      <CheckoutFormContainer>
        <h1>Complete seu pedido</h1>
        <CheckoutForm>
          <div>
            <MapPinLine size={25} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <Input
            className="width-2"
            type="number"
            placeholder="CEP"
            required
            id="zipCode"
            {...register('zipCode', { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Rua"
            required
            id="road"
            {...register('road')}
          />
          <Input
            className="width-2"
            type="number"
            placeholder="Número"
            required
            id="number"
            {...register('number', { valueAsNumber: true })}
          />
          <Input
            className="width-4"
            type="text"
            placeholder="Complemento"
            id="complement"
            {...register('complement')}
          />
          <Input
            className="width-2"
            type="text"
            placeholder="Bairro"
            required
            id="district"
            {...register('district')}
          />
          <Input
            className="width-3"
            type="text"
            placeholder="Cidade"
            required
            id="city"
            {...register('city')}
          />
          <Input
            className="width-1"
            type="text"
            placeholder="UF"
            required
            id="state"
            {...register('state')}
          />
        </CheckoutForm>
        <PaymentContainer>
          <PaymentTitle>
            <CurrencyDollar size={25} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentTitle>
          <PaymentButtonsContainer>
            <Button
              type="button"
              onClick={(target) => handlePaymentSelection(target.currentTarget)}
              value="one"
              isActive={isActive[0]}
            >
              <CreditCard size={18} />
              <span>Cartão de crédito</span>
            </Button>
            <Button
              type="button"
              onClick={(target) => handlePaymentSelection(target.currentTarget)}
              value="two"
              isActive={isActive[1]}
            >
              <Bank size={18} />
              <span>cartão de débito</span>
            </Button>
            <Button
              type="button"
              onClick={(target) => handlePaymentSelection(target.currentTarget)}
              value="three"
              isActive={isActive[2]}
            >
              <Money size={18} />
              <span>dinheiro</span>
            </Button>
          </PaymentButtonsContainer>
        </PaymentContainer>
        <CartItensCheckoutContainer>
          <CartItemsSummary>
            <TotalSummaryContainer>
              <TotalSummaryLabels></TotalSummaryLabels>
            </TotalSummaryContainer>
          </CartItemsSummary>
        </CartItensCheckoutContainer>
      </CheckoutFormContainer>
    </CheckoutContainer>
  )
}
