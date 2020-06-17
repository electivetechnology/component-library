import { Reducer } from 'redux'
import schema from './schema'
import { resetAction, setAction, withItem } from 'utils/baseReducer'
import {
  PopUpActionTypes,
  PopUpConst,
  PopUpType,
  Schema,
} from './types'

// ACTION CREATORS
export const setPopUp = (
  popUpType: string,
  message: string
): PopUpActionTypes => setAction({ popUpType, message }, PopUpConst)

export const resetPopUp = (): PopUpActionTypes => resetAction(PopUpConst)

// REDUCER
const popUp: Reducer<PopUpType> = (state = schema.popUp) => state

// BASE SELECTORS
export const getPopUp = (state: Schema) => state.popUp

export default withItem(PopUpConst, popUp, schema.popUp)
