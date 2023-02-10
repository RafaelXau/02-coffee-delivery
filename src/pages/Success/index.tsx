import { CardBorder, Container, Content, Icon, Row, SuccessCard } from './style'
import delivery from '../../assets/delivery.png'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const navigate = useNavigate()
  const { address, validAddress, paymentMethod } = useContext(CartContext)

  useEffect(() => {
    if (!validAddress()) {
      navigate('/')
    }
  }, [validAddress, navigate])

  const paymentMethodName = {
    'credit-card': 'Cartão de Crédito',
    'debit-card': 'Cartão de Débito',
    money: 'Dinheiro',
  }

  return (
    <Container>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <Content>
        <CardBorder>
          <SuccessCard>
            <Row>
              <Icon bgColor="purple">
                <MapPin size="16" />
              </Icon>
              <div>
                <div>
                  Entrega em{' '}
                  <strong>
                    {address.street}, {address.number}
                  </strong>
                </div>
                <div>
                  {address.neighborhood}, {address.city}, {address.state}
                </div>
              </div>
            </Row>

            <Row>
              <Icon bgColor="yellow">
                <Clock size="16" />
              </Icon>
              <div>
                <div>Previsão de entrega</div>
                <div>
                  <strong>20 min - 30 min</strong>
                </div>
              </div>
            </Row>

            <Row>
              <Icon bgColor="darkYellow">
                <CurrencyDollar size="16" />
              </Icon>
              <div>
                <div>Pgamento na entrega</div>
                <div>
                  <strong>{paymentMethodName[paymentMethod]}</strong>
                </div>
              </div>
            </Row>
          </SuccessCard>
        </CardBorder>

        <img src={delivery} alt="" />
      </Content>
    </Container>
  )
}
