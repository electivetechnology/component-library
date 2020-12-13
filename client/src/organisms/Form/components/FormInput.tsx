import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import {
  InputType,
  OptionType,
  FormContext,
  InputContext
} from 'organisms/Form/base'
import FormText from 'organisms/Form/components/FormText'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'

type Props = {
  label: string
  name: string
  value: any
  type: InputType
  options?: OptionType
}

const FormInput: FunctionComponent<Props> = ({
  label,
  name,
  value,
  type,
  options
}) => {
  const { updateInput, errors } = useContext(FormContext)

  useEffect(() => {
    updateInput(name, value)
  }, [value, name, updateInput])

  // TODO: readOnly
  // const disableInput =
  //   readOnly || (disabled && !checkPermissions) || readOnlyForm

  return (
    <InputContext.Provider
      value={{
        label,
        name,
        type,
        options,
        readOnly: false
      }}
    >
      {errors && errors[name] && <section>{errors[name]}</section>}
      {['text', 'number'].includes(type) && <FormText />}
      {options?.affix && (
        <AffixStyled>
          <Font variant='body1'>{options?.affix}</Font>
        </AffixStyled>
      )}
    </InputContext.Provider>
  )
}

export default memo(FormInput)
