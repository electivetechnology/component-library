import React, { FunctionComponent, memo, useContext } from 'react'
import { Font } from 'electivegroup-component-library-2'
import { FormContext } from 'organisms/Form/base'
import { theme } from 'styles/theme'

type Props = {
  info: string
}
const FormInfo: FunctionComponent<Props> = ({ info }) => {
  const { darkMode } = useContext(FormContext)

  return <Font variant='h4' color={darkMode ? theme.white :  theme.grey}>{info}</Font>
}

export default memo(FormInfo)
