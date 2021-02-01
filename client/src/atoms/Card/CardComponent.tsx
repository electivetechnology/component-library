import React from 'react'
import {
  ComponentCardFooterStyled,
  CardBorderStyled,
  ComponentCardHeaderStyled,
  CardContainerStyled
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
  onClick?: any
}
const ComponentCard: React.FC<Props> = ({
  hover,
  children,
  selected,
  onClick,
  theme = 'Primary',
  footer = false,
  header = false,
  padding = false,
  fullWidth = false,
  fullHeight = false,
  noBorder = false
}) => {
  return (
    <CardContainerStyled
      hover={hover}
      theme={theme}
      selected={selected}
      onClick={onClick}
      padding={padding}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      noBorder={noBorder}
    >
      {header && (
        <ComponentCardHeaderStyled>
          <div style={{ padding: '4px 8px 0' }}>
            <Font variant='h6'>{header}</Font>
          </div>
          <CardBorderStyled />
        </ComponentCardHeaderStyled>
      )}
      {children}
      {footer && (
        <ComponentCardFooterStyled>
          <CardBorderStyled />
          <div style={{ margin: '2px 8px' }}>
            <Font variant='caption'>{footer}</Font>
          </div>
        </ComponentCardFooterStyled>
      )}
    </CardContainerStyled>
  )
}

export default ComponentCard
