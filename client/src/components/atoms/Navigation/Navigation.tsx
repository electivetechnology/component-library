import React from 'react'
import { NavigationContainerStyled, NavigationContentStyled } from './styles'

const Navigation: React.FC = ({ children }) => {
  return (
    <NavigationContainerStyled>
      <NavigationContentStyled>{children}</NavigationContentStyled>
    </NavigationContainerStyled>
  )
}

export default Navigation
