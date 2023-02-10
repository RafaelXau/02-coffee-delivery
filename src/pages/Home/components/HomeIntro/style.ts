import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['theme-max-width']};
  margin: 0 auto;
  padding: 5.75rem 1rem;

  display: flex;
  align-items: flex-start;
  gap: 3.5rem;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      display: block;
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 45% 1fr;
  gap: 1.25rem;
  list-style: none;
`

const ICON_BACKGROUND_COLORS = {
  darkYellow: 'yellow-700',
  lightYellow: 'yellow-500',
  gray: 'base-text',
  purple: 'purple-500',
} as const

interface StatusProps {
  iconBgColor: keyof typeof ICON_BACKGROUND_COLORS
}

export const ListItem = styled.li<StatusProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    background-color: ${(props) =>
      props.theme[ICON_BACKGROUND_COLORS[props.iconBgColor]]};
    width: 32px;
    height: 32px;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
  }
`
