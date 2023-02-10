import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &.oneField {
    input {
      width: 100%;
    }
  }

  &.twoFields {
    input:nth-child(1) {
      width: 200px;
    }

    input:nth-child(2) {
      width: 100%;
    }
  }

  &.threeFields {
    input:nth-child(1) {
      width: 200px;
    }

    input:nth-child(2) {
      width: 100%;
    }

    input:nth-child(3) {
      width: 60px;
    }
  }
`

export const FormInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  width: 100%;
  height: 2.625rem;
  padding: 0.75rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  box-shadow: none;
  z-index: 0;

  &:focus {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
