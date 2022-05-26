import React, { FC, useContext, Fragment } from 'react'
import {
  VerticalDividerStyled,
  HorizontalDividerStyled,
  HorizontalBarItemsStyled,
  HorizontalLeftTitleStyled,
  HorizontalRightTitleStyled
} from 'molecules/NavIcons/styles'
import { navContext } from 'molecules/NavIcons/NavIcons'
import { DividerType } from 'molecules/NavIcons/base'
import { Font } from 'atoms'
import { theme } from 'styles/theme'
import { PositionType } from 'utils/types'

export const sectionContext = React.createContext({
  activeName: '',
  activeNames: [''],
  handleClick: (name: any) => {}
})

type Props = {
  children: React.ReactNode[]
  title?: string
  divider?: DividerType
  position?: PositionType
}

const NavSection: FC<Props> = ({ children, title, divider, position }) => {
  const { layout } = useContext(navContext)
  const horizontal = layout === 'horizontal'

  const dividerStyled = horizontal ? (
    <HorizontalDividerStyled />
  ) : (
    <VerticalDividerStyled />
  )

  const renderChildren = (
    <Fragment>
      {(divider === 'both' || divider === 'start') && dividerStyled}
      {children}
      {(divider === 'both' || divider === 'end') && dividerStyled}
    </Fragment>
  )

  const renderTitle = title && (
    <Font variant='subtitle2' color={theme.grey}>
      {title}
    </Font>
  )

  return horizontal ? (
    <HorizontalBarItemsStyled>
      {position === 'start' && (
        <HorizontalLeftTitleStyled>{renderTitle}</HorizontalLeftTitleStyled>
      )}
      {position === 'end' && (
        <HorizontalRightTitleStyled>{renderTitle}</HorizontalRightTitleStyled>
      )}
      {renderChildren}
    </HorizontalBarItemsStyled>
  ) : (
    <Fragment>
      {renderTitle}
      {renderChildren}
    </Fragment>
  )
}

export default NavSection
