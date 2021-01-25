import React, { useContext, FC, useEffect } from 'react'
import { NavContext } from 'molecules/Columns/base'
import {
  closedIconStyle,
  ColumnStyled,
} from 'molecules/Columns/styles'
import CloseIcon from '@material-ui/icons/Close'

type Props = { colspan?: number; addColumn?: any; columnIndex?: number }

const Column: FC<Props> = ({
  children,
  colspan = 1,
  addColumn,
  columnIndex,
}) => {
  const { width, columns } = useContext(NavContext)

  useEffect(() => {
    addColumn(colspan)
  }, [])

  const handleCloseModal = () => {
    addColumn(colspan, false)
  }

  const columnExists = columns.find(
    (column: any, index: number) => columnIndex === index
  )

  const columnWidth = columnExists && columnExists.display ? width * colspan : 0

  return (
    <ColumnStyled
      width={columnWidth ? columnWidth : 0}
      hide={!columnWidth}>
      <CloseIcon style={closedIconStyle} onClick={handleCloseModal} />
      width: {columnWidth}
      {children}
    </ColumnStyled>
  )
}

export default Column
