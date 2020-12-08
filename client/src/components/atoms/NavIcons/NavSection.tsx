import React, { FC, useContext, Fragment } from 'react'
import { VerticalDividerStyled, HorizontalDividerStyled } from './styles'
import { navContext } from './NavIcons'
import { DividerType } from 'components/atoms/NavIcons/base'

export const sectionContext = React.createContext({
  activeId: '',
  activeIds: [''],
  handleClick: (id: any) => () => {}
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
