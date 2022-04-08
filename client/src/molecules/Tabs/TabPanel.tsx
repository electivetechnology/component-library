import React, { FC, useContext } from 'react'
import { TabPanelStyled } from './styles'
import { TabContext } from 'molecules/Tabs/base'

interface Props {
  name: string
}

const TabPanel: FC<Props> = ({ children, name }) => {
  const { tabsActive } = useContext(TabContext)

  const active = tabsActive === name

  return active ? <TabPanelStyled>{children}</TabPanelStyled> : null
}

export default TabPanel
