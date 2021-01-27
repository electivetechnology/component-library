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
  fixedWidth,
  addColumn,
  columnIndex
}) => {
  const { width, columns } = useContext(NavContext)

  useEffect(() => {
    addColumn(!fixedWidth ? colspan : 0)
  }, [])

  const handleClose = () => {
    addColumn(colspan, false)
  }

  const handleOpen = () => {
    addColumn(colspan, true)
  }

  const columnExists = columns.find(
    (column: any, index: number) => columnIndex === index
  )

  const percentageWidth =
    columnExists && columnExists.display ? width * colspan : 0

  const columnWidth = fixedWidth ? `${fixedWidth}px` : `${percentageWidth}%`

  const isHidden = percentageWidth === 0

  return (
    <ColumnStyled columnWidth={columnWidth} isHidden={isHidden}>
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
