import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { Input } from '../../components/Form/input'

import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutForm,
  PaymentContainer,
  PaymentTitle,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer action="">
      <CheckoutFormContainer>
        <h1>Complete seu pedido</h1>
        <CheckoutForm>
          <div>
            <MapPinLine size={32} />
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
          />
          <Input type="text" placeholder="Rua" required id="road" />
          <Input
            className="width-2"
            type="number"
            placeholder="Número"
            required
            id="number"
          />
          <Input
            className="width-4"
            type="text"
            placeholder="Complemento"
            id="complement"
          />
          <Input
            className="width-2"
            type="text"
            placeholder="Bairro"
            required
            id="district"
          />
          <Input
            className="width-3"
            type="text"
            placeholder="Cidade"
            required
            id="city"
          />
          <Input
            className="width-1"
            type="text"
            placeholder="UF"
            required
            id="state"
          />
        </CheckoutForm>
        <PaymentContainer>
          <PaymentTitle>
            <CurrencyDollar size={32} />

            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentTitle>
        </PaymentContainer>
      </CheckoutFormContainer>
    </CheckoutContainer>
  )
}
