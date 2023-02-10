import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  top: 0;
  position: sticky;

  .logo {
    line-height: 0;
  }
`

export const HeaderContentWrapper = styled.div`
  max-width: ${(props) => props.theme['theme-max-width']};
  padding: 2rem 1rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  a {
    padding: 0.5rem;
  }
`

const BaseNavButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.1s;

  text-decoration: none;
`

export const AdressButton = styled(BaseNavButton)`
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme.white};
  }
`

export const ShoppingCartButton = styled(BaseNavButton)`
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
  }

  span {
    background-color: ${(props) => props.theme['yellow-500']};
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;

    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
  }
`
