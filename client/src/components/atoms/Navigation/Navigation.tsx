import React from 'react'
import { NavigationContainerStyled, NavigationContentStyled } from './styles'

export type Props = {
  icon?: any
}

const Navigation: React.FC<Props> = ({ children }) => {
  return (
    <NavigationContainerStyled>
      <NavigationContentStyled>{children}</NavigationContentStyled>
    </NavigationContainerStyled>
  )
}

export default Navigation
