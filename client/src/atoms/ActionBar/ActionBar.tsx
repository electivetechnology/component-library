import React, { FunctionComponent } from 'react'
import { ActionBarContainerStyled, ActionBarStyled } from './styles'
import { theme } from 'styles/theme'

type Props = {
  colour: string
}
const ActionBar: FunctionComponent<Props> = ({ colour, children }) => {
  const themeColour = theme[colour]

  return (
    <ActionBarContainerStyled>
      <ActionBarStyled colour={themeColour}>{children}</ActionBarStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
