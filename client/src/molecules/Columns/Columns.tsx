import React, { Children, cloneElement } from 'react'
import { ColumnsStyled } from 'molecules/Columns/styles'
import { useColumnsReducer, NavContext } from 'molecules/Columns/base'

type Props = {
  children: any
  width: number
}
const Columns: React.FC<Props> = ({ children, width }) => {
  const { columns, colWidth, dispatcher } = useColumnsReducer(width)

  let childrenStyled: Array<any> = []
  Children.map(children, (child: any, index) => {
    const addColumn = (colspan: number, fixedWidth: number, display = true) => {
      dispatcher({ type: 'add', index, colspan, fixedWidth, display })
    }

    child &&
      childrenStyled.push(
        cloneElement(child, { addColumn, key: index, columnIndex: index })
      )
  })

  return (
    <NavContext.Provider value={{ colWidth, columns }}>
      <ColumnsStyled width={width}>{childrenStyled}</ColumnsStyled>
    </NavContext.Provider>
  )
}

export default Columns
