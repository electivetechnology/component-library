import React from 'react'
import {
  NavigationContainerStyled,
  NavigationContentStyled
} from 'molecules/NavIcons/styles'
import { LayoutType } from 'molecules/NavIcons/base'

export const navContext = React.createContext({
  layout: 'vertical'
})

const { Provider } = navContext

type Props = {
  layout: LayoutType
}

const NavIcons: React.FC<Props> = ({ children, layout }) => {
  const horizontal = layout === 'horizontal'
  return (
    <Provider value={{ layout }}>
      <NavigationContainerStyled horizontal={horizontal}>
        <NavigationContentStyled horizontal={horizontal}>
          {children}
        </NavigationContentStyled>
      </NavigationContainerStyled>
    </Provider>
  )
}

export default NavIcons
