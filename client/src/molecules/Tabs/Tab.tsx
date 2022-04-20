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
  const { colour, activeColour } = useContext(TabGroupContext)

  useEffect(() => {
    isActive && setTabsActive(name)
  }, [])

  const isActiveTab = tabsActive === name

  const handleClick = () => {
    setTabsActive(name)
    onClick && onClick()
  }

  const textColour = darkMode
    ? theme.white
    : isActiveTab
    ? theme.black
    : theme.grey

  return (
    <TabStyled
      colour={colour ? colour : theme.secondary}
      onClick={handleClick}
      onMouseEnter={onHover}
      onTouchStart={onHover}
      isActiveTab={isActiveTab}
      activeColour={activeColour}
      darkMode={darkMode}
    >
      <Font variant='body2' uppercase color={textColour}>
        {name}
      </Font>
    </TabStyled>
  )
}

export default Tab
