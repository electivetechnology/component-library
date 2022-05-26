import React, { Children } from 'react'
import { TabBarStyled } from 'molecules/Tabs/styles'
import { useTabBar } from 'molecules/Tabs/base'

type Props = {
  children: any
}

const TabBar: React.FC<Props> = ({ children }) => {
  const { grid } = useTabBar(children)

  return <TabBarStyled columns={grid}>{children}</TabBarStyled>
}

export default TabBar
