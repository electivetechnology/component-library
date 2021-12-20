import React, { FunctionComponent, memo, ReactElement, useContext } from 'react'
import { ActionTextStyled } from 'organisms/Form/styles'
import { Font } from 'electivegroup-component-library-v2'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { theme } from 'styles/theme'
import { FormContext } from 'organisms/Form/base'

interface Props {
  label: string
  handleAction: any
  icon?: ReactElement<SvgIconProps>
}
const FormAction: FunctionComponent<Props> = ({
  label,
  handleAction,
  icon
}) => {
  const { darkMode } = useContext(FormContext)

  return (
    <ActionTextStyled data-testid='FormAction' onClick={handleAction}>
      <Font variant={'h6'} color={darkMode ? theme.white : theme.secondary}>{label}</Font>
      {icon && icon}
    </ActionTextStyled>
  )
}

export default memo(FormAction)
