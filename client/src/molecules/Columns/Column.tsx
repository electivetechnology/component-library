import React, { useContext, FC, useEffect } from 'react'
import { NavContext } from 'molecules/Columns/base'
import { iconStyle, ColumnStyled } from 'molecules/Columns/styles'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined'

type Props = {
  isClosable?: boolean
  colspan?: number
  addColumn?: any
  columnIndex?: number
  fixedWidth?: number
}

const Column: FC<Props> = ({
  children,
  isClosable = true,
  colspan = 1,
  fixedWidth = 0,
  addColumn,
  columnIndex
}) => {
  const { colWidth, columns } = useContext(NavContext)

  colspan = !fixedWidth ? colspan : 0

  useEffect(() => {
    addColumn(colspan, fixedWidth)
  }, [])

  const handleClose = () => {
    addColumn(colspan, fixedWidth, false)
  }

  const handleOpen = () => {
    addColumn(colspan, fixedWidth, true)
  }

  const columnExists = columns.find(
    (column: any, index: number) => columnIndex === index
  )

  const width = fixedWidth ? fixedWidth : colWidth * colspan

  const isHidden = !columnExists || !columnExists.display

  const displayWidth = columnExists && columnExists.display ? width : 0

  return (
    <ColumnStyled columnWidth={displayWidth} isHidden={isHidden}>
      {isClosable && !isHidden && (
        <CloseOutlinedIcon style={iconStyle} onClick={handleClose} />
      )}
      {isHidden && (
        <ChevronLeftOutlinedIcon style={iconStyle} onClick={handleOpen} />
      )}
      {!isHidden && children}
    </ColumnStyled>
  )
}

export default Column
