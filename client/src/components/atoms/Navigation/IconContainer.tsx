import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { IconStyled } from './styles'

export type Props = {
  children: any
  toolTipText: string
  placement: any
}

const IconContainer: React.FC<Props> = ({
  children,
  toolTipText,
  placement
}) => {
  return (
    <IconStyled>
      <Tooltip title={toolTipText} placement={placement}>
        {children}
      </Tooltip>
    </IconStyled>
  )
}

export default IconContainer
