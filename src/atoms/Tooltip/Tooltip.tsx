import React, { FunctionComponent } from 'react'
import { TooltipStyled, TooltipLabelStyled } from 'atoms/Tooltip/styles'

type Props = {
  label?: string
  placement?: string
  labelSize?: string
  tooltipText?: string
  labelStyle?: any
  show?: boolean
}

const Tooltip: FunctionComponent<Props> = ({
  label,
  placement = 'top',
  tooltipText,
  labelSize,
  labelStyle,
  children,
  show = true
}) => {
  return (
    <TooltipStyled data-text={tooltipText} placement={placement} show={show}>
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
