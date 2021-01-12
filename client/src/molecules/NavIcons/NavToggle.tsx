import React, { FC, useState } from 'react'
import NavSection, { sectionContext } from 'molecules/NavIcons/NavSection'
import { DividerType } from 'molecules/NavIcons/base'

const { Provider } = sectionContext

type Props = {
  title?: string
  initial: string
  divider?: DividerType
}

const NavToggle: FC<Props> = ({ children,title, initial, divider }) => {
  const [activeName, setActiveName] = useState(initial)

  const handleClick = (name: any) => {
    setActiveName(name)
  }

  return (
    <Provider value={{ activeName, activeNames: [''], handleClick }}>
      <NavSection title={title} divider={divider}>{children}</NavSection>
    </Provider>
  )
}

export default NavToggle
