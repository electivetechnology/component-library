import React, { FunctionComponent, memo, ReactElement } from 'react'
import { ActionTextStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

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
  return (
    <ActionTextStyled data-testid='FormAction' onClick={handleAction}>
      <Font variant={'h6'}>{label}</Font>
      {icon && icon}
    </ActionTextStyled>
  )
}

export default memo(FormAction)
