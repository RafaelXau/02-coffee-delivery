import produce from 'immer'
import { CoffeeType } from '../../data/Coffes'
import { ActionTypes } from './action'

export interface SelectedCoffee extends CoffeeType {
  quantity: number
}

export function selectedCoffeesReducer(state: SelectedCoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const selectedCoffee = draft.find(
          (coffee) => coffee.id === action.payload.coffee.id,
        )

        if (selectedCoffee) {
          selectedCoffee.quantity += action.payload.quantity
        } else {
          draft.push({
            ...action.payload.coffee,
            quantity: action.payload.quantity,
          })
        }
      })

    case ActionTypes.UPDATE_CART:
      return produce(state, (draft) => {
        const selectedCoffee = draft.find(
          (coffee) => coffee.id === action.payload.coffee.id,
        )

        if (selectedCoffee) {
          selectedCoffee.quantity = action.payload.quantity
        }
      })

    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const removedCoffeeIndex = draft.findIndex(
          (coffee) => coffee.id === action.payload.coffeeId,
        )
        draft.splice(removedCoffeeIndex, 1)
      })

    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.splice(0, draft.length)
      })

    default:
      return state
  }
}
