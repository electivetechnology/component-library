import React, { FunctionComponent, memo } from 'react'
import { FormText } from 'components/organisms/Form'

type Props = {
  input: any
}

const FormInputTypes: FunctionComponent<Props> = ({ input }) => {
  const {
    name,
    type,
    label,
    readOnly,
    disabled,
    textFieldType,
    id,
    copy
  } = input

  const textFields = ['text', 'number']
  if (textFields.includes(type)) {
    return (
      <FormText
        type={type}
        name={name}
        input={input}
        readOnly={false}
        textFieldType={textFieldType}
        copy={copy}
      />
    )
  }

  return null
}

export default memo(FormInputTypes)
