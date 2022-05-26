import React from 'react'
import { PillStyled } from './styles'

type Props = {
  color: string
  align?: string
}
const Pill: React.FC<Props> = ({ color, align = 'right' }) => {
  return <PillStyled color={color} align={align}></PillStyled>
}

export default Pill
