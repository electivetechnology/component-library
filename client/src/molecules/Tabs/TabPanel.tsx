import React, { FC, useContext } from 'react'
import { TabPanelStyled } from 'molecules/Tabs/styles'
import { TabContext } from 'molecules/Tabs/base'

interface Props {
  children: JSX.Element
  name: string
}

const TabPanel: FC<Props> = ({ children, name }) => {
  const { tabsActive } = useContext(TabContext)

  const active = tabsActive === name

  return active ? <TabPanelStyled>{children}</TabPanelStyled> : null
}

export default TabPanel
