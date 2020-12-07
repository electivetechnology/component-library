import React, { FC, useState } from 'react'
import { navContext } from './NavIcons'
import { DeviderStyled } from '../Navigation/styles'

const { Provider } = navContext

type Props = {
  initial: any
  position: 'start' | 'middle' | 'end'
}

const NavSection: FC<Props> = ({ children, initial, position }) => {
  const [activeId, setActiveId] = useState(initial)

  const handleClick: any = (id: any) => {
    setActiveId(id)
  }

  return (
    <Provider value={{ activeId, handleClick }}>
      {position === 'middle' || (position === 'end' && <DeviderStyled />)}
      {children}
      {position === 'middle' || (position === 'start' && <DeviderStyled />)}
    </Provider>
  )
}

export default NavSection
