import React, { FunctionComponent, memo } from 'react'
import { Font } from 'components/atoms'

type Props = {
  info: string
}
const FormInfo: FunctionComponent<Props> = ({ info }) => {
  return <Font variant='h4'>{info}</Font>
}

export default memo(FormInfo)
