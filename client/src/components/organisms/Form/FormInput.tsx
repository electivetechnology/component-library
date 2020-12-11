import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import {
  InputType,
  OptionType,
  FormContext,
  InputContext
} from 'components/organisms/Form/base'
import { FormText } from 'components/organisms/Form'
import {
  AffixStyled,
  FlexibilityWrapperStyled
} from 'components/organisms/Form/styles'
import { Font } from 'components/atoms'

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
  const { dispatch } = useContext(FormContext)

  useEffect(() => {
    dispatch({ type: 'add', name, value })
  }, [value])

  return (
    <InputContext.Provider
      value={{
        label,
        name,
        type,
        options
      }}
    >
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
