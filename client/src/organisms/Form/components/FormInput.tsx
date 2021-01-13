import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import {
  InputType,
  OptionType,
  FormContext,
  InputContext,
  FormOptionType
} from 'organisms/Form/base'
import FormText from 'organisms/Form/components/FormText'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import FormSelect from 'organisms/Form/components/FormSelect'
import isUndefined from 'lodash/isUndefined'

type Props = {
  label: string
  name: string
  value: any
  type: InputType
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
  options,
  readOnly,
  outlined
}) => {
  const { updateInput, readOnlyForm, outlineInputs } = useContext(FormContext)

  useEffect(() => {
    updateInput(name, value)
  }, [value])

  const noOutlineBoth = !outlined && !outlineInputs
  const noOutlineInput = !isUndefined(outlined) && !outlined

  let applyOutline = !(noOutlineBoth || noOutlineInput)

  return (
    <InputContext.Provider
      value={{
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

      {options?.affix && (
        <AffixStyled>
          <Font variant='body1'>{options?.affix}</Font>
        </AffixStyled>
      )}
    </InputContext.Provider>
  )
}

export default memo(FormInput)
