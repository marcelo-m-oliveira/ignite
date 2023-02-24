import { Header } from '../../components/Header'
import { Summary } from './../../components/Summary/index'
import { ShearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <ShearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>24/02/2023</td>
            </tr>
            <tr>
              <td width="50%">Cartão de crédito</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
              </td>
              <td>Outros</td>
              <td>01/03/2023</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>25/03/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
