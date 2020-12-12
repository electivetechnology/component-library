import React, { FC, useContext, Fragment } from 'react'
import {
  VerticalDividerStyled,
  HorizontalDividerStyled
} from 'molecules/NavIcons/styles'
import { navContext } from 'molecules/NavIcons/NavIcons'
import { DividerType } from 'molecules/NavIcons/base'

export const sectionContext = React.createContext({
  activeName: '',
  activeNames: [''],
  handleClick: (name: any) => {}
})

type Props = {
  divider: DividerType
}

const NavSection: FC<Props> = ({ children, divider }) => {
  const { layout } = useContext(navContext)

  const dividerStyled =
    layout === 'vertical' ? (
      <VerticalDividerStyled />
    ) : (
      <HorizontalDividerStyled />
    )

  return (
    <Fragment>
      {(divider === 'both' || divider === 'start') && dividerStyled}
      {children}
      {(divider === 'both' || divider === 'end') && dividerStyled}
    </Fragment>
  )
}

export default NavSection
