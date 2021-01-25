import React, { useContext, FC, useEffect } from 'react'
import { NavContext } from 'molecules/Columns/base'
import { closedIconStyle, ColumnStyled } from 'molecules/Columns/styles'
import CloseIcon from '@material-ui/icons/Close'

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

  const handleCloseModal = () => {
    addColumn(colspan, false)
  }

  const columnExists = columns.find(
    (column: any, index: number) => columnIndex === index
  )

  const percentageWidth =
    columnExists && columnExists.display ? width * colspan : 0

  const columnWidth = fixedWidth ? `${fixedWidth}px` : `${percentageWidth}%`

  return (
    <ColumnStyled columnWidth={columnWidth} hide={!columnWidth}>
      {isClosable && (
        <CloseIcon style={closedIconStyle} onClick={handleCloseModal} />
      )}
      {children}
    </ColumnStyled>
  )
}

export default Column
