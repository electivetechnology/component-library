import styled from 'styled-components'
import { theme } from 'styles/theme'

export const SelectContainerStyled = styled.div`
  border: 1px ${theme.Gray} solid;
`

export const SelectStyled = styled.div`
  border: 1px ${theme.Gray} solid;
`

type OptionProp = {
  isActive: boolean
}

export const OptionStyled = styled.div<OptionProp>`
  cursor: pointer;
  border: 1px ${theme.Gray} solid;
  ${(props) =>
    props.isActive &&
    `
        color: green;
    `};
`

export const OptionHeaderStyled = styled.div`
  border: 1px ${theme.Gray} solid;
`

export const TagStyled = styled.div`
  border: 1px ${theme.Gray} solid;
  color: green;
`
type OptionSingleProp = {
  isActive: boolean
}
export const OptionSingleStyled = styled.div<OptionSingleProp>`
  ${(props) =>
  !props.isActive &&
  `
        overflow: hidden;
    `};
`

type SearchInputProps = {
  disabled?: boolean
  darkMode: boolean
  error: boolean
}

export const SearchInputStyled = styled.input<SearchInputProps>`
  border: none;
  font-size: 14px;
  border-bottom: 1px solid ${theme.dividerGrey};
  background-color: transparent;
  width: 100%;
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


