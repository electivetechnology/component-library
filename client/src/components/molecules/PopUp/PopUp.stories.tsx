import React from 'react'
import PopUp from 'components/molecules/PopUp/PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'
import { action } from '@storybook/addon-actions'

export default {
  title: 'molecules/PopUp',
  component: PopUp,
}

const refreshStore = [
  {
    key: 'popUp',
    value: { popUpType: 'refresh' },
  },
]

export const RefreshPopUp = () => (
  <ProviderWrapper store={refreshStore}>
    <PopUp>
      Refresh Token content
    </PopUp>
  </ProviderWrapper>
)
