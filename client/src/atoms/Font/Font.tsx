import React, { FunctionComponent } from 'react'
import Typography from '@material-ui/core/Typography'
import { useStyles } from 'atoms/Font/styles'
import { ThemeProvider } from '@material-ui/styles'
import { appTheme } from 'styles/theme'

type Props = {
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
  multilineOverflow
}) => {
  const classes = useStyles({
    color,
    uppercase,
    overflow,
    fontWeight,
    multilineOverflow
  })

  return (
    <ThemeProvider theme={appTheme}>
      <Typography
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
    </ThemeProvider>
  )
}

export default Font
