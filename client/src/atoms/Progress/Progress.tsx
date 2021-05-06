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
  borderColor = theme.primaryColorValencia,
  progressFill = 'transparent',
  progressColor = theme.primaryColorValencia
}) => {

  return (
    <ProgressStyled borderColor={borderColor} fill={progressFill}>
      <Font variant="body1" color={progressColor} align="center">
        {label}
      </Font>
    </ProgressStyled>
  )
}

export default Progress
