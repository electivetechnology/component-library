import React, { FunctionComponent } from 'react'
import { ActionBarTheme } from './base'
import { ActionBarContainerStyled, ActionBarStyled } from './styles'

type Props = {
  theme: ActionBarTheme
}

const ActionBar: FunctionComponent<Props> = ({
  theme,
  children
}) => {

  return (
    <ActionBarContainerStyled>
      <ActionBarStyled theme={theme}>
        {children}
      </ActionBarStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
