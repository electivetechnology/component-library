import React, { FC, ReactElement, useContext } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { FormContext } from 'organisms/Form/base'
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import { Button } from 'atoms'
import { ButtonWrapperStyled } from 'organisms/Form/styles'

interface Props {
  label: string
  handleSave: any
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
  const { inputs, requiredErrors, updateRequired } = useContext(FormContext)

  const handleAction = () => {
    const hasErrors = Object.keys(requiredErrors).filter((inputName: any) => {
      const inputValue = inputs[inputName]
      const error = isEmpty(inputValue) || isNull(inputValue)

      updateRequired(inputName, error)

      return error
    })

    handleSave(isEmpty(hasErrors) ? inputs : false)
  }

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
