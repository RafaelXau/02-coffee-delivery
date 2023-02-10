import { ReactNode } from 'react'
import { Container, Icon } from './style'

interface CardTitleProps {
  title: string
  description: string
  icon: ReactNode
  iconColor?: 'purple' | 'yellow'
}

export function CardTitle({
  title,
  description,
  icon,
  iconColor = 'yellow',
}: CardTitleProps) {
  return (
    <Container>
      <Icon iconColor={iconColor}>{icon}</Icon>
      <div>
        {title}
        <small>{description}</small>
      </div>
    </Container>
  )
}
