import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['theme-max-width']};
  margin: 0 auto;
  padding: 2.5rem 1rem;

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ColumnTitle = styled.h2`
  font-size: 1.125rem;
`

export const Card = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const baseColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const LeftColumn = styled(baseColumn)``

export const RightColumn = styled(baseColumn)`
  max-width: 448px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`
