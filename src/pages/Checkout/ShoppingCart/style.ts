import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const SelectedCoffeList = styled.ul`
  list-style: none;
`

export const PriceResume = styled.div`
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: auto;
    }

    &.total {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ConfirmationButton = styled.button`
  background: ${(props) => props.theme['yellow-500']};
  width: 100%;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }

  &:disabled {
    background: ${(props) => props.theme['yellow-300']};
    cursor: not-allowed;
  }
`
