import styled from 'styled-components'
import { theme } from 'styles/theme'

export const SelectLabelStyled = styled.div`
  width: 100%;
`

type LabelProp = {
  darkMode: boolean
}

export const LabelStyled = styled.div<LabelProp>`
  color: ${theme.grey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
  ${(props) =>
    props.darkMode &&
    `
      color: ${theme.white};
      `}
`

type SearchContainerProps = {
  disabled?: boolean
  darkMode: boolean
  error: boolean
}

export const SelectContainerStyled = styled.div<SearchContainerProps>`
  border: none;
  background-color: transparent;
  width: 100%;
  padding-top: 18px;
  border-bottom: 1px solid ${theme.highlight};
  background-color: transparent;
  width: 100%;
  height: auto;
  &:focus {
    outline: none;
    border-bottom: none;
  }
  &:hover {
    border-bottom: 1px solid ${theme.grey};
  }
  &:active {
    border-bottom: 1px solid ${theme.grey};
  }
  ${(props) =>
  props.error &&
  `
      border-bottom: 1px solid ${theme.primary};
    `}
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
      color: ${theme.disabledText};
      border-bottom: 1px dotted ${theme.highlight};
      background-color: transparent;
        &:focus {
          outline: none;
          border-bottom: 1px dotted ${theme.highlight};
        }
        &:hover {
          border-bottom: 1px dotted ${theme.highlight};
        }
        &:active {
          border-bottom: 1px dotted ${theme.highlight};
        }
    `}
`

export const SelectStyled = styled.div`
  border: 1px ${theme.Gray} solid;
`

type OptionProp = {
  isActive: boolean
  hasValue: boolean
}

export const OptionStyled = styled.div<OptionProp>`
  cursor: pointer;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${theme.shadow};
  &:hover {
    background-color: ${theme.highlight};
  }
  ${(props) =>
    props.isActive &&
    `
        font-weight: 900;
    `};
    ${(props) =>
    !props.hasValue &&
    `
        cursor: unset;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
        font-size: 12px;
        color: ${theme.grey};
    `};
`

export const OptionHeaderStyled = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  &:hover {
    background-color: ${theme.highlight};
  }
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 12px;
  color: ${theme.grey};
`

export const TagStyled = styled.div`
  border: 1px ${theme.Gray} solid;
  color: green;
`
type OptionSingleProp = {
  isActive: boolean
}
export const OptionSingleStyled = styled.div<OptionSingleProp>`
  overflow: hidden;
  ${(props) =>
    props.isActive &&
    `
      border: 1px solid ${theme.grayGeyser};
      background-color: ${theme.white};
      width: 100%;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-size: 14px;
      position: absolute;
      z-index: 2000;
    `};
`

type InputProps = {
  isActive: boolean
}

export const InputStyled = styled.div<InputProps>`
  display: inline-flex;
  width: 100%;
  position: relative;
`

export const InputIconStyled = styled.div`
  margin: auto;
`

type SearchInputProps = {
  darkMode: boolean
  hasValue: boolean
}
export const SearchInputStyled = styled.input<SearchInputProps>`
  border: none;
  font-size: 14px;
  background-color: transparent;
  width: 100%;
  &:focus {
    outline: none;
  }
  &:hover {
    border: none;
  }
  &:active {
    border: none;
  }
  ${(props) =>
    props.darkMode &&
    `
      color: ${theme.white};
    `};
  ${(props) =>
    props.hasValue &&
    `
      height: 44px;
    `};
`

export const LabelContainerStyled = styled.div`
  display: inline-flex;
`
