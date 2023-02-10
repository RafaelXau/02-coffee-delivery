import { coffeeListData } from '../../../../data/Coffes'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeCardList, Container, Title } from './style'

export function CoffeeList() {
  return (
    <Container>
      <Title>Nossos Cafés</Title>
      <CoffeeCardList>
        {coffeeListData.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeCardList>
    </Container>
  )
}
