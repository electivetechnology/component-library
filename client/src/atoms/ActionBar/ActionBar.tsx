import React, { FunctionComponent } from 'react'
import { Font } from 'atoms'
import { theme } from 'styles/theme'
import {
  ActionLeftTitleStyled,
  ActionRightTitleStyled,
  ActionBarItemsStyled
} from './styles'
import NavIcons from 'molecules/NavIcons/NavIcons'

type Props = {
  labelTitle?: string
  actionTitle?: string
  labelItems?: any
  actionItems?: any
}

const ActionBar: FunctionComponent<Props> = ({
  labelTitle,
  actionTitle,
  labelItems,
  actionItems
}) => {
  return (
    <NavIcons layout='horizontal'>
      <ActionBarItemsStyled>
        <ActionLeftTitleStyled>
          <Font variant='subtitle2' color={theme.grey}>
            {labelTitle}
          </Font>
        </ActionLeftTitleStyled>
        {labelItems}
      </ActionBarItemsStyled>
      <ActionBarItemsStyled>
        <ActionRightTitleStyled>
          <Font variant='subtitle2' color={theme.grey}>
            {actionTitle}
          </Font>
        </ActionRightTitleStyled>
        {actionItems}
      </ActionBarItemsStyled>
    </NavIcons>
  )
}

export default ActionBar
