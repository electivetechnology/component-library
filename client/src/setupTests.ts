import configureMockStore from 'redux-mock-store'
export const initialState:any = {}

interface Store {
  key: string
  value: object
}

export const createInitialStore = (newStates: Array<Store>) => {
  newStates.forEach((newState: Store) => {
    initialState[newState['key']] = newState['value']
  })
  return configureMockStore()(initialState)
}
