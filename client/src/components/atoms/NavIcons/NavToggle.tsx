import React, { FC, useState } from 'react'
import NavSection, { sectionContext } from './NavSection'
import { DividerType } from 'components/atoms/NavIcons/base'

const { Provider } = sectionContext

type Props = {
  initial: string
  divider: DividerType
}

const NavToggle: FC<Props> = ({ children, initial, divider }) => {
  const [activeId, setActiveId] = useState(initial)

  const handleClick = (id: any) => () => {
    setActiveId(id)
  }

  return (
    <Provider value={{ activeId, activeIds: [''], handleClick }}>
      <NavSection divider={divider}>{children}</NavSection>
    </Provider>
  )
}

export default NavToggle
