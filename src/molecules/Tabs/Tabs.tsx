import React, { useState } from 'react'
import { TabsStyled, TabScrollStyled } from 'molecules/Tabs/styles'

export const tabContext = React.createContext({
  tabsActive: '',
  setTabsActive: null as any
})

const { Provider } = tabContext

type Props = {
  active?: string
}

const Tabs: React.FC<Props> = ({ children, active = '' }) => {
  const [tabsActive, setTabsActive] = useState(active)
  return (
    <Provider value={{ tabsActive, setTabsActive }}>
      <TabsStyled>
        <TabScrollStyled>{children}</TabScrollStyled>
      </TabsStyled>
    </Provider>
  )
}

export default Tabs
