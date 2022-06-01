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
  children: any
  theme: CardType
  hover?: boolean
  footer?: string
  header?: string
  padding?: boolean
  fullWidth?: boolean
  selected?: boolean
  fullHeight?: boolean
  noBorder?: boolean
  onClick?: any
  scroll?: boolean
  headerContent?: ReactElement
  height?: string
  width?: string
  overflow?: boolean
  headerVariant?: boolean
}
const ComponentCard: React.FC<Props> = ({
  hover,
  children,
  selected,
  onClick,
  headerContent,
  height,
  width,
  theme = 'Primary',
  footer = false,
  header = false,
  padding = false,
  fullWidth = false,
  fullHeight = false,
  noBorder = false,
  scroll = false,
  overflow = false,
  headerVariant = 'h4'
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
      height={height}
      width={width}
      showOverflow={overflow}
    >
      {header || headerContent ? (
        <ComponentCardHeaderStyled>
          <CardHeaderStyled>
            {header && <Font variant={headerVariant}>{header}</Font>}
            {headerContent && headerContent}
          </CardHeaderStyled>
          <CardBorderStyled />
        </ComponentCardHeaderStyled>
      ) : (
        ''
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
