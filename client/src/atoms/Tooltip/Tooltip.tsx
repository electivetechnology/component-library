import React, { FunctionComponent, useState } from 'react'
import { TooltipContainerStyled, TooltipStyled } from './styles'

type Props = {
  label?: string
  placement: string
}

const Tooltip: FunctionComponent<Props> = ({ label, placement, children }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseHover = (e: any) => {
    e.preventDefault()
    setIsHovered(true)
  }

  const handleMouseLeave = (e: any) => {
    e.preventDefault()
    setIsHovered(false)
  }

  return (
    <TooltipContainerStyled
      onMouseEnter={(e) => handleMouseHover(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {children}
      <TooltipStyled showTooltip={isHovered} placement={placement}>
        {label}
      </TooltipStyled>
    </TooltipContainerStyled>
  )
}

export default Tooltip
