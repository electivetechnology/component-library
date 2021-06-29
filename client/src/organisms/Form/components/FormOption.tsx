import React, { FC, memo, useContext } from 'react'
import { Option, OptionHeader } from 'molecules/Select'

type Props = {
  type: 'header' | 'option'
  label: string
  value?: string
}
const FormSelect: FC<Props> = ({ type, label, value = '' }) => {
  if (type === 'option') {
    return <Option option={{ label, value }} />
  }
  return <OptionHeader label='Initial set' />
}
export default memo(FormSelect)
