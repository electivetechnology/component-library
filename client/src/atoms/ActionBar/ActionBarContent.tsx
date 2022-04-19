import React, { FC } from 'react'
import { ActionBarContentStyled } from './styles'
import { PositionType } from 'utils/types'

type Props = {
  position: PositionType
}
const ActionBarContent: FC<Props> = ({ children, position }) => {
  return (
    <ActionBarContentStyled position={position}>
      {children}
    </ActionBarContentStyled>
  )
}

export default ActionBarContent
