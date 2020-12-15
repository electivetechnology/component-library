import React from 'react'
import { CardContainerStyled } from 'atoms/Card/styles'

type Props = {
  theme: string
  onClick: any
  hover?: boolean
  selected?: boolean
  padding?: boolean
  fullWidth?: boolean
}
const CardContainer: React.FC<Props> = ({
  children,
  onClick,
  hover,
  selected,
  theme = 'Primary',
  padding = false,
  fullWidth = false
}) => {
  return (
    <CardContainerStyled
      onClick={onClick}
      selected={selected}
      hover={hover}
      theme={theme}
      padding={padding}
      fullWidth={fullWidth}
    >
      {children}
    </CardContainerStyled>
  )
}

export default CardContainer
