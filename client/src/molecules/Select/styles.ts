import styled from 'styled-components'
import { theme } from 'styles/theme'

export const SelectLabelStyled = styled.div`
  width: 100%;
`

export const LabelStyled = styled.div`
  color: ${theme.grey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
`

type SearchContainerProps = {
  disabled?: boolean
  darkMode: boolean
  error: boolean
}

export const SelectContainerStyled = styled.div<SearchContainerProps>`
  border: none;
  border-bottom: 1px solid ${theme.dividerGrey};
  background-color: transparent;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid ${theme.dividerGrey};
  background-color: transparent;
  width: 100%;
  height: auto;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.grey};
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
      border-bottom: 1px solid ${theme.primaryRed};
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
  color: ${theme.black};
  &:hover {
    background-color: ${theme.dividerGrey};
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
    background-color: ${theme.dividerGrey};
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
      box-shadow: 0px 1px 3px ${theme.grayGeyser};
      background-color: ${theme.white};
      width: 100%;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-size: 14px;
    `};
`

type InputProps = {
  isActive: boolean
}

export const InputStyled = styled.div<InputProps>`
  display: inline-flex;
  width: 100%;
`

export const InputIconStyled = styled.div`
  margin: auto;
`

type SearchInputProps = {
  darkMode: boolean
}
export const SearchInputStyled = styled.input<SearchInputProps>`
  border: none;
  font-size: 14px;
  background-color: transparent;
  width: 100%;
  height: 44px;
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
`


