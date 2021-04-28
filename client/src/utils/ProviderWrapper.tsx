import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createInitialStore } from 'setupTests'

type Props = {
  children: ReactNode
  store: any
}

const ProviderWrapper: FC<Props> = ({ children, store }) => (
  <Provider store={createInitialStore(store)}>{children}</Provider>
)

export default ProviderWrapper
