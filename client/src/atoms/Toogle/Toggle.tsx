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
  disabled
}) => {
  return (
    <ToggleContainerStyled>
      <ToggleLabelStyled>
        <Font variant='body2'>{label}</Font>
      </ToggleLabelStyled>
      <SwitchContainerStyled>
        <SwitchStyled>
          <SwitchInputStyled onClick={onChange} />
          <SwitchTextContainerStyled checked={isActive}>
            <SwitchTextStyled checked={isActive}>
              <Font
                variant='body2'
                color={
                  isActive ? theme.primaryColorValencia : theme.primaryGrey
                }
              >
                {isActive ? activeLabel : inactiveLabel}
              </Font>
            </SwitchTextStyled>
          </SwitchTextContainerStyled>
          <SwitchHandleStyled checked={isActive}></SwitchHandleStyled>
        </SwitchStyled>
      </SwitchContainerStyled>
    </ToggleContainerStyled>
  )
}

export default memo(Toggle)
