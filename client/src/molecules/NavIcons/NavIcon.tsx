import React, { useContext, FC, cloneElement, Fragment } from 'react'
import { navContext } from 'molecules/NavIcons/NavIcons'
import { sectionContext } from 'molecules/NavIcons/NavSection'
import {
  IconStyled,
  iconStyles,
  NavIconMenuStyled
} from 'molecules/NavIcons/styles'
import Tooltip from '@material-ui/core/Tooltip'

type Props = {
  children: any
  name: string
  handleUpdate: Function
  roundIcon?: boolean
  menu?: boolean
  menuContent?: any
  showMenu?: boolean
  setShowMenu?: any
}

const NavIcon: FC<Props> = ({
  children,
  name,
  handleUpdate,
  menu = false,
  menuContent,
  roundIcon,
  setShowMenu,
  showMenu,
}) => {
  const { activeName, activeNames, handleClick } = useContext(sectionContext)
  const { layout } = useContext(navContext)
  const horizontal = layout === 'horizontal'

  const selected = activeName === name || activeNames.includes(name)

  const classes = iconStyles({ selected, horizontal, roundIcon })

  const childrenStyled = cloneElement(children, { className: classes.Icon })

  const placement = horizontal ? 'bottom' : 'right'

  const onClick = () => {
    handleUpdate()
    handleClick(name)
    menu && setShowMenu(!showMenu)
  }

  return (
    <Fragment>
      <IconStyled
        selected={!roundIcon && selected}
        onClick={onClick}
        horizontal={horizontal}
        roundIcon={roundIcon}
      >
        <Tooltip title={name} placement={placement}>
          {childrenStyled}
        </Tooltip>
      </IconStyled>
      {menu && showMenu && <NavIconMenuStyled>{menuContent}</NavIconMenuStyled>}
    </Fragment>
  )
}

export default NavIcon
