import configureMockStore from 'redux-mock-store'
import { createDefaultState } from 'utils/baseSchema'
import schema from 'store/schema'

export const initialState = createDefaultState(schema)
export const store = configureMockStore()(initialState)

interface Store {
  key: string
  value: any
}

export const createInitialStore = (newStates: Array<Store>) => {
  newStates.forEach((newState: Store) => {
    initialState[newState['key']] = newState['value']
  })
  return configureMockStore()(initialState)
}
