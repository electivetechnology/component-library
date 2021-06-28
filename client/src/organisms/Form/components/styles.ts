import styled from "styled-components"
import { theme } from "styles/theme"

type InputProps = {
  darkMode: boolean
  disabled: boolean
}
export const InputStyled = styled.div<InputProps>`
  display: inline-flex;
  width: 100%;
  border-bottom: 1px solid ${theme.dividerGrey};
  &:hover {
    outline: none;
    border-bottom: 1px solid ${theme.grey};
  }
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid ${theme.dividerGrey};
  }
  ${(props) =>
    props.darkMode &&
    `
      border: none;
      color: ${theme.white};
      border-bottom: 1px solid ${theme.grey};
      background-color: transparent;
        &:hover {
          border-bottom: 1px solid ${theme.white};
        }
        &:active {
          border-bottom: 1px solid ${theme.white};
        }
    `}
  ${(props) =>
    props.disabled &&
    `
    border: none;
    color: ${theme.disabledTextGrey};
    border-bottom: 1px dotted ${theme.dividerGrey};
    background-color: transparent;
      &:focus {
        outline: none;
        border-bottom: 1px dotted ${theme.dividerGrey};
      }
      &:hover {
        border-bottom: 1px dotted ${theme.dividerGrey};
      }
      &:active {
        border-bottom: 1px dotted ${theme.dividerGrey};
      }
    `}
`

type SearchIconProps = {
  centerAlign: boolean
}

export const SearchIconStyled = styled.div<SearchIconProps>`
  position: relative;
  top: 12px;
  ${(props) =>
    props.centerAlign &&
    `
      margin: auto;
    `}
`

type SelectInputProps = {
  disabled: boolean
  darkMode: boolean
}

export const SelectInputStyled = styled.input<SelectInputProps>`
  font-size: 14px;
  border: none;
  height: 44px;
  width: 100%;
  color: ${theme.black};
  background-color: ${theme.white};
  &::-webkit-calendar-picker-indicator {
    opacity: 100;
  }
  &:focus-visible {
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    `
      background-color: transparent;
      &:hover {
        outline: none;
      }
  `};
  ${(props) =>
    props.darkMode &&
    `
      background-color: transparent;
      &:hover {
        outline: none;
      }
  `};
`

type SelectDropdownProps = {
  active: boolean
}

export const SelectDropdownStyled = styled.div<SelectDropdownProps>`
  display: none;
  box-shadow: 0px 3px 5px ${theme.borderGrey};
  height: 180px;
  overflow: scroll;
  background-color: ${theme.white};
  position: absolute;
  width: 98%;
  top: 64px;
  ${(props) =>
    props.active &&
    `
      display: block;
  `};
`

export const OptionsStyled = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  &:hover {
    background-color: ${theme.dividerGrey};
  }
`

export const FormSelectStyled = styled.div`
  display: inline-flex;
  width: 100%;
  &:focus-visible {
    outline: none;
  }
`

export const SelectDeleteStyled = styled.div`
`

export const SelectLabelStyled = styled.div`
  width: 100%;
`

export const LabelStyled = styled.div`
  color: ${theme.grey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
`
