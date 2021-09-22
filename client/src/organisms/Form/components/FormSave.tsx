import React, { FunctionComponent, ReactElement } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { Button } from 'atoms'
import { ButtonWrapperStyled } from 'organisms/Form/styles'
import { useFormSave } from 'organisms/Form/hooks'
import { ThemeType } from 'atoms/Button/base'

interface Props {
  label: string
  handleSave: Function
  disabled?: boolean
  icon?: ReactElement<SvgIconProps>
  fullWidth?: boolean
  buttonTheme?: ThemeType
  formRow?: boolean
}
const FormSave: FunctionComponent<Props> = ({
  label,
  handleSave,
  disabled = false,
  icon,
  fullWidth = false,
  buttonTheme = 'primary',
  formRow = false
}) => {
  const { handleAction } = useFormSave(handleSave)

  return (
    <ButtonWrapperStyled isRow={formRow}>
      <Button
        label={label}
        onClick={handleAction}
        icon={icon}
        theme={buttonTheme}
        disabled={disabled}
        fullWidth={fullWidth}
      />
    </ButtonWrapperStyled>
  )
}

export default FormSave
