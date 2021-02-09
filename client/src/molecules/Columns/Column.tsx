import React, { useContext, FC, useEffect } from 'react'
import { NavContext } from 'molecules/Columns/base'
import {
  iconStyle,
  ColumnStyled,
  ColumnBorderStyled,
  iconLeftStyle
} from 'molecules/Columns/styles'
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

type Props = {
  isClosable?: boolean
  colspan?: number
  addColumn?: any
  columnIndex?: number
  fixedWidth?: number
  handleClose?: any
  align: 'left' | 'right'
}

const Column: FC<Props> = ({
  children,
  isClosable = true,
  colspan = 1,
  fixedWidth = 0,
  addColumn,
  columnIndex,
  handleClose,
  align = 'right'
}) => {
  const { colWidth, columns } = useContext(NavContext)

  colspan = !fixedWidth ? colspan : 0

  useEffect(() => {
    addColumn(colspan, fixedWidth)
  }, [])

  const onClose = () => {
    handleClose && handleClose()
    addColumn(colspan, fixedWidth, false)
  }

  const onOpen = () => {
    addColumn(colspan, fixedWidth, true)
  }

  const columnExists = columns.find(
    (column: any, index: number) => columnIndex === index
  )

  const width = fixedWidth ? fixedWidth : colWidth * colspan

  const isHidden = !columnExists || !columnExists.display

  const displayWidth = columnExists && columnExists.display ? width : 0

  return (
    <ColumnStyled columnWidth={displayWidth} isHidden={isHidden} align={align}>
      <ColumnBorderStyled />
      {isClosable && !isHidden && (
        <ArrowForwardIosIcon style={iconLeftStyle} onClick={onClose} />
      )}
      {isHidden && (
        <ChevronLeftOutlinedIcon style={iconStyle} onClick={onOpen} />
      )}
      {!isHidden && children}
    </ColumnStyled>
  )
}

export default Column
