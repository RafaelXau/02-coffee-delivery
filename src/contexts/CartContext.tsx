import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { CoffeeType } from '../data/Coffes'
import { Address, addressReducer } from '../reducers/addressReducer/reducer'
import {
  addToCartAction,
  clearCartAction,
  removeFromCartAction,
  updateCartAction,
} from '../reducers/selectedCoffeesReducer/action'
import {
  SelectedCoffee,
  selectedCoffeesReducer,
} from '../reducers/selectedCoffeesReducer/reducer'

type AddressKeys = keyof Address

type PaymentMethod = 'credit-card' | 'debit-card' | 'money'

interface CartContextData {
  selectedCoffees: SelectedCoffee[]
  address: Address
  totalCoffees: number
  totalCoffeesPrice: number
  paymentMethod: PaymentMethod
  validAddress: () => boolean
  updateAddress: (key: AddressKeys, value: string | number) => void
  addSelectedCoffee: (coffee: CoffeeType, quantity: number) => void
  removeSelectedCoffee: (coffeeId: number) => void
  updateSelectedCoffees: (coffee: CoffeeType, quantity: number) => void
  clearCart: () => void
  updatePaymentMethod: (method: PaymentMethod) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('credit-card')

  const [selectedCoffees, coffeeDispatch] = useReducer(
    selectedCoffeesReducer,
    [],
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:selected-coffee-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return []
    },
  )

  const [address, addressDispatch] = useReducer(
    addressReducer,
    {
      street: '',
      number: '',
      complement: undefined,
      neighborhood: '',
      city: '',
      state: '',
      zipCode: '',
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:inserted-address-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return []
    },
  )

  const { street, number, complement, neighborhood, city, state, zipCode } =
    address

  useEffect(() => {
    const stateJSON = JSON.stringify(selectedCoffees)

    localStorage.setItem(
      '@coffee-delivery:selected-coffee-state-1.0.0',
      stateJSON,
    )
  }, [selectedCoffees])

  useEffect(() => {
    const stateJSON = JSON.stringify({
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      zipCode,
    })

    localStorage.setItem('@coffee-delivery:inserted-address-1.0.0', stateJSON)
  }, [street, number, complement, neighborhood, city, state, zipCode])

  const totalCoffees = selectedCoffees.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0,
  )

  const totalCoffeesPrice = selectedCoffees.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0,
  )

  function validAddress() {
    const { street, number, neighborhood, city, state, zipCode } = address
    console.log(street, number, neighborhood, city, state, zipCode)

    return (
      street.length > 0 &&
      number > 0 &&
      neighborhood.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      zipCode.length > 0
    )
  }

  function updateAddress(key: AddressKeys, value: string | number) {
    addressDispatch({ key, value })
  }

  function addSelectedCoffee(coffee: CoffeeType, quantity: number) {
    coffeeDispatch(addToCartAction(coffee, quantity))
  }

  function updateSelectedCoffees(coffee: CoffeeType, quantity: number) {
    coffeeDispatch(updateCartAction(coffee, quantity))
  }

  function removeSelectedCoffee(coffeeId: number) {
    coffeeDispatch(removeFromCartAction(coffeeId))
  }

  function clearCart() {
    coffeeDispatch(clearCartAction())
  }

  function updatePaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method)
  }

  return (
    <CartContext.Provider
      value={{
        address,
        selectedCoffees,
        totalCoffees,
        totalCoffeesPrice,
        paymentMethod,
        validAddress,
        updateAddress,
        addSelectedCoffee,
        removeSelectedCoffee,
        updateSelectedCoffees,
        clearCart,
        updatePaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
