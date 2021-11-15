import React, { FunctionComponent } from 'react'
import { ActionBarTheme } from './base'
import { ActionBarStyled } from './styles'

type Props = {
  theme: ActionBarTheme
}

const ActionBar: FunctionComponent<Props> = ({
  theme,
  children
}) => {

  return (
    <ActionBarStyled theme={theme}>
      {children}
    </ActionBarStyled>
  )
}

export default ActionBar
