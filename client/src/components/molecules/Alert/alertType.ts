export interface AlertType {
  alertType: 'success' | 'warning' | 'info' | 'error' | ''
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

export type AlertActionTypes = SetAlertAction | ResetAlertAction
