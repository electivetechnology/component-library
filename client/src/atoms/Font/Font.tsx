import React, { FunctionComponent } from 'react'
import Typography from '@mui/material/Typography'
import { useStyles } from 'atoms/Font/styles'

type Props = {
  children?: any
  variant: any
  component?: any
  gutterBottom?: boolean
  align?: any
  inline?: any
  color?: any
  overflow?: boolean
  fontWeight?: number
  uppercase?: boolean
  multilineOverflow?: boolean
  wrap?: boolean
}

const Font: FunctionComponent<Props> = ({
  variant = 'body1',
  component,
  gutterBottom = false,
  children,
  align = 'left',
  inline = 'false',
  color,
  overflow = false,
  fontWeight,
  uppercase = false,
  multilineOverflow,
  wrap = false
}) => {
  const classes = useStyles({
    color,
    uppercase,
    overflow,
    fontWeight,
    multilineOverflow,
    wrap
  })
  return (
    <Typography
      data-qa='font'
      data-testid='Font'
      variant={variant}
      component={component}
      gutterBottom={gutterBottom}
      align={align}
      inline={inline}
      className={`${classes.component}`}
    >
      {children}
    </Typography>
  )
}

export default Font
