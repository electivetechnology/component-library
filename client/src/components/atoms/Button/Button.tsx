import React from 'react'
import {
  Wrapper,
  Icon,
  mobileStyles,
  ButtonLabel,
  ButtonComponent
} from './styles'
import { Props } from './base'

const Button: React.FC<Props> = ({
  label,
  theme = 'primary',
  disabled = false,
  onClick,
  icon,
  href
}) => {
  return (
    <ButtonComponent
      data-testid='Button'
      onClick={onClick}
      variant={theme}
      disabled={disabled}
    >
      <Wrapper icon={icon} variant={theme}>
        {icon && <Icon variant={theme}>{icon}</Icon>}
        <ButtonLabel variant={theme}>{label}</ButtonLabel>
      </Wrapper>
    </ButtonComponent>
  )
}

export default Button
