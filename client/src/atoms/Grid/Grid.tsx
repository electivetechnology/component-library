import React from 'react'
import {
  GridContainerStyled
} from './styles'
import { theme } from 'styles/theme'

type Props = {
  activeTransform: string
  backgroundColor?: string
  columnSize: string
  columnsSize: string
  expandMainColumn: boolean
  isActive: boolean
  transition?: string
  transform: string
  width?: string
  height?: string
}

const GridComponent: React.FC<Props> = ({
  activeTransform,
  backgroundColor = theme.dividerGrey,
  children,
  columnSize,
  columnsSize,
  expandMainColumn,
  isActive,
  transform = "102%, -0.5%",
  transition = "0.5s",
  width = "100%",
  height = "100vh"
}) => {
  return (
    <GridContainerStyled
      grid={expandMainColumn ? columnSize: columnsSize}
      isActive={isActive}
      transition={transition}
      transform={transform}
      width={width}
      height={height}
      activeTransform={activeTransform}
      backgroundColor={backgroundColor}>
      {children}
    </GridContainerStyled>
  )
}

export default GridComponent
