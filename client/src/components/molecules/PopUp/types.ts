export const POPUP = 'popUp'

export interface PopUpType {
  popUpType: string
  isCloseable?: boolean
  pageData?: object
}

export enum PopUpConst {
  SET = '@@popUp/SET',
  RESET = '@@popUp/RESET',
}

interface SetPopUpAction {
  type: typeof PopUpConst.SET
  popUpType: string
  isCloseable?: boolean
}

interface ResetPopUpAction {
  type: typeof PopUpConst.RESET
}

export interface Schema {
  [POPUP]: PopUpType
}

export type PopUpActionTypes = SetPopUpAction | ResetPopUpAction
