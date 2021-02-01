import React, { useContext, FC, useEffect } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'
import { TabStyled } from 'molecules/Tabs/styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

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
  const { tabsActive, setTabsActive } = useContext(tabContext)

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
      onClick={handleClick}
      onMouseEnter={onHover}
      active={active}
      darkMode={darkMode}
    >
      <Font
        variant='body2'
        uppercase
        color={darkMode ? theme.white : theme.black}
      >
        {name}
      </Font>
    </TabStyled>
  )
}

export default Tab
