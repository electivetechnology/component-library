import React, { useContext, FC, cloneElement } from 'react'
import { navContext } from './NavIcons'
import { IconStyled } from './styles'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../../../styles/theme'

export const iconStyles = makeStyles({
  Icon: (props: any) => ({
    fill: props.selected ? theme.white : theme.primaryGrey,
    margin: 'auto'
  })
})

type Props = {
  children: any
  id: any
  toolTipText: any
  placement: any
}

const NavIcon: FC<Props> = ({ children, id, toolTipText, placement }) => {
  const { activeId, handleClick } = useContext(navContext)
  function selectNav() {
    handleClick(id)
  }

  const selected = activeId === id

  const classes = iconStyles({ selected })

  const childrenStyled = cloneElement(children, { className: classes.Icon })

  return (
    <IconStyled selected={selected} onClick={selectNav}>
      <Tooltip title={toolTipText} placement={placement}>
        {childrenStyled}
      </Tooltip>
    </IconStyled>
  )
}

export default NavIcon
