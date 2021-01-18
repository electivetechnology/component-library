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
  setIsActive: any
  label?: string
  activeLabel?: string
  deactiveLabel?: string
}

const Toggle: FunctionComponent<Props> = ({
  isActive,
  setIsActive,
  label,
  activeLabel,
  deactiveLabel
}) => {
  const onToggle = () => setIsActive(!isActive)

  return (
    <ToggleContainerStyled>
      <ToggleLabelStyled>
        <Font variant='body2'>{label}</Font>
      </ToggleLabelStyled>
      <SwitchContainerStyled>
        <SwitchStyled>
          <SwitchInputStyled onClick={onToggle} />
          <SwitchTextContainerStyled checked={isActive}>
            <SwitchTextStyled checked={isActive}>
              <Font
                variant='body2'
                color={
                  isActive ? theme.primaryColorValencia : theme.primaryGrey
                }
              >
                {isActive ? activeLabel : deactiveLabel}
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
