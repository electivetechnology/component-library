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
  content?: any
  footer?: string
  header?: string
}
const ComponentCard: React.FC<Props> = ({
  hover,
  content,
  theme = 'Primary',
  footer = false,
  header = false
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
    >
      {header ? (
        <ComponentCardHeaderStyled>
          <div style={{ padding: '4px 8px 0' }}>
            <Font variant='h6'>{header}</Font>
          </div>
          <CardBorderStyled />
        </ComponentCardHeaderStyled>
      ) : null}
      {content}
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
