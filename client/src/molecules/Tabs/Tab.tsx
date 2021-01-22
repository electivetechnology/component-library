import React, { useContext, FC, useEffect } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'
import { TabStyled } from 'molecules/Tabs/styles'

interface Props {
  name: string
  isActive?: boolean
  onClick?: any
  onHover?: any
  readOnly?: boolean
}

const Tab: FC<Props> = ({ name, isActive, onClick, onHover, readOnly }) => {
  const { tabsActive, setTabsActive, tabsReadOnly } = useContext(tabContext)

  useEffect(() => {
    isActive && setTabsActive(name)
  }, [])

  const active = tabsActive === name ? 'active' : 'inactive'

  const disabled = tabsReadOnly || readOnly ? 'disabled' : 'enabled'

  const handleClick = () => {
    setTabsActive(name)
    onClick && onClick()
  }

  return (
    <TabStyled onClick={handleClick} onMouseEnter={onHover}>
      <h4>{name}</h4>
      <p>isActive: {active}</p>
      <p>readOnly: {disabled}</p>
    </TabStyled>
  )
}

export default Tab
