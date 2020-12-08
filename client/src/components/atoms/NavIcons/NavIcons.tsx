import React from 'react'
import { NavigationContainerStyled, NavigationContentStyled } from './styles'

export const navContext = React.createContext({
  layout: 'vertical'
})

const { Provider } = navContext

type Props = {
  layout: 'vertical' | 'horizontal'
}

const NavIcons: React.FC<Props> = ({ children, layout }) => {
  return (
    <Provider value={{ layout }}>
      <NavigationContainerStyled>
        <NavigationContentStyled>{children}</NavigationContentStyled>
      </NavigationContainerStyled>
    </Provider>
  )
}

export default NavIcons
