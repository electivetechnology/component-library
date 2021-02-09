import React, { FC, useContext } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'
import { TabPanelStyled } from './styles'

interface Props {
  name: string
}

const TabPanel: FC<Props> = ({ children, name }) => {
  const { tabsActive } = useContext(tabContext)

  const active = tabsActive === name

  return active ? <TabPanelStyled>{children}</TabPanelStyled> : null
}

export default TabPanel
