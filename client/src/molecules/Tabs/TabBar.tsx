import React from 'react'
import { TabBarStyled } from './styles'

type Props = {
  columns?: string
}

const TabBar: React.FC<Props> = ({ children, columns }) => {
  return <TabBarStyled columns={columns}>{children}</TabBarStyled>
}

export default TabBar
