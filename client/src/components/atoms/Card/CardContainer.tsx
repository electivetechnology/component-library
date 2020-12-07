import React from 'react'
import { CardContainerStyled } from './styles'

type Props = {
  theme: string
  onClick: any
  hover?: boolean
  selected?: boolean
  width: string
  height: string
}
const CardContainer: React.FC<Props> = ({
  children,
  onClick,
  hover,
  selected,
  width,
  height,
  theme = 'Primary'
}) => {
  return (
    <CardContainerStyled
      onClick={onClick}
      selected={selected}
      hover={hover}
      theme={theme}
      width={width}
      height={height}
    >
      {children}
    </CardContainerStyled>
  )
}

export default CardContainer
