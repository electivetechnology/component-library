import React, { useState } from 'react'
import CardContainer from './CardContainer'
import {
  ComponentCardFooterStyled,
  CardBorderStyled,
  ComponentCardHeaderStyled
} from './styles'
import Font from '../Font/Font'

type Props = {
  theme: string
  hover: boolean
  footer?: string
  header?: string
  width: string
  height: string
}
const ComponentCard: React.FC<Props> = ({
  hover,
  children,
  theme = 'Primary',
  footer = false,
  header = false,
  width = '290px',
  height = '215px'
}) => {
  const [selected, setSelected] = useState(false)
  const onClick = () => {
    setSelected(!selected)
  }
  return (
    <CardContainer
      hover={hover}
      theme={theme}
      selected={selected}
      onClick={onClick}
      width={width}
      height={height}
    >
      {header ? (
        <ComponentCardHeaderStyled>
          <div style={{ padding: '4px 8px 0' }}>
            <Font variant='h6'>{header}</Font>
          </div>
          <CardBorderStyled />
        </ComponentCardHeaderStyled>
      ) : null}
      {children}
      {footer ? (
        <ComponentCardFooterStyled>
          <CardBorderStyled />
          <div style={{ margin: '2px 8px' }}>
            <Font variant='caption'>{footer}</Font>
          </div>
        </ComponentCardFooterStyled>
      ) : null}
    </CardContainer>
  )
}

export default ComponentCard
