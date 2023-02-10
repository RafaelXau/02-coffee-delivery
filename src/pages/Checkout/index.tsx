import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Address } from './Address'
import { CardTitle } from './CardTitle'
import { PaymentSelection } from './PaymentSelection'
import { ShoppingCart } from './ShoppingCart'
import { Card, ColumnTitle, Container, LeftColumn, RightColumn } from './styles'

export function Checkout() {
  return (
    <Container>
      <LeftColumn>
        <ColumnTitle>Complete seu pedido</ColumnTitle>
        <Card>
          <CardTitle
            description="Endereço de cobrança"
            icon={<MapPinLine size={22} />}
            title="Informe o endereço onde deseja receber seu pedido"
          />
          <Address />
        </Card>

        <Card>
          <CardTitle
            description="Pagamento"
            icon={<CurrencyDollar size={22} />}
            title="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            iconColor="purple"
          />
          <PaymentSelection />
        </Card>
      </LeftColumn>

      <RightColumn>
        <ColumnTitle>Cafés selecionados</ColumnTitle>

        <ShoppingCart />
      </RightColumn>
    </Container>
  )
}
