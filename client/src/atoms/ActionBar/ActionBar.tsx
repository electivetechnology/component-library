import React, { FunctionComponent } from 'react'
import { Font } from 'atoms'
import { theme } from 'styles/theme'
import {
  ActionBarContainerStyled,
  ActionLeftTitleStyled,
  ActionRightTitleStyled,
  ActionBarItemsStyled
} from './styles'

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
    <ActionBarContainerStyled>
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
    </ActionBarContainerStyled>
  )
}

export default ActionBar
