import React, { useContext, FC, cloneElement } from 'react'
import { navContext } from 'molecules/NavIcons/NavIcons'
import { sectionContext } from 'molecules/NavIcons/NavSection'
import { IconStyled } from 'molecules/NavIcons/styles'
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
  handleUpdate: Function
  roundIcon?: boolean
}

const NavIcon: FC<Props> = ({
  children,
  name,
  handleUpdate,
  roundIcon
}) => {
  const { activeName, activeNames, handleClick } = useContext(sectionContext)
  const { layout } = useContext(navContext)

  const selected = activeName === name || activeNames.includes(name)

  const classes = iconStyles({ selected })

  const childrenStyled = cloneElement(children, { className: classes.Icon })

  const placement = layout === 'vertical' ? 'right' : 'bottom'

  const onClick = () => {
    handleUpdate()
    handleClick(name)
  }

  return (
    <IconStyled
      horizontal={layout === 'horizontal'}
      selected={selected}
      onClick={onClick}
      roundIcon={roundIcon}
    >
      <Tooltip
        title={name}
        placement={placement}
      >
        {childrenStyled}
      </Tooltip>
    </IconStyled>
  )
}

export default NavIcon
