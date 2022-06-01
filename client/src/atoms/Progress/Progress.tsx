import React from 'react'
import { ProgressStyled } from './styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

type Props = {
  label: string
  progressColor: string
  progressFill?: string
  borderColor: string
}
const Progress: React.FC<Props> = ({
  label,
  borderColor = theme.primaryColor,
  progressFill = 'transparent',
  progressColor = theme.primaryColor
}) => {
  return (
    <ProgressStyled borderColor={borderColor} fill={progressFill}>
      <Font variant='body1' color={progressColor} align='center'>
        {label}
      </Font>
    </ProgressStyled>
  )
}

export default Progress
