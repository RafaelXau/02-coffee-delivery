import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    background: transparent;
    max-width: 1.25rem;
    max-height: 1rem;
    border: 0;
    -moz-appearance: textfield;
    text-align: center;
    line-height: 1;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    background: transparent;
    width: 0.875rem;
    height: 0.875rem;
    line-height: 0;
    color: ${(props) => props.theme['purple-500']};
    border: 0;
    cursor: pointer;
  }
`
