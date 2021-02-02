import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import {
  InputType,
  OptionType,
  FormContext,
  InputContext,
  FormOptionType
} from 'organisms/Form/base'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import isUndefined from 'lodash/isUndefined'
import FormDownload from 'organisms/Form/components/FormDownload'
import FormColourPicker from 'organisms/Form/components/FormColourPicker'
import FormText from 'organisms/Form/components/FormText'
import FormSelect from 'organisms/Form/components/FormSelect'
import FormPhone from 'organisms/Form/components/FormPhone'

type Props = {
  label: string
  name: string
  value: any
  type: InputType
  affix?: string
  helperText?: string
  download?: boolean
  selectOptions?: Array<FormOptionType>
  options?: OptionType
  outlined?: boolean
  disabled?: boolean
}

const FormInput: FunctionComponent<Props> = ({
  label,
  name,
  value,
  type,
  affix,
  helperText,
  download,
  options,
  outlined,
  disabled
}) => {
  const { updateInput, disableForm, outlineInputs, inputs } = useContext(
    FormContext
  )

  useEffect(() => {
    updateInput(name, value)
  }, [value])

  const noOutlineBoth = !outlined && !outlineInputs
  const noOutlineInput = !isUndefined(outlined) && !outlined

  let applyOutline = !(noOutlineBoth || noOutlineInput)

  return (
    <InputContext.Provider
      value={{
        inputValue: inputs[name] ? inputs[name] : '',
        label,
        name,
        type,
        options,
        disabled: disabled || disableForm,
        outlined: applyOutline
      }}
    >
      {['text', 'number'].includes(type) && <FormText />}
      {type === 'select' && <FormSelect />}
      {type === 'phone' && <FormPhone />}
      {type === 'colourPicker' && <FormColourPicker />}

      {affix && (
        <AffixStyled>
          <Font variant='body1'>{affix}</Font>
        </AffixStyled>
      )}

      {helperText && (
        <AffixStyled>
          <Font variant='body1'>{helperText}</Font>
        </AffixStyled>
      )}

      {download && <FormDownload label={label} value={value} />}
    </InputContext.Provider>
  )
}

export default memo(FormInput)
