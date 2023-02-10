import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { NumberInput } from '../../../components/NumberInput'
import { CartContext } from '../../../contexts/CartContext'
import { SelectedCoffee } from '../../../reducers/selectedCoffeesReducer/reducer'
import {
  ButtonGroup,
  Container,
  RemoveButton,
  SelectedCoffeInfo,
} from './style'

interface SelectedCoffeeItemProps {
  selectededCoffee: SelectedCoffee
}

export function SelectedCoffeItem({
  selectededCoffee,
}: SelectedCoffeeItemProps) {
  const { updateSelectedCoffees, removeSelectedCoffee } =
    useContext(CartContext)
  const { id, image, name, price, quantity } = selectededCoffee

  function formatNumber(number: number) {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function handleSetAmount(amount: number) {
    updateSelectedCoffees(selectededCoffee, amount)
  }

  function handleRemoveCoffee() {
    removeSelectedCoffee(id)
  }

  return (
    <Container>
      <SelectedCoffeInfo>
        <img src={image} alt={name} />
        <div>
          <div>{name}</div>
          <ButtonGroup>
            <NumberInput amount={quantity} handleSetAmount={handleSetAmount} />
            <RemoveButton type="button" onClick={handleRemoveCoffee}>
              <span>
                <Trash size={16} />
              </span>
              REMOVER
            </RemoveButton>
          </ButtonGroup>
        </div>
      </SelectedCoffeInfo>
      <div className="price">{formatNumber(price)}</div>
    </Container>
  )
}
