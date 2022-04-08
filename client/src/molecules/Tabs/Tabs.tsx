import React, { useState } from 'react'
import { TabsStyled, TabScrollStyled } from 'molecules/Tabs/styles'
import { TabContext } from 'molecules/Tabs/base'

type Props = {
  active?: string
}

const Tabs: React.FC<Props> = ({ children, active = '' }) => {
  const [tabsActive, setTabsActive] = useState(active)
  return (
    <TabContext.Provider value={{ tabsActive, setTabsActive }}>
      <TabsStyled>
        <TabScrollStyled>{children}</TabScrollStyled>
      </TabsStyled>
    </TabContext.Provider>
  )
}

export default Tabs
