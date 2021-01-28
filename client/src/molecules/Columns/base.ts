import { createContext, useReducer } from 'react'
import { produce } from 'immer'

export type NavContextType = {
  colWidth: any
  columns: any
}

export const NavContext = createContext<NavContextType>({} as NavContextType)

export const useColumnsReducer = (width: number) => {
  const [columns, dispatcher] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case 'add':
            draftState[action.index] = {
              colspan: action.colspan,
              display: action.display,
              fixedWidth: action.fixedWidth,
            }
            break
          default:
            return state
        }
      }),
    [] as any
  )

  // const addColumn = (
  //   colspan: number,
  //   fixedWidth: number,
  //   display = true
  // ) => {
  //   dispatcher({ type: 'add', index, colspan, fixedWidth, display })
  // }
  //
  //
  // const totalSpan = columns.reduce(function (accumulator: number, column: any) {
  //   const span = column.display ? column.colspan : 0
  //   return accumulator + span
  // }, 0)
  //
  // const totalFixed = columns.reduce(function (
  //   accumulator: number,
  //   column: any
  //   ) {
  //     const fixed = column.display ? column.fixedWidth : 0
  //     return accumulator + fixed
  //   },
  //   0)
  //
  // const widthRemaining = width - totalFixed
  //
  // const colWidth = widthRemaining / totalSpan

  return {
    columns: columns as any,
    dispatcher,
  }
}
