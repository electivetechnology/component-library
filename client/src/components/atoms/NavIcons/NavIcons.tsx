import React from 'react'
import { NavigationContainerStyled, NavigationContentStyled } from './styles'

export const navContext = React.createContext({
  activeId: '',
  handleClick: (id: any) => {}
})

type Props = {
  layout: 'vertical' | 'horizontal'
}

const NavIcons: React.FC<Props> = ({ children, layout }) => {
  return (
    <NavigationContainerStyled>
      <NavigationContentStyled>{children}</NavigationContentStyled>
    </NavigationContainerStyled>
  )
}

export default NavIcons
