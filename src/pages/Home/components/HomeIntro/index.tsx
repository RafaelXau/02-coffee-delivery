import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import homeIntroImage from '../../../../assets/coffee-delivery-cup.png'
import { Container, LeftArea, List, ListItem } from './style'

export function HomeIntro() {
  return (
    <Container>
      <LeftArea>
        <div>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <List>
          <ListItem iconBgColor="darkYellow">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </ListItem>
          <ListItem iconBgColor="gray">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </ListItem>
          <ListItem iconBgColor="lightYellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </ListItem>
          <ListItem iconBgColor="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </ListItem>
        </List>
      </LeftArea>

      <img src={homeIntroImage} alt="" />
    </Container>
  )
}
