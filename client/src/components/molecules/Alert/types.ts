export const ALERT = 'alert'

export type TypeType =  'success' | 'warning' | 'info' | 'error' | ''

export interface AlertType {
  type: TypeType
  message: string
}

export enum AlertConst {
  SET = '@@alert/SET',
  RESET = '@@alert/RESET',
}

interface SetAlertAction {
  type: typeof AlertConst.SET
  alertType: string
  message: string
}

interface ResetAlertAction {
  type: typeof AlertConst.RESET
}

export interface Schema {
  [ALERT]: AlertType
}

export type AlertActionTypes = SetAlertAction | ResetAlertAction
