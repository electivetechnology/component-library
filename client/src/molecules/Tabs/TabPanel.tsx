import React, { Fragment, FC, useContext } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'

interface Props {
  name: string
}

const TabPanel: FC<Props> = ({ children, name }) => {
  const { tabsActive } = useContext(tabContext)

  const active = tabsActive === name

  return active ? <Fragment>{children}</Fragment> : null
}

export default TabPanel
