import React, { useContext, FC, cloneElement } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'
import { TabStyled } from 'molecules/Tabs/styles'

interface Props {
  name: string
  isActive?: boolean
  onClick?: any
  onHover?: any
  readOnly?: boolean
}

const Tab: FC<Props> = ({ name, isActive, onClick, onHover,readOnly }) => {
  const { tabsActive, tabsReadOnly } = useContext(tabContext)

  const active = tabsActive === name || isActive ? 'active' : 'inactive'

  const disabled = tabsReadOnly || readOnly ? 'disabled' : 'enabled'

  return (
    <TabStyled onClick={onClick} onMouseEnter={onHover}>
      <h4>{name}</h4>
      <p>isActive: {active}</p>
      <p>readOnly: {disabled}</p>
    </TabStyled>
  )
}

export default Tab
