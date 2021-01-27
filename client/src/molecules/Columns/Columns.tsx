import React, { Children, cloneElement } from 'react'
import { ColumnsStyled } from 'molecules/Columns/styles'
import { useColumnsReducer, NavContext } from 'molecules/Columns/base'

type Props = {
  width?: number
}
const Columns: React.FC<Props> = ({ children , width}) => {
  const { columns, dispatcher } = useColumnsReducer()

  let childrenStyled: any = []
  Children.map(children, (child: any, index) => {
    if (child) {
      const addColumn = (colspan: number, display = true) => {
        dispatcher({ type: 'add', index, colspan, display })
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

  const colWidth = 100 / totalSpan

  return (
    <NavContext.Provider value={{ colWidth, columns }}>
      <ColumnsStyled width={width}>{childrenStyled}</ColumnsStyled>
    </NavContext.Provider>
  )
}

export default Columns
