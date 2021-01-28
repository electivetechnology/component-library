import React, { Children, cloneElement } from 'react'
import { ColumnsStyled } from 'molecules/Columns/styles'
import { useColumnsReducer, NavContext } from 'molecules/Columns/base'

type Props = {
  width: number
}
const Columns: React.FC<Props> = ({ children, width }) => {
  const { columns, dispatcher } = useColumnsReducer(width)

  let childrenStyled: any = []
  Children.map(children, (child: any, index) => {
    if (child) {
      const addColumn = (
        colspan: number,
        fixedWidth: number,
        display = true
      ) => {
        dispatcher({ type: 'add', index, colspan, fixedWidth, display })
      }
      childrenStyled.push(
        cloneElement(child, { addColumn, key: index, columnIndex: index })
      )
    }
  })

  const totalSpan = columns.reduce(function (accumulator: number, column: any) {
    const span = column.display ? column.colspan : 0
    return accumulator + span
  }, 0)

  const totalFixed = columns.reduce(function (
    accumulator: number,
    column: any
  ) {
    const fixed = column.display ? column.fixedWidth : 0
    return accumulator + fixed
  },
  0)

  const widthRemaining = width - totalFixed

  const colWidth = widthRemaining / totalSpan

  return (
    <NavContext.Provider value={{ colWidth, columns }}>
      <ColumnsStyled width={width}>{childrenStyled}</ColumnsStyled>
    </NavContext.Provider>
  )
}

export default Columns
