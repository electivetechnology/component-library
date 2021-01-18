import React, { FunctionComponent, useState } from 'react'
import { TooltipContainerStyled, TooltipStyled } from './styles'

type Props = {
  label?: string
  placement: string
}

const Tooltip: FunctionComponent<Props> = ({ label, placement, children }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseHover = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <TooltipContainerStyled
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <TooltipStyled showTooltip={isHovered} placement={placement}>
        {label}
      </TooltipStyled>
    </TooltipContainerStyled>
  )
}

export default Tooltip
