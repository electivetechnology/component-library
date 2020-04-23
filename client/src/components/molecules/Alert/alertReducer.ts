import schema from 'store/schema'
import { Schema } from 'store/schemaType'
import { Reducer } from 'redux'
import { resetAction, setAction, withItem } from 'utils/baseReducer'
import { AlertActionTypes, AlertConst, AlertType } from './alertType'

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
