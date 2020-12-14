import { Reducer } from 'redux'
import schema from 'molecules/Alert/schema'
import { resetAction, setAction, withItem } from 'utils/baseReducer'
import {
  AlertActionTypes,
  AlertConst,
  AlertType,
  Schema
} from 'molecules/Alert/types'

// ACTION CREATORS
export const setAlert = (
  alertType: string,
  message: string
): AlertActionTypes => setAction({ alertType, message }, AlertConst)

export const resetAlert = (): AlertActionTypes => resetAction(AlertConst)

// REDUCER
const alert: Reducer<AlertType> = (state = schema.alert) => state

// BASE SELECTORS
export const getAlert = (state: Schema) => state.alert

export default withItem(AlertConst, alert, schema.alert)
