import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
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
  formRow,
  togglePosition,
  selected = false
}) => {
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Navigate to={{ pathname: href }} />
  }

  const handleClick = (event: any) => {
    onClick(event)
    href && setRedirect(true)
  }

  const hasLabel = !!label

  const selectedToggleButton = !!(theme === 'toggle' && selected)

  return (
    <ButtonComponent
      aria-label={label ? label : 'Button'}
      data-testid='Button'
      onClick={handleClick}
      variant={theme}
      disabled={disabled}
      fullWidth={fullWidth}
      formRow={formRow}
      togglePosition={togglePosition}
      selected={selectedToggleButton}
    >
      <Wrapper icon={icon} variant={theme} hasLabel={hasLabel}>
        {icon && (
          <Icon variant={theme} hasLabel={hasLabel}>
            {icon}
          </Icon>
        )}
        <ButtonLabel variant={theme}>{label}</ButtonLabel>
      </Wrapper>
    </ButtonComponent>
  )
}

export default Button
