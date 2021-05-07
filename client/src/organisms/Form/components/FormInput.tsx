import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import { FormContext, InputContext, InputProps } from 'organisms/Form/base'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import isUndefined from 'lodash/isUndefined'
import FormDownload from 'organisms/Form/components/FormDownload'
import FormHelper from 'organisms/Form/components/FormHelper'
import FormInputs from './FormInputs'
import FormRow from './FormRow'

const FormInput: FunctionComponent<InputProps> = ({
  label,
  name,
  value,
  type,
  affix,
  helperText,
  download,
  options,
  outlined,
  disabled,
  required,
                                                    handleDelete
}) => {
  const {
    updateInput,
    disableForm,
    outlineInputs,
    inputs,
    statuses,
    requiredErrors
  } = useContext(FormContext)

  useEffect(() => {
    updateInput(name, value)
  }, [value])

  const noOutlineBoth = !outlined && !outlineInputs
  const noOutlineInput = !isUndefined(outlined) && !outlined

  let applyOutline = !(noOutlineBoth || noOutlineInput)

  const requiredError = requiredErrors[name] && requiredErrors[name]

  return (
    <InputContext.Provider
      value={{
        inputValue: inputs[name] ? inputs[name] : '',
        label,
        name,
        type,
        options,
        disabled: disabled || disableForm,
        required,
        outlined: applyOutline,
        status: statuses && statuses[name] && statuses[name],
        requiredError,
        handleDelete
      }}
    >

      {download? (
        <FormRow>
          <FormInputs type={type} />
          {download && <FormDownload label={label} value={value} />}
        </FormRow>
      ) : (
        <FormInputs type={type} />
      )}

      <FormHelper helperText={helperText} />

      {affix && (
        <AffixStyled>
          <Font variant='body1'>{affix}</Font>
        </AffixStyled>
      )}
    </InputContext.Provider>
  )
}

export default memo(FormInput)
