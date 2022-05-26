import React from 'react'
import { DividerStyled } from './styles'

type Props = {
  padding?: boolean
}

const Divider: React.FC<Props> = ({ padding = false }) => (
  <DividerStyled padding={padding} />
)

export default Divider
