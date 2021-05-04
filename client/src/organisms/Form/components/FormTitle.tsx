import React, { FC, memo, useContext } from 'react'
import { Font } from 'atoms'
import { SectionTitleStyled } from 'organisms/Form/styles'
import { theme } from 'styles/theme'
import { FormContext } from '../base'

type Props = {
  label: string
}

const FormTitle: FC<Props> = ({ label }) => {
  const { darkMode } = useContext(FormContext)
  return (
    <SectionTitleStyled data-testid='FormTitle'>
      <Font variant='h6' uppercase fontWeight={500} color={darkMode ? theme.white : theme.grayComment}>
        {label}
      </Font>
    </SectionTitleStyled>
  )
}

export default memo(FormTitle)
