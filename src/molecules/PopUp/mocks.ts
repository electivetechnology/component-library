import { POPUP, PopUpType } from 'molecules/PopUp/types'

const popUpStore = (value: PopUpType) => [
  {
    key: POPUP,
    value
  }
]

export const noCloseStore = popUpStore({
  popUpType: 'refresh',
  isCloseable: false
})
export const closeStore = popUpStore({
  popUpType: 'privacy',
  isCloseable: true
})
