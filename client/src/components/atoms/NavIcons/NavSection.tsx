import React, { FC, useState } from 'react'
import { navContext } from './NavIcons'
import { DeviderStyled } from './styles'

const { Provider } = navContext

type Props = {
  initial: any
  divider: 'start' | 'both' | 'end'
}

const NavSection: FC<Props> = ({ children, initial, divider }) => {
  const [activeId, setActiveId] = useState(initial)

  const handleClick: any = (id: any) => {
    setActiveId(id)
  }

  return (
    <Provider value={{ activeId, handleClick }}>
      {(divider === 'both' || divider === 'start') && <DeviderStyled />}
      {children}
      {(divider === 'both' || divider === 'end') && <DeviderStyled />}
    </Provider>
  )
}

export default NavSection
