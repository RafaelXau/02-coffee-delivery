import styled from 'styled-components'

export const Container = styled.li`
  padding: 1.5rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  &:first-child {
    padding-top: 0;
  }
`

export const SelectedCoffeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  @media (max-width: 450px) {
    img {
      display: none;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  line-height: 1;
  font-size: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.2s;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  span {
    color: ${(props) => props.theme['purple-500']};
  }
`
