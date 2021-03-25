import React, { FunctionComponent } from 'react'
import { LegendPointStyled, LegendStyled } from './styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

type Props = {
  label: string
  legendColor: string
  fontColor?: string
  fontWeight?: number
}
const Legend: FunctionComponent<Props> = ({
  label,
  legendColor,
  fontWeight,
  fontColor = theme.black,
}) => {
  return (
    <LegendStyled key={fontColor}>
      <LegendPointStyled color={legendColor} />
      <Font variant="h5" color={fontColor} fontWeight={fontWeight}>
        {label}
      </Font>
    </LegendStyled>
  )
}

export default Legend
