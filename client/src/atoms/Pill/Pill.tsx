import React from 'react'
import { PillStyled } from './styles'

type Props = {
  color: string
}
const Pill: React.FC<Props> = ({
  color
}) => {

  return (
    <PillStyled color={color}>
    </PillStyled>
  )
}

export default Pill
