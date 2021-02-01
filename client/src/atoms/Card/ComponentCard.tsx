import React, { useState } from 'react'
import CardContainer from 'atoms/Card/CardContainer'
import {
  ComponentCardFooterStyled,
  CardBorderStyled,
  ComponentCardHeaderStyled
} from 'atoms/Card/styles'
import Font from 'atoms/Font/Font'

type Props = {
  theme: string
  hover: boolean
  footer?: string
  header?: string
  padding?: boolean
  fullWidth?: boolean
  selected?: boolean
  fullHeight?: boolean
  noBorder?: boolean
  setSelected?: any
}
const ComponentCard: React.FC<Props> = ({
  hover,
  children,
  selected,
  setSelected,
  theme = 'Primary',
  footer = false,
  header = false,
  padding = false,
  fullWidth = false,
  fullHeight = false,
  noBorder = false
}) => {
  const onClick = () => {
    setSelected(!selected)
  }
  return (
    <CardContainer
      hover={hover}
      theme={theme}
      selected={selected}
      onClick={onClick}
      padding={padding}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      noBorder={noBorder}
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
