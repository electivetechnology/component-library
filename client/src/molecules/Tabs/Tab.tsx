import React, { useContext, FC, useEffect } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'
import { TabStyled } from 'molecules/Tabs/styles'
import { Font } from 'atoms'

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
    <TabStyled onClick={handleClick} onMouseEnter={onHover} active={active}>
      <Font variant='body2' uppercase>
        {name}
      </Font>
    </TabStyled>
  )
}

export default Tab
