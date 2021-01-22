import React, { useState } from 'react'
import { TabsStyled, TabScrollStyled } from 'molecules/Tabs/styles'

export const tabContext = React.createContext({
  tabsActive: '',
  tabsReadOnly: false,
  setTabsActive: null as any
})

const { Provider } = tabContext

type Props = {
  active?: string
  readOnly?: boolean
}

const Tabs: React.FC<Props> = ({ children, active = '', readOnly = false }) => {
  const [tabsActive, setTabsActive] = useState(active)
  return (
    <Provider value={{ tabsActive, setTabsActive, tabsReadOnly: readOnly }}>
      <TabsStyled>
        <TabScrollStyled>{children}</TabScrollStyled>
      </TabsStyled>
    </Provider>
  )
}

export default Tabs
