import produce from 'immer'

export interface Address {
  street: string
  number: number | ''
  complement?: string
  neighborhood: string
  city: string
  state: string
  zipCode: string
}

interface Action {
  key: keyof Address
  value: any
}

export function addressReducer(addressState: Address, action: Action) {
  return produce(addressState, (draft) => {
    if (action.value !== undefined) {
      draft[action.key] = action.value
    }
  })
}
