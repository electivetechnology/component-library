import React, { FunctionComponent } from 'react'
import MaterialButton from '@material-ui/core/Button'
import { betaStyles, primaryStyles, secondaryStyles, useStyles, Wrapper, Icon } from 'components/atoms/Button/styles'

type Props = {
  text: any
  theme: string
  disabled?: boolean
  onClick?: any
  fullWidth?: boolean
  width?: number
  icon?: any
  href?: string
  hasChildren?: boolean
  btnWidth?: string
  borderRadius?: string
  textTransform?: any
}

const Button: FunctionComponent<Props> = ({
  text,
  theme = 'primary',
  disabled = false,
  onClick = null,
  fullWidth = false,
  width,
  icon,
  href,
  children,
  hasChildren,
  btnWidth,
  borderRadius,
  textTransform,
}) => {
  const variant = theme === 'primary' ? 'contained' : 'outlined'
  const themeStyle =
    theme === 'primary'
      ? primaryStyles
      : theme === 'secondary'
      ? secondaryStyles
      : theme === 'beta'
      ? betaStyles
      : {}
  const classes = useStyles({ themeStyle, width })

  return (
    <MaterialButton
      data-testid="Button"
      variant={variant}
      disabled={disabled}
      className={classes.component}
      onClick={onClick}
      fullWidth={fullWidth}
      href={href}
      style={{
        width: btnWidth,
        borderRadius: borderRadius,
        textTransform: textTransform,
      }}>
      <Wrapper icon={icon} hasChildren={hasChildren}>
        {icon ? <Icon>{icon}</Icon> : ''}
        {children}
        {text}
      </Wrapper>
    </MaterialButton>
  )
}

export default Button
