import React, { FC, useState, useEffect } from 'react'
import NavSection, { sectionContext } from 'molecules/NavIcons/NavSection'
import { DividerType } from 'molecules/NavIcons/base'
import { PositionType } from 'utils/types'

const { Provider } = sectionContext

type Props = {
  children: React.ReactNode[]
  title?: string
  initial: string
  divider?: DividerType
  position?: PositionType
}

const NavToggle: FC<Props> = ({
  children,
  title,
  initial,
  divider,
  position = 'start'
}) => {
  const [activeName, setActiveName] = useState(initial)

  useEffect(() => {
    setActiveName(initial)
  }, [initial])

  const handleClick = (name: any) => {
    setActiveName(name)
  }

  return (
    <Provider value={{ activeName, activeNames: [''], handleClick }}>
      <NavSection title={title} divider={divider} position={position}>
        {children}
      </NavSection>
    </Provider>
  )
}

export default NavToggle
