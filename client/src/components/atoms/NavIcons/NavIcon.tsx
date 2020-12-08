import React, { useContext, FC, cloneElement } from 'react'
import { navContext } from './NavIcons'
import { sectionContext } from './NavSection'
import { IconStyled } from './styles'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'styles/theme'

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
}

const NavIcon: FC<Props> = ({ children, id, toolTipText }) => {
  const { activeId, handleClick } = useContext(sectionContext)
  const { layout } = useContext(navContext)

  const selectNav = () => {
    handleClick(id)
  }

  const selected = activeId === id

  const classes = iconStyles({ selected })

  const childrenStyled = cloneElement(children, { className: classes.Icon })

  const placement = layout === 'vertical' ? 'right' : 'bottom'

  return (
    <IconStyled selected={selected} onClick={selectNav}>
      <Tooltip title={toolTipText} placement={placement}>
        {childrenStyled}
      </Tooltip>
    </IconStyled>
  )
}

export default NavIcon
