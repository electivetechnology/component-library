import React from 'react'
import MaterialButton from '@material-ui/core/Button'
import { useStyles, Wrapper, Icon } from './styles'
import { Props, getVariant, getThemeStyles } from './base'

const Button: React.FC<Props> = ({
  label,
  theme = 'primary',
  disabled = false,
  onClick ,
  icon,
  href,
  fullWidth = false,
  width
}) => {
  const variant = getVariant(theme)
  const themeStyles = getThemeStyles(theme)

  const classes = useStyles({ themeStyles, width })

  // TODO: what is needed for these?
  const btnWidth = undefined
  const borderRadius = undefined
  const textTransform = undefined

  return (
    <MaterialButton
      data-testid='Button'
      variant={variant}
      disabled={disabled}
      className={classes.component}
      onClick={onClick}
      fullWidth={fullWidth}
      href={href}
      style={{
        width: btnWidth,
        borderRadius: borderRadius,
        textTransform: textTransform
      }}
    >
      <Wrapper icon={icon}>
        {icon && <Icon>{icon}</Icon>}
        {label}
      </Wrapper>
    </MaterialButton>
  )
}

export default Button
