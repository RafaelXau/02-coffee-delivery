import { ShoppingCart } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { NumberInput } from '../../../../components/NumberInput'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeType } from '../../../../data/Coffes'
import {
  AddToCartButton,
  BadgeList,
  CategoryBadge,
  CoffeeCardContainer,
  CoffeeThumbnail,
  Footer,
} from './style'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addSelectedCoffee } = useContext(CartContext)
  const [selectedAmount, setSelectedAmount] = useState(1)

  function formatNumber(number: number) {
    return number.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  function handleSetAmount(amount: number) {
    setSelectedAmount(amount)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addSelectedCoffee(coffee, selectedAmount)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeThumbnail src={coffee.image} alt={coffee.name} />
      <BadgeList>
        {coffee.categories.map((category) => (
          <CategoryBadge key={category}>{category}</CategoryBadge>
        ))}
      </BadgeList>
      <div className="name">{coffee.name}</div>
      <div className="description">{coffee.description}</div>
      <Footer>
        <div className="price">
          <span>R$ </span>
          {formatNumber(coffee.price)}
        </div>

        <form onSubmit={handleSubmit}>
          <NumberInput
            amount={selectedAmount}
            handleSetAmount={handleSetAmount}
          />
          <AddToCartButton type="submit">
            <ShoppingCart size={16} weight="fill" />
          </AddToCartButton>
        </form>
      </Footer>
    </CoffeeCardContainer>
  )
}
