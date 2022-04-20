import React, { FunctionComponent } from 'react'
import { ActionBarContainerStyled, ActionBarStyled } from './styles'
import { theme, ThemeType } from 'styles/theme'

type Props = {
  colour: string
}
const ActionBar: FunctionComponent<Props> = ({ colour, children }) => {
  return (
    <ActionBarContainerStyled>
      <ActionBarStyled colour={colour}>{children}</ActionBarStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
