import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  SummaryButton,
} from './styles'

import { CartContext } from '../../context/cartContext'

import { CartItems } from './Components/CartItems'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

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

const delivery = 3.5

export type AdressFormData = zod.infer<typeof AdressFormValidationSchema>

export function Checkout() {
  const [isActive, setIsActive] = useState([false, false, false])
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)

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

  useEffect(() => {
    const totalItems = cart.reduce((acum, cur) => {
      return acum + cur.price * cur.quantity
    }, 0)

    setTotalItemsPrice(totalItems)
  }, [cart])

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

    if (isActive[0]) {
      metodPayment = 'cartão de crédito'
    } else if (isActive[1]) {
      metodPayment = 'cartão de débito'
    } else if (isActive[2]) {
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
  const finalPrice = totalItemsPrice + delivery

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
      </CheckoutFormContainer>
      <CartItensCheckoutContainer>
        <h1>Cafés Selecionados</h1>
        <CartItemsSummary>
          {cart.length > 0 ? (
            cart.map((coffee) => {
              return <CartItems key={coffee.title} coffee={coffee} />
            })
          ) : (
            <h3>Não há itens no carrinho</h3>
          )}
          <TotalSummaryContainer>
            <TotalSummaryLabels>
              <span>Total de Itens</span>
              <span>
                R${' '}
                {totalItemsPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </TotalSummaryLabels>
            <TotalSummaryLabels>
              <span>Entrega</span>
              <span>
                R${' '}
                {delivery.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </TotalSummaryLabels>
            <TotalSummaryLabels>
              <h1>Total</h1>
              <h1>
                R${' '}
                {finalPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </h1>
            </TotalSummaryLabels>
          </TotalSummaryContainer>
          <SummaryButton type="submit">Confirar Pedido</SummaryButton>
        </CartItemsSummary>
      </CartItensCheckoutContainer>
    </CheckoutContainer>
  )
}
