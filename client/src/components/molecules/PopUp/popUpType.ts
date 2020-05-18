export interface PopUpType {
  popUpType: string
}

export enum PopUpConst {
  SET = '@@popUp/SET',
  RESET = '@@popUp/RESET',
}

interface SetPopUpAction {
  type: typeof PopUpConst.SET
  popUpType: string
}

interface ResetPopUpAction {
  type: typeof PopUpConst.RESET
}

export interface Schema {
  popUp: PopUpType
}

export type PopUpActionTypes = SetPopUpAction | ResetPopUpAction
