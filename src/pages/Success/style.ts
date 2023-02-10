import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['theme-max-width']};
  margin: 0 auto;
  padding: 2.5rem 1rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const CardBorder = styled.div`
  width: 100%;
  max-width: 32.875rem;
  padding: 1px;
  position: relative;
  background: linear-gradient(90deg, #dbac2c, #8047f8);
  border-radius: 6px 36px;
`

export const SuccessCard = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2rem;
  width: 100%;
  padding: 40px;
  border-radius: 5px 35px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`

const ICON_COLORS = {
  yellow: 'yellow-700',
  darkYellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface IconProps {
  bgColor: keyof typeof ICON_COLORS
}

export const Icon = styled.span<IconProps>`
  background-color: ${(props) => props.theme[ICON_COLORS[props.bgColor]]};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`
