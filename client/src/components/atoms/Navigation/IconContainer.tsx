import React, { cloneElement, useState, FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { IconStyled } from './styles'
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "styles/theme";

type Props = {
  children: JSX.Element
  toolTipText: string
  placement: any
}

export const iconStyles = makeStyles({
  Icon: (props: any) => ({
    fill: props.selected ? theme.white : theme.primaryGrey,
    margin: 'auto'
  }),
})

const IconContainer: FC<Props> = ({
  children,
  toolTipText,
  placement,
}) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  const classes = iconStyles({ selected })

  const childrenStyled =
    cloneElement(children, { className:  classes.Icon })

  return (
    <IconStyled selected={selected} onClick={handleClick}>
      <Tooltip title={toolTipText} placement={placement}>
        {childrenStyled}
      </Tooltip>
    </IconStyled>
  )
}

export default IconContainer
