import React, { FC, useContext, useState } from 'react'
import { VerticalDividerStyled, HorizontalDividerStyled } from './styles'
import { navContext } from './NavIcons'

export const sectionContext = React.createContext({
  activeId: '',
  handleClick: (id: any) => {}
})

const { Provider } = sectionContext

type Props = {
  initial: any
  divider: 'start' | 'both' | 'end'
}

const NavSection: FC<Props> = ({ children, initial, divider }) => {
  const { layout } = useContext(navContext)
  const [activeId, setActiveId] = useState(initial)

  const handleClick: any = (id: any) => {
    setActiveId(id)
  }

  const dividerStyled =
    layout === 'vertical' ? (
      <VerticalDividerStyled />
    ) : (
      <HorizontalDividerStyled />
    )

  return (
    <Provider value={{ activeId, handleClick }}>
      {(divider === 'both' || divider === 'start') && dividerStyled}
      {children}
      {(divider === 'both' || divider === 'end') && dividerStyled}
    </Provider>
  )
}

export default NavSection
