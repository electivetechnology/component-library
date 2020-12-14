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
  const { updateInput, statuses } = useContext(FormContext)

  useEffect(() => {
    updateInput(name, value)
  }, [value])

  // TODO: readOnly
  // const disableInput =
  //   readOnly || (disabled && !checkPermissions) || readOnlyForm

  const status = statuses && statuses[name] ? statuses[name] : null

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
      {/*TODO: timeout for success and pending? */}
      {status && status.statusType === 'error' && <section>Input is error : {status.message}</section>}
      {status && status.statusType === 'pending' && <section>Input is pending</section>}
      {status && status.statusType === 'success' && <section>Input is success</section>}
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
