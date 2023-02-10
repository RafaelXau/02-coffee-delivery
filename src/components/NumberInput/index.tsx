import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { Container } from './style'

interface NumberInputProps {
  amount: number
  handleSetAmount: (amount: number) => void
}

export function NumberInput({ amount, handleSetAmount }: NumberInputProps) {
  function handleSetAmout(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value)

    if (value < 1) {
      return handleSetAmount(1)
    }

    if (value > 99) {
      return handleSetAmount(99)
    }

    handleSetAmount(value)
  }

  function handleIncrement() {
    if (amount >= 99) {
      return
    }

    handleSetAmount(amount + 1)
  }

  function handleDecrement() {
    if (amount <= 1) {
      return
    }

    handleSetAmount(amount - 1)
  }

  return (
    <Container>
      <button type="button" onClick={handleDecrement}>
        <Minus size={14} weight="fill" />
      </button>
      <input
        type="number"
        step={1}
        max={99}
        value={amount}
        onChange={handleSetAmout}
      />
      <button type="button" onClick={handleIncrement}>
        <Plus size={14} weight="fill" />
      </button>
    </Container>
  )
}
