import React, { ReactElement } from 'react'
import {
  ComponentCardFooterStyled,
  CardBorderStyled,
  ComponentCardHeaderStyled,
  CardContainerStyled,
  CardHeaderStyled
} from 'atoms/Card/styles'
import Font from 'atoms/Font/Font'
import { CardType } from 'atoms/Card/base'

type Props = {
  theme: CardType
  hover: boolean
  footer?: string
  header?: string | ReactElement
  padding?: boolean
  fullWidth?: boolean
  selected?: boolean
  fullHeight?: boolean
  noBorder?: boolean
  onClick?: any
  scroll?: boolean
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
  noBorder = false,
  scroll = false,
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
      scroll={scroll}
    >
      {header && (
        <ComponentCardHeaderStyled>
          <CardHeaderStyled>
            <Font variant='h4'>{header}</Font>
          </CardHeaderStyled>
          <CardBorderStyled />
        </ComponentCardHeaderStyled>
      )}
      {children}
      {footer && (
        <ComponentCardFooterStyled padding={padding}>
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
