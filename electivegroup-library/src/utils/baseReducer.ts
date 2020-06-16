import { remove } from 'lodash'
import { produce } from 'immer'
import { merge } from 'lodash'

// GLOBAL ACTION CREATORS
export const setAction = (item: any, itemConstant: any) => ({
  type: itemConstant.SET,
  item,
})

export const updateAction = (id: string, item: any, itemConstant: any) => ({
  type: itemConstant.UPDATE,
  id,
  item,
})

export const removeAction = (id: string, itemConstant: any) => ({
  type: itemConstant.REMOVE,
  id,
})

export const resetAction = (itemConstant: any) => ({
  type: itemConstant.RESET,
})

// COLLECTION ACTION CREATORS
export const addCollection = (id: any, item: any, itemConstant: any) => ({
  type: itemConstant.ADD,
  id,
  item,
})

export const addManyCollection = (item: any, itemConstant: any) => ({
  type: itemConstant.ADD_MANY,
  item,
})

export const updateCollectionField = (
  id: string,
  field: any,
  value: any,
  itemConstant: any
) => ({
  type: itemConstant.UPDATE_FIELD,
  id,
  field,
  value,
})

// LIST ACTION CREATORS
export const addList = (id: any, itemConstant: any) => ({
  type: itemConstant.ADD,
  id,
})

export const withCollection = (itemConstant: any, reducer: any) => (
  state: any,
  action: any
) =>
  produce(state, (draftState: any) => {
    switch (action.type) {
      case itemConstant.SET:
        return action.item
      case itemConstant.ADD:
        draftState[action.id] = action.item
        break
      case itemConstant.ADD_MANY:
        draftState = merge(draftState, action.item)
        break
      case itemConstant.UPDATE:
        draftState[action.id] = action.item
        break
      case itemConstant.UPDATE_FIELD:
        draftState[action.id][action.field] = action.value
        break
      case itemConstant.REMOVE:
        delete draftState[action.id]
        break
      case itemConstant.RESET:
        return {}
      default:
        return reducer(state, action)
    }
  })

export const withItem = (
  itemConstant: any,
  reducer: any,
  initialState: any
) => (state: any, action: any) =>
  produce(state, (draftState: any) => {
    switch (action.type) {
      case itemConstant.SET:
        return action.item
      case itemConstant.RESET:
        return initialState
      case itemConstant.UPDATE:
        draftState[action.id] = action.item
        break
      default:
        return reducer(state, action)
    }
  })

export const withList = (itemConstant: any, reducer: any) => (
  state: any,
  action: any
) =>
  produce(state, (draftState: any) => {
    switch (action.type) {
      case itemConstant.ADD:
        draftState.push(action.id)
        break
      case itemConstant.SET:
        return action.item
      case itemConstant.UPDATE:
        const index = draftState.indexOf(action.id)
        if (index !== -1) {
          draftState[index] = action.item
        }
        break
      case itemConstant.REMOVE:
        remove(draftState, function(id) {
          return id === action.id
        })
        break
      case itemConstant.RESET:
        return []
      default:
        return reducer(state, action)
    }
  })
