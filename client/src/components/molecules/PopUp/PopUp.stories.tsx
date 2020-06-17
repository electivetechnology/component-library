import React from 'react'
import PopUp from 'components/molecules/PopUp/PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'
import { PopUpType, POPUP } from './popUpType'

export default {
  title: 'molecules/PopUp',
  component: PopUp,
}

const popUpStore = (value: PopUpType) => [
  {
    key: POPUP,
    value
  }
]

const refreshStore = popUpStore({ type: 'refresh' })

export const RefreshPopUp = () => (
  <ProviderWrapper store={refreshStore}>
    <PopUp>
      Refresh Token content
    </PopUp>
  </ProviderWrapper>
)
