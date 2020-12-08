import React, { useContext, FC, cloneElement } from 'react'
import { navContext } from 'components/molecules/NavIcons/NavIcons'
import { sectionContext } from 'components/molecules/NavIcons/NavSection'
import { IconStyled } from 'components/molecules/NavIcons/styles'
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
  name: string
}

const NavIcon: FC<Props> = ({ children, name }) => {
  const { activeName, activeNames, handleClick } = useContext(sectionContext)
  const { layout } = useContext(navContext)

  const selected = activeName === name || activeNames.includes(name)

  const classes = iconStyles({ selected })

  const childrenStyled = cloneElement(children, { className: classes.Icon })

  const placement = layout === 'vertical' ? 'right' : 'bottom'

  return (
    <IconStyled selected={selected} onClick={handleClick(name)}>
      <Tooltip title={name} placement={placement}>
        {childrenStyled}
      </Tooltip>
    </IconStyled>
  )
}

export default NavIcon
