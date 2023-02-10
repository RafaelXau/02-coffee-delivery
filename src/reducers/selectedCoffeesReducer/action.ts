import { CoffeeType } from '../../data/Coffes'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export function addToCartAction(coffee: CoffeeType, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { coffee, quantity },
  }
}

export function updateCartAction(coffee: CoffeeType, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: { coffee, quantity },
  }
}

export function removeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { coffeeId },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
