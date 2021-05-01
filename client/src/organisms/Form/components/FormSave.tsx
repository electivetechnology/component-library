import React, { FC, ReactElement, useContext } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { FormContext } from 'organisms/Form/base'
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import { Button } from 'atoms'
import { ButtonWrapperStyled } from 'organisms/Form/styles'
import { useFormSave } from 'organisms/Form/hooks'

interface Props {
  label: string
  handleSave: Function
  disabled?: boolean
  icon?: ReactElement<SvgIconProps>
  fullWidth?: boolean
}
const FormSave: FC<Props> = ({
  label,
  handleSave,
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const { handleAction } = useFormSave(handleSave)

  return (
    <ButtonWrapperStyled>
      <Button
        label={label}
        onClick={handleAction}
        icon={icon}
        theme='primary'
        disabled={disabled}
        fullWidth={fullWidth}
      />
    </ButtonWrapperStyled>
  )
}

export default FormSave
