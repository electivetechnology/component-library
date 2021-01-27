import { createContext, useReducer } from 'react'
import { produce } from 'immer'

export type NavContextType = {
  colWidth: any
  columns: any
}

export const NavContext = createContext<NavContextType>({} as NavContextType)

export const useColumnsReducer = () => {
  const [columns, dispatcher] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case 'add':
            draftState[action.index] = {
              colspan: action.colspan,
              display: action.display,
            }
            break
          default:
            return state
        }
      }),
    [] as any
  )

  return {
    columns: columns as any,
    dispatcher,
  }
}
