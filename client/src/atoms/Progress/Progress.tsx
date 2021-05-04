import React from 'react'
import { ProgressStyled } from './styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

type Props = {
  label: string
  progressColor: string
  progressFill?: string
}
const Progress: React.FC<Props> = ({
  label,
  progressFill = 'transparent',
  progressColor = theme.primaryColorValencia
}) => {

  return (
    <ProgressStyled borderColor={progressColor} fill={progressFill}>
      <Font variant="h5" color={progressColor} align="center">
        {label}
      </Font>
    </ProgressStyled>
  )
}

export default Progress
