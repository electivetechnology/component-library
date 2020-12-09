import React from 'react'
import {
  NavigationContainerStyled,
  NavigationContentStyled
} from 'components/molecules/NavIcons/styles'
import { LayoutType } from 'components/molecules/NavIcons/base'

export const navContext = React.createContext({
  layout: 'vertical'
})

const { Provider } = navContext

type Props = {
  layout: LayoutType
  horizontal?: boolean
}

const NavIcons: React.FC<Props> = ({
  children,
  layout,
  horizontal = false
}) => {
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
