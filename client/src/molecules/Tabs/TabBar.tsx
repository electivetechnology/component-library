import React, { Children } from 'react'
import { TabBarStyled } from './styles'

const TabBar: React.FC = ({ children }) => {
  const count = Children.count(children)

  const grid = new Array(count + 1).join('auto ')

  return <TabBarStyled columns={grid}>{children}</TabBarStyled>
}

export default TabBar
