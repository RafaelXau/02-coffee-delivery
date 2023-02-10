import { MouseEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../contexts/CartContext'
import { SelectedCoffeItem } from '../SelectedCoffeItem'
import {
  ConfirmationButton,
  Container,
  PriceResume,
  SelectedCoffeList,
} from './style'

export function ShoppingCart() {
  const { selectedCoffees, totalCoffeesPrice, validAddress, clearCart } =
    useContext(CartContext)
  const navigate = useNavigate()

  const deliveryFee = 3.5

  const coffeesPrice = totalCoffeesPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const deliveryFeeFormatted = deliveryFee.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalPrice = (totalCoffeesPrice + deliveryFee).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function checkout(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    if (selectedCoffees.length > 0 && validAddress()) {
      clearCart()
      navigate('/success')
    }
  }

  return (
    <Container>
      <SelectedCoffeList>
        {selectedCoffees.length > 0 ? (
          selectedCoffees.map((coffee) => (
            <SelectedCoffeItem key={coffee.id} selectededCoffee={coffee} />
          ))
        ) : (
          <div className="empty-cart">
            <span>Seu carrinho está vazio</span>
          </div>
        )}
      </SelectedCoffeList>

      <PriceResume>
        <div>
          Total de itens
          <span>{coffeesPrice}</span>
        </div>
        <div>
          Entrega
          <span>{deliveryFeeFormatted}</span>
        </div>
        <div className="total">
          Total
          <span>{totalPrice}</span>
        </div>
      </PriceResume>

      <ConfirmationButton
        disabled={selectedCoffees.length === 0}
        onClick={checkout}
      >
        CONFIRMAR PEDIDO
      </ConfirmationButton>
    </Container>
  )
}
