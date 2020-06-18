import { Reducer } from 'redux'
import { resetAction, setAction, withItem } from 'utils/baseReducer'
import {
  PopUpActionTypes,
  PopUpConst,
  PopUpType,
  Schema,
} from './types'

// SCHEMA
export const popUpSchema: PopUpType = {
  popUpType: '',
}

// ACTION CREATORS
export const setPopUp = (
  popUpType: string,
  isCloseable = false
): PopUpActionTypes => setAction({ popUpType, isCloseable }, PopUpConst)

export const resetPopUp = (): PopUpActionTypes => resetAction(PopUpConst)

// REDUCER
const popUp: Reducer<PopUpType> = (state = popUpSchema) => state

// BASE SELECTORS
export const getPopUp = (state: Schema) => state.popUp

export default withItem(PopUpConst, popUp, popUpSchema)
