import React from 'react'
import PopUp from 'molecules/PopUp/PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'
import { noCloseStore, closeStore } from 'molecules/PopUp/mocks'

export default {
  title: 'molecules/PopUp',
  component: PopUp
}

export const NoClosePopUp = () => (
  <ProviderWrapper store={noCloseStore}>
    <PopUp>Do not allow close</PopUp>
  </ProviderWrapper>
)

export const ClosePopUp = () => (
  <ProviderWrapper store={closeStore}>
    <PopUp>Allow close</PopUp>
  </ProviderWrapper>
)
