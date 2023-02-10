import { Bank, CreditCard, Money } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Content, PaymentOption } from './style'

export function PaymentSelection() {
  const { updatePaymentMethod, paymentMethod } = useContext(CartContext)

  return (
    <Content>
      <PaymentOption
        className={paymentMethod === 'credit-card' ? 'selected' : ''}
        onClick={() => updatePaymentMethod('credit-card')}
      >
        <CreditCard size={16} />
        Cartão de Crédito
      </PaymentOption>

      <PaymentOption
        className={paymentMethod === 'debit-card' ? 'selected' : ''}
        onClick={() => updatePaymentMethod('debit-card')}
      >
        <Bank size={16} />
        Cartão de Débito
      </PaymentOption>

      <PaymentOption
        className={paymentMethod === 'money' ? 'selected' : ''}
        onClick={() => updatePaymentMethod('money')}
      >
        <Money size={16} /> Dinheiro
      </PaymentOption>
    </Content>
  )
}
