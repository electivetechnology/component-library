import React, { FunctionComponent } from 'react'
import { TooltipStyled, TooltipLabelStyled } from './styles'

type Props = {
  label?: string
  placement?: string
  labelSize?: string
  tooltipText?: string
  labelStyle?: any
}

const Tooltip: FunctionComponent<Props> = ({
  label,
  placement = 'top',
  tooltipText,
  labelSize,
  labelStyle,
  children
}) => {
  return (
    <TooltipStyled data-text={tooltipText} placement={placement}>
      <TooltipLabelStyled
        data-html='true'
        fontSize={labelSize}
        style={labelStyle}
      >
        {label}
        {children}
      </TooltipLabelStyled>
    </TooltipStyled>
  )
}

export default Tooltip
