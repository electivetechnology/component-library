import React, { FunctionComponent, memo } from 'react'
import { Font } from 'components/atoms'
import { SectionTitleStyled } from './styles'
import { theme } from 'styles/theme'

type Props = {
  label: string
}

const FormTitle: FunctionComponent<Props> = ({ label }) => {
  return (
    <SectionTitleStyled data-testid='FormTitle'>
      <Font variant='h6' uppercase fontWeight={500} color={theme.grayComment}>
        {label}
      </Font>
    </SectionTitleStyled>
  )
}

export default memo(FormTitle)
