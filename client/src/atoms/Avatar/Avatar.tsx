import React, { FunctionComponent } from 'react'
import MaterialAvatar from '@mui/material/Avatar'
import { theme } from 'styles/theme'
import { useStyles } from 'atoms/Avatar/styles'

type Props = {
  color?: string
  fontWeight?: number
  height?: string
  width?: string
}

const Avatar: FunctionComponent<Props> = ({
  children,
  color = theme.secondary,
  fontWeight = 100,
  height,
  width
}) => {
  const classes = useStyles({ color, fontWeight, height, width })

  return (
    <MaterialAvatar data-testid='Avatar' className={classes.component}>
      {children}
    </MaterialAvatar>
  )
}

export default Avatar
