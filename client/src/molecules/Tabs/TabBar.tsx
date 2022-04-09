import React, { Children } from 'react'
import { TabBarStyled } from './styles'
import { useTabBar } from 'molecules/Tabs/base'

const TabBar: React.FC = ({ children }) => {
  const { grid } = useTabBar(children)

  return <TabBarStyled columns={grid}>{children}</TabBarStyled>
}

export default TabBar
