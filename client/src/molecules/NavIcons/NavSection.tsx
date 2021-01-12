import React, { FC, useContext, Fragment } from 'react'
import {
  VerticalDividerStyled,
  HorizontalDividerStyled
} from 'molecules/NavIcons/styles'
import { navContext } from 'molecules/NavIcons/NavIcons'
import { DividerType } from 'molecules/NavIcons/base'
import {
  ActionBarItemsStyled,
  ActionLeftTitleStyled
} from 'atoms/ActionBar/styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

export const sectionContext = React.createContext({
  activeName: '',
  activeNames: [''],
  handleClick: (name: any) => {}
})

type Props = {
  title?: string
  divider?: DividerType
}

const NavSection: FC<Props> = ({ children, title, divider }) => {
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
    <ActionBarItemsStyled>
      <ActionLeftTitleStyled>{renderTitle}</ActionLeftTitleStyled>
      {renderChildren}
    </ActionBarItemsStyled>
  ) : (
    <Fragment>
      {renderTitle}
      {renderChildren}
    </Fragment>
  )
}

export default NavSection
