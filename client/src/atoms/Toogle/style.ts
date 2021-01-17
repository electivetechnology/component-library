import { theme } from 'styles/theme'
import styled from 'styled-components'

export const ToggleContainerStyled = styled.div`
  display: inline-flex;
`

export const ToggleLabelStyled = styled.div`
  padding: 4px 8px 0 0;
`

export const SwitchContainerStyled = styled.div`
  position: relative;
`

export const SwitchStyled = styled.label`
  cursor: pointer;
`

export const SwitchInputStyled = styled.input`
  opacity: 0;
`

type SwitchTextProp = {
  checked?: boolean
}

export const SwitchTextContainerStyled = styled.span<SwitchTextProp>`
  height: 24px;
  width: 56px;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  position: absolute;
  top: 0;
  border: 1px solid ${theme.toggleGrey};
  padding: 0 4px;
  ${(props) =>
    props.checked &&
    `
      border: 1px solid ${theme.primaryColorValencia};
    `};
`

type SwitchTextStyledProp = {
  checked: boolean
}

export const SwitchTextStyled = styled.div<SwitchTextStyledProp>`
  margin-left: auto;
  ${(props) =>
    props.checked &&
    `
      margin-left: unset;
    `};
`

type SwitchHandleProp = {
  checked: boolean
}

export const SwitchHandleStyled = styled.span<SwitchHandleProp>`
  height: 20px;
  width: 20px;
  border-radius: 18px;
  display: block;
  margin: 2px;
  padding: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
  transition-property: transform;
  background-color: ${theme.toggleGrey};
  ${(props) =>
    props.checked &&
    `
      background-color: ${theme.primaryColorValencia};
      transform: translateX(32px);
    `};
`
