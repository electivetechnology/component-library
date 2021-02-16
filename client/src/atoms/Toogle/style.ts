import { theme } from 'styles/theme'
import styled from 'styled-components'

export const ToggleContainerStyled = styled.div`
  display: inline-flex;
  margin-left: auto;
`

export const ToggleLabelStyled = styled.div`
  padding: 4px 8px 0 0;
`

export const SwitchContainerStyled = styled.div`
  position: relative;
  width: 46px;
`

export const SwitchStyled = styled.label`
  cursor: pointer;
  width: inherit;
`

export const SwitchInputStyled = styled.input`
  opacity: 0;
  width: inherit;
`

type SwitchTextProp = {
  checked?: boolean
  disabled: boolean
}

export const SwitchTextContainerStyled = styled.span<SwitchTextProp>`
  height: 24px;
  min-width: 56px;
  width: max-content;
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
  ${(props) =>
    props.disabled &&
    !props.checked &&
    `
      border: 1px solid ${theme.dividerGrey};
    `};
  ${(props) =>
    props.disabled &&
    props.checked &&
    `
      border: 1px solid ${theme.secondaryHover};
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
  disabled: boolean
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
  ${(props) =>
    props.disabled &&
    !props.checked &&
    `
      background-color: ${theme.dividerGrey};
    `};
  ${(props) =>
    props.disabled &&
    props.checked &&
    `
      background-color: ${theme.secondaryHover};
    `};
`
