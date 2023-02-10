import {
  AdressButton,
  HeaderContainer,
  HeaderContentWrapper,
  HeaderNav,
  ShoppingCartButton,
} from './styles'
import coffeeDeliveryLogo from '../../../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Header() {
  const { totalCoffees, address } = useContext(CartContext)
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <NavLink className="logo" to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <HeaderNav>
          <AdressButton to="/checkout">
            <MapPin size={22} weight="fill" />
            <span>
              {address.city && address.state
                ? `${address.city}, ${address.state}`
                : 'Adicionar endereço'}
            </span>
          </AdressButton>

          <ShoppingCartButton to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {totalCoffees > 0 && <span>{totalCoffees}</span>}
          </ShoppingCartButton>
        </HeaderNav>
      </HeaderContentWrapper>
    </HeaderContainer>
  )
}
