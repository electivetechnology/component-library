import React from 'react'
import PopUp from 'components/molecules/PopUp/PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'
import { refreshStore } from './mocks'

export default {
  title: 'molecules/PopUp',
  component: PopUp,
}

export const RefreshPopUp = () => (
  <ProviderWrapper store={refreshStore}>
    <PopUp>
      Refresh Token content
    </PopUp>
  </ProviderWrapper>
)
