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
  leftTitle?: string
  rightTitle?: string
  labelItems?: any
  actionItems?: any
}

const ActionBar: FunctionComponent<Props> = ({
  leftTitle,
  rightTitle,
  labelItems,
  actionItems
}) => {
  return (
    <ActionBarContainerStyled>
      <ActionBarItemsStyled>
        <ActionLeftTitleStyled>
          <Font variant='subtitle2' color={theme.grey}>
            {leftTitle}
          </Font>
        </ActionLeftTitleStyled>
        {labelItems}
      </ActionBarItemsStyled>
      <ActionBarItemsStyled>
        <ActionRightTitleStyled>
          <Font variant='subtitle2' color={theme.grey}>
            {rightTitle}
          </Font>
        </ActionRightTitleStyled>
        {actionItems}
      </ActionBarItemsStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
