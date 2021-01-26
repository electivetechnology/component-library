import React, { FC, useContext } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'

interface Props {
  name: string
}

const TabPanel: FC<Props> = ({ children, name }) => {
  const { tabsActive } = useContext(tabContext)

  const active = tabsActive === name

  return active ? <div>{children}</div> : null
}

export default TabPanel
