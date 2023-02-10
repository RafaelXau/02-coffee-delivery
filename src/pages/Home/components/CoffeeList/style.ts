import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['theme-max-width']};
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
`

export const CoffeeCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1165px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`
