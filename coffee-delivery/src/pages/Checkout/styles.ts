import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  max-width: 90rem;
  margin: 6.8rem auto;
  padding: 5.75rem 10rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 2rem;
`

export const CheckoutFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.625rem;

  h1 {
    font-size: 1.25rem;
    margin: 0 0 0.9375rem 0;
  }
`

export const CheckoutForm = styled.div`
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2.5rem;
  margin-bottom: 0.75rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  box-shadow: 0 1px 1px -3px rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 2px rgba(0, 0, 0, 0.12);

  div {
    width: 100%;
    display: flex;

    gap: 0.5rem;
    margin-bottom: 1rem;

    div {
      flex-direction: column;
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .width-1 {
    width: 3.2rem;
  }
  .width-2 {
    width: 12.5rem;
  }

  .width-3 {
    width: 17.25rem;
  }

  .width-4 {
    width: 21.5rem;
  }
`

export const PaymentContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  box-shadow: 0 1px 1px -3px rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 2px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
`

export const PaymentTitle = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  div {
    flex-direction: column;
    gap: 0.5rem;
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
`

export const CartItensCheckoutContainer = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  gap: 0.625rem;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 0.9375rem;
  }
`

export const CartItemsSummary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  box-shadow: 0 1px 1px -3px rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 2px rgba(0, 0, 0, 0.12);
`

export const TotalSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TotalSummaryLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-bottom: 0;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SummaryButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme.yellow};

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
