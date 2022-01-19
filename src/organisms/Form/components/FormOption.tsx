import React, { FC, memo, useContext } from 'react'
import { Option, OptionHeader } from 'electivegroup-component-library-2'

type Props = {
  type: 'header' | 'option'
  label: string
  value?: string
}
const FormOption: FC<Props> = ({ type, label, value = '' }) => {
  if (type === 'option') {
    return <Option label={label} value={value} />
  }
  return <OptionHeader label='Initial set' />
}
export default memo(FormOption)
