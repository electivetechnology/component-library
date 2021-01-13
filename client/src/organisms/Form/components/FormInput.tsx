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
import { FormColourPicker, FormText, FormSelect } from 'organisms/Form'

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
  readOnly?: boolean
  outlined?: boolean
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
  readOnly,
  outlined
}) => {
  const { updateInput, readOnlyForm, outlineInputs, inputs } = useContext(
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
        disabled: readOnly || readOnlyForm,
        outlined: applyOutline
      }}
    >

      {['text', 'number'].includes(type) && <FormText />}
      {type === 'select' && <FormSelect />}
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
