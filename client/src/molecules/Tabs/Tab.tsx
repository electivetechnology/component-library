import React, { useContext, FC, useEffect } from 'react'
import { TabStyled } from 'molecules/Tabs/styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'
import { TabContext, TabGroupContext } from 'molecules/Tabs/base'

interface Props {
  name: string
  isActive?: boolean
  onClick?: any
  onHover?: any
  readOnly?: boolean
  darkMode?: boolean
}

const Tab: FC<Props> = ({
  name,
  isActive,
  onClick,
  onHover,
  darkMode = false
}) => {
  const { tabsActive, setTabsActive } = useContext(TabContext)
  const { colour } = useContext(TabGroupContext)

  useEffect(() => {
    isActive && setTabsActive(name)
  }, [])

  const active = tabsActive === name ? 'active' : 'inactive'

  const handleClick = () => {
    setTabsActive(name)
    onClick && onClick()
  }

  return (
    <TabStyled
      colour={colour ? colour : theme.secondary}
      onClick={handleClick}
      onMouseEnter={onHover}
      onTouchStart={onHover}
      active={active}
      darkMode={darkMode}
    >
      <Font
        variant='body2'
        uppercase
        color={darkMode ? theme.white : theme.grey}
      >
        {name}
      </Font>
    </TabStyled>
  )
}

export default Tab
