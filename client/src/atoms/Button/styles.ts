import { theme } from 'styles/theme'
import styled from 'styled-components'

type WrapperProps = {
  icon?: any
  variant?: string
  hasLabel: boolean
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
    props.variant === 'quaternary' &&
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
      width: max-content;
  `};
  ${(props) =>
    !props.hasLabel &&
    `
      padding: 0;
  `};
`

type IconProps = {
  variant: string
  hasLabel: boolean
}
export const Icon = styled.div<IconProps>`
  padding-right: 8px;
  display: grid;
  align-items: center;
  ${(props) =>
    props.variant === 'mobile' &&
    `
      padding-right: 0;
  `};
  ${(props) =>
    !props.hasLabel &&
    `
      padding: 0;
      margin: auto;
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
  formRow?: boolean
}
export const ButtonComponent = styled.button<ButtonComponentProps>`
  border: none;
  padding: 8px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  ${(props) =>
    props.variant === 'primary' &&
    !props.disabled &&
    `
      color: ${theme.white};
      background-color: ${theme.primaryColor};
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
      background-color: ${theme.disabledButton};
      color: ${theme.disabledText};
      border-radius: 4px;
  `};
  ${(props) =>
    props.variant === 'secondary' &&
    !props.disabled &&
    `
      border: 1px ${theme.Gray} solid;
      color: ${theme.primaryColor};
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
      color: ${theme.primaryColor};
      border-radius: 4px;
      background-color: ${theme.white};
      &:hover {
        background-color: ${theme.secondaryHover};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }
  `};
  ${(props) =>
    props.variant === 'quaternary' &&
    !props.disabled &&
    `
      color: ${theme.secondary};
      border-radius: 4px;
      background-color: transparent;
      &:hover {
        background-color: ${theme.selected};
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
    props.variant === 'quaternary' &&
    props.disabled &&
    `
      color: ${theme.secondary};
      background-color: transparent;
      border-radius: 4px;
  `};
  ${(props) =>
    props.variant === 'fabDesktop' &&
    !props.disabled &&
    `
      color: ${theme.white};
      background-color: ${theme.primaryColor};
      border-radius: 4px;
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      &:hover {
        background-color: ${theme.primaryColor};
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
      background-color: ${theme.primaryColor};
      border-radius: 24px;
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      &:hover {
        background-color: ${theme.primaryColor};
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
  ${(props) =>
    props.fullWidth &&
    `
      width: max-content;
  `};
`
