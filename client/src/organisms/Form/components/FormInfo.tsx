import React, { FC, memo, useContext } from 'react'
import { Font } from 'atoms'
import { FormContext } from '../base'
import { theme } from 'styles/theme'

type Props = {
  info: string
}
const FormInfo: FC<Props> = ({ info }) => {
  const { darkMode } = useContext(FormContext)

  return <Font variant='h4' color={darkMode ? theme.white :  theme.grey}>{info}</Font>
}

export default memo(FormInfo)
