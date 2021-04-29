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
  fullWidth,
  hidden= false
}) => {
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect to={{ pathname: href }} />
  }

  const handleClick = (event: any) => {
    onClick(event)
    href && setRedirect(true)
  }

  const hasLabel = !!label

  return (
    <ButtonComponent
      data-testid='Button'
      onClick={handleClick}
      variant={theme}
      disabled={disabled}
      fullWidth={fullWidth}
      hidden={hidden}
    >
      <Wrapper icon={icon} variant={theme} hasLabel={hasLabel}>
        {icon && (
          <Icon variant={theme} label={hasLabel}>
            {icon}
          </Icon>
        )}
        <ButtonLabel variant={theme}>{label}</ButtonLabel>
      </Wrapper>
    </ButtonComponent>
  )
}

export default Button
