import React, { FunctionComponent, memo } from 'react'
import { theme } from 'styles/theme'
import Font from 'atoms/Font/Font'
import {
  ToggleContainerStyled,
  ToggleLabelStyled,
  SwitchContainerStyled,
  SwitchStyled,
  SwitchInputStyled,
  SwitchHandleStyled,
  SwitchTextContainerStyled,
  SwitchTextStyled
} from './style'

type Props = {
  isActive: boolean
  onChange: any
  label?: string
  activeLabel?: string
  inactiveLabel?: string
  disabled?: boolean
}

const Toggle: FunctionComponent<Props> = ({
  isActive,
  onChange,
  label,
  activeLabel,
  inactiveLabel,
  disabled = false
}) => {
  const fontColor = (disabled: boolean, isActive: boolean) => {
    if (isActive && !disabled) {
      return theme.primaryColorValencia
    } else if (isActive && disabled) {
      return theme.secondaryHover
    } else if (!isActive && !disabled) {
      return theme.primaryGrey
    } else {
      return theme.disabledTextGrey
    }
  }

  return (
    <ToggleContainerStyled>
      <ToggleLabelStyled>
        <Font variant='body2'>{label}</Font>
      </ToggleLabelStyled>
      <SwitchContainerStyled>
        <SwitchStyled>
          <SwitchInputStyled onClick={disabled ? null : onChange} readOnly />
          <SwitchTextContainerStyled checked={isActive} disabled={disabled}>
            <SwitchTextStyled checked={isActive}>
              <Font variant='body2' color={fontColor(disabled, isActive)}>
                {isActive ? activeLabel : inactiveLabel}
              </Font>
            </SwitchTextStyled>
          </SwitchTextContainerStyled>
          <SwitchHandleStyled checked={isActive} disabled={disabled} />
        </SwitchStyled>
      </SwitchContainerStyled>
    </ToggleContainerStyled>
  )
}

export default memo(Toggle)
