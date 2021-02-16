import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import { FormContext, InputContext, InputProps } from 'organisms/Form/base'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import isUndefined from 'lodash/isUndefined'
import FormDownload from 'organisms/Form/components/FormDownload'
import FormColourPicker from 'organisms/Form/components/FormColourPicker'
import FormText from 'organisms/Form/components/FormText'
import FormSelect from 'organisms/Form/components/FormSelect'
import FormPhone from 'organisms/Form/components/FormPhone'
import FormDate from 'organisms/Form/components/FormDate'
import FormCheckbox from 'organisms/Form/components/FormCheckbox'
import FormToggle from 'organisms/Form/components/FormToggle'
import FormHelper from 'organisms/Form/components/FormHelper'

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
  required
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
        requiredError
      }}
    >
      {['text', 'number'].includes(type) && <FormText />}
      {type === 'select' && <FormSelect />}
      {type === 'phone' && <FormPhone />}
      {type === 'date' && <FormDate />}
      {type === 'colourPicker' && <FormColourPicker />}
      {type === 'checkbox' && <FormCheckbox />}
      {type === 'toggle' && <FormToggle />}

      <FormHelper helperText={helperText} />

      {affix && (
        <AffixStyled>
          <Font variant='body1'>{affix}</Font>
        </AffixStyled>
      )}

      {download && <FormDownload label={label} value={value} />}
    </InputContext.Provider>
  )
}

export default memo(FormInput)
