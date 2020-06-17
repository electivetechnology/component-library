import { POPUP, PopUpType } from './types'

const popUpStore = (value: PopUpType) => [
  {
    key: POPUP,
    value
  }
]

export const refreshStore = popUpStore({ type: 'refresh' })
