import React from 'react'
import { CardContainerStyled } from 'atoms/Card/styles'

type Props = {
  theme: string
  onClick: any
  hover?: boolean
  selected?: boolean
}
const CardContainer: React.FC<Props> = ({
  children,
  onClick,
  hover,
  selected,
  theme = 'Primary'
}) => {
  return (
    <CardContainerStyled
      onClick={onClick}
      selected={selected}
      hover={hover}
      theme={theme}
    >
      {children}
    </CardContainerStyled>
  )
}

export default CardContainer
