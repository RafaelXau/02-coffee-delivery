import styled from 'styled-components'

export const Container = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  display: flex;
  gap: 8px;

  small {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    display: block;
  }
`

const ICON_COLORS = {
  yellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface StatusProps {
  iconColor: keyof typeof ICON_COLORS
}

export const Icon = styled.span<StatusProps>`
  color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
`
