import { theme } from 'styles/theme'
import styled from 'styled-components'

type WrapperProps = {
  icon?: any
  variant?: string
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2px 8px;
  ${(props) =>
    props.variant === 'mobile' &&
    `
      grid-template-columns: 1fr;
      padding-right: 0;
      @media screen and (min-width: 750px) {
        grid-template-columns: 30px 1fr;
        padding-right: 8px;
      }
  `};
  ${(props) =>
    props.variant === 'primary' &&
    `
      grid-template-columns: 1fr;
  `};
  ${(props) =>
    props.variant === 'secondary' &&
    `
      grid-template-columns: 1fr;
      padding: 2px 16px;
  `};
  ${(props) =>
    props.variant === 'tertiary' &&
    `
      grid-template-columns: 1fr;
      padding: 2px 16px;
  `};
  ${(props) =>
    props.icon &&
    `
      align-content: center;
      padding: 0 8px 0 0;
      grid-template-columns: 30px 1fr;
  `};
`

type IcronProps = {
  variant: string
}
export const Icon = styled.div<IcronProps>`
  padding-right: 8px;
  display: grid;
  align-items: center;
  ${(props) =>
    props.variant === 'mobile' &&
    `
      padding-right: 0;
  `};
`

type ButtonLabelProps = {
  variant?: string
}

export const ButtonLabel = styled.div<ButtonLabelProps>`
  margin: auto;
  text-transform: uppercase;
  ${(props) =>
    props.variant === 'mobile' &&
    `
      display: none;
      @media screen and (min-width: 750px) {
        display: grid;
      }
  `};
`

type ButtonComponentProps = {
  variant: string
  disabled: boolean
  fullWidth?: boolean
}
export const ButtonComponent = styled.button<ButtonComponentProps>`
  border: none;
  padding: 8px;
  cursor: pointer;
  ${(props) =>
    props.variant === 'primary' &&
    !props.disabled &&
    `
      color: ${theme.white};
      background-color: ${theme.primaryColorValencia};
      border-radius: 4px;
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      &:hover {
        background-color: ${theme.primaryHover};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }
  `};
  ${(props) =>
    props.variant === 'primary' &&
    props.disabled &&
    `
      background-color: ${theme.disabledGrey};
      color: ${theme.disabledTextGrey};
      border-radius: 4px;
  `};
  ${(props) =>
    props.variant === 'secondary' &&
    !props.disabled &&
    `
      border: 1px ${theme.Gray} solid;
      color: ${theme.primaryColorValencia};
      border-radius: 4px;
      background-color: ${theme.white};
      &:hover {
        background-color: ${theme.secondaryHover};
      }
  `};
  ${(props) =>
    props.variant === 'secondary' &&
    props.disabled &&
    `
      color: ${theme.Gray};
      border: 1px ${theme.Gray} solid;
      background-color: ${theme.white};
      border-radius: 4px;
  `};
  ${(props) =>
    props.variant === 'tertiary' &&
    !props.disabled &&
    `
      color: ${theme.primaryColorValencia};
      border-radius: 4px;
      background-color: ${theme.white};
      &:hover {
        background-color: ${theme.secondaryHover};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }
  `};
  ${(props) =>
    props.variant === 'tertiary' &&
    props.disabled &&
    `
      color: ${theme.Gray};
      background-color: ${theme.white};
      border-radius: 4px;
  `};
  ${(props) =>
    props.variant === 'fabDesktop' &&
    !props.disabled &&
    `
      color: ${theme.white};
      background-color: ${theme.primaryColorValencia};
      border-radius: 4px;
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      &:hover {
        background-color: ${theme.primaryColorValencia};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }
  `};
  ${(props) =>
    props.variant === 'fabDesktop' &&
    props.disabled &&
    `
      color: ${theme.secondaryGray};
      background-color: ${theme.Gray};
      border-radius: 4px;
  `};
  ${(props) =>
    props.variant === 'mobile' &&
    !props.disabled &&
    `
      color: ${theme.white};
      background-color: ${theme.primaryColorValencia};
      border-radius: 24px;
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      &:hover {
        background-color: ${theme.primaryColorValencia};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }
  `};
  ${(props) =>
    props.variant === 'mobile' &&
    props.disabled &&
    `
      display: none;
  `};
  ${(props) =>
    props.fullWidth &&
    `
      width: 100%;
  `};
`
