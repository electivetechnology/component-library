import React from 'react'
import { NavigationContainerStyled, NavigationContentStyled } from 'components/molecules/NavIcons/styles'
import { LayoutType } from 'components/molecules/NavIcons/base'

export const navContext = React.createContext({
  layout: 'vertical'
})

const { Provider } = navContext

type Props = {
  layout: LayoutType
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
