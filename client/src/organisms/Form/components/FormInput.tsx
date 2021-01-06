import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import {
  InputType,
  OptionType,
  FormContext,
  InputContext, FormOptionType
} from 'organisms/Form/base'
import FormText from 'organisms/Form/components/FormText'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import FormSelect from 'organisms/Form/components/FormSelect'

type Props = {
  label: string
  name: string
  value: any
  type: InputType
  selectOptions?: Array<FormOptionType>
  options?: OptionType
  readOnly?: boolean
}

const FormInput: FunctionComponent<Props> = ({
  label,
  name,
  value,
  type,
  options,
  readOnly
}) => {
  // TODO: controlled components error when deleting value
  const { updateInput, readOnlyForm } = useContext(FormContext)

  useEffect(() => {
    updateInput(name, value)
  }, [value])

  return (
    <InputContext.Provider
      value={{
        label,
        name,
        type,
        options,
        disabled: readOnly || readOnlyForm
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
