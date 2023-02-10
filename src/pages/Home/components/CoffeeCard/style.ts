import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 1rem 1.25rem;
  border-radius: 8px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .name {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
  }

  .description {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const CoffeeThumbnail = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -43px;
`

export const BadgeList = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CategoryBadge = styled.span`
  background-color: ${(props) => props.theme['yellow-300']};
  padding: 0.25rem 0.5rem;
  line-height: 1.3;
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-700']};
  border-radius: 100px;
`

export const Footer = styled.footer`
  width: 100%;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    font-weight: 800;
    font-family: 'Baloo 2', cursive;

    span {
      font-size: 0.875rem;
      font-weight: normal;
      font-family: 'Roboto', sans-serif;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
  }
`

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;
  line-height: 0;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
