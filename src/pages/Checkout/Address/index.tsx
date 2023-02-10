import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Content, FormInput, FormRow } from './style'

export function Address() {
  const { address, updateAddress } = useContext(CartContext)

  return (
    <Content>
      <FormRow className="oneField">
        <FormInput
          placeholder="CEP"
          value={address.zipCode}
          onChange={(e) => updateAddress('zipCode', e.target.value)}
        />
      </FormRow>

      <FormRow className="oneField">
        <FormInput
          placeholder="Rua"
          value={address.street}
          onChange={(e) => updateAddress('street', e.target.value)}
        />
      </FormRow>

      <FormRow className="twoFields">
        <FormInput
          placeholder="Número"
          value={address.number}
          onChange={(e) => updateAddress('number', e.target.value)}
        />
        <FormInput
          className="optional"
          placeholder="Complemento"
          value={address.complement}
          onChange={(e) => updateAddress('complement', e.target.value)}
        />
      </FormRow>

      <FormRow className="threeFields">
        <FormInput
          placeholder="Bairro"
          value={address.neighborhood}
          onChange={(e) => updateAddress('neighborhood', e.target.value)}
        />
        <FormInput
          placeholder="Cidade"
          value={address.city}
          onChange={(e) => updateAddress('city', e.target.value)}
        />
        <FormInput
          placeholder="UF"
          value={address.state}
          onChange={(e) => updateAddress('state', e.target.value)}
        />
      </FormRow>
    </Content>
  )
}
