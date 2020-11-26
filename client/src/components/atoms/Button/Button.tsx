import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Wrapper, Icon, ButtonLabel, ButtonComponent } from './styles'
import { Props } from './base'

const Button: React.FC<Props> = ({
  label,
  theme = 'primary',
  disabled = false,
  onClick,
  icon,
  href
}) => {
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect to={{ pathname: href }} />
  }

  const handleClick = (event: any) => {
    onClick(event)
    setRedirect(true)
  }

  return (
    <ButtonComponent
      data-testid='Button'
      onClick={handleClick}
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
