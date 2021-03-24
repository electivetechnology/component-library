import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Wrapper,
  Icon,
  ButtonLabel,
  ButtonComponent
} from 'atoms/Button/styles'
import { Props } from 'atoms/Button/base'

const Button: React.FC<Props> = ({
  label,
  theme = 'primary',
  disabled = false,
  onClick,
  icon,
  href,
  fullWidth
}) => {
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect to={{ pathname: href }} />
  }

  const handleClick = (event: any) => {
    onClick && onClick(event)
    href && setRedirect(true)
  }

  return (
    <ButtonComponent
      data-testid='Button'
      onClick={handleClick}
      variant={theme}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      <Wrapper icon={icon} variant={theme} hasLabel={!!label}>
        {icon && (
          <Icon variant={theme} label={!!label}>
            {icon}
          </Icon>
        )}
        <ButtonLabel variant={theme}>{label}</ButtonLabel>
      </Wrapper>
    </ButtonComponent>
  )
}

export default Button
