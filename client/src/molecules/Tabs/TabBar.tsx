import React from 'react'
import { TabBarStyled } from './styles'

type Props = {}

const TabBar: React.FC<Props> = ({ children }) => {
  return <TabBarStyled>{children}</TabBarStyled>
}

export default TabBar
