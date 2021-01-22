import React from 'react'
import { TabsStyled, TabScrollStyled } from 'molecules/Tabs/styles'

export const tabContext = React.createContext({ tabsActive: '', tabsReadOnly: false })

const { Provider } = tabContext

type Props = {
  active?: string
  readOnly?: boolean
}

const Tabs: React.FC<Props> = ({ children, active = '', readOnly = false }) => {
  return (
    <Provider value={{ tabsActive: active, tabsReadOnly: readOnly }}>
      <TabsStyled>
        <TabScrollStyled>{children}</TabScrollStyled>
      </TabsStyled>
    </Provider>
  )
}

export default Tabs
