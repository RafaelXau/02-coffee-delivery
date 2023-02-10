import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`
export const PaymentOption = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &.selected {
    background-color: ${(props) => props.theme['purple-300']};
    border-color: ${(props) => props.theme['purple-500']};
  }
`
