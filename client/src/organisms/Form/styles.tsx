import styled from 'styled-components'
import { theme } from 'styles/theme'

type FormTextStyledProps = {
  margin?: string
}

export const FormTextStyled = styled.div<FormTextStyledProps>`
  ${(props) =>
    props.margin &&
    `
    margin: ${props.margin}
    @media screen and (min-width: 750px) {
      margin: 0;
    }
  `}
`

export const SectionTitleStyled = styled.div`
  border-top: 1px solid ${theme.grayGeyser}
  padding-top: 4px;
  margin-top: 8px;
`

type ActionProps = {
  isDelete?: boolean
  margin?: string
}

export const ActionButtonStyled = styled.div<ActionProps>`
  cursor: pointer;
  margin-top: auto;
  top: 26px;
  position: relative;
  padding: 8px;
  ${(props) =>
    props.isDelete &&
    `
      top: -18px;
      @media screen and (min-width: 750px) {
        top: 32px;
      }
    `}
`

export const ActionTextStyled = styled.div<ActionProps>`
  cursor: pointer;
  margin-top: auto;
  top: -32px;
  position: relative;
  padding: 8px;
  @media screen and (min-width: 750px) {
    top: 24px;
  }
`

type Props = {
  isEmbeddedForm?: boolean
}

export const FormWrapperStyled = styled.div<Props>`
  ${(props) =>
    !props.isEmbeddedForm &&
    `
      padding: 8px 24px;
      grid-row-gap: 16px;
    `}
`

type InputContainerProps = {
  width?: number
  isEmbeddedForm?: boolean
  isTitle?: boolean
  textList?: boolean
}

export const InputContainerStyled = styled.div<InputContainerProps>`
  padding: 0;
  @media screen and (min-width: 750px) {
    padding-bottom: 8px;
  }
  ${(props) =>
    props.isTitle &&
    `
      padding-top: 8px;
    `}
  ${(props) =>
    props.textList &&
    `
      padding-bottom: 16px !important;
    `}
  ${(props) =>
    props.width &&
    `
      width: 100%;
      @media screen and (min-width: 750px) {
        width: ${props.width}%;
      }
      display: inline-flex;
      @media screen and (min-width: 750px) {
        padding: 0 8px 0 0;
      }
    `}
  ${(props) =>
    props.isEmbeddedForm &&
    `
      @media screen and (min-width: 750px) {
        padding-bottom: 0;
      }
    `}
`

export const FlexibilityWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 16px;
  align-items: center;
`

export const AffixStyled = styled.div`
  margin-top: 24px;
`
export const DateWrapperStyled = styled.div`
  position: relative;
  margin-top: 16px;
`

// TODO: use font component?
export const DateLabelStyled = styled.div`
  position: absolute;
  z-index: 0;
  top: -7px;
  background-color: ${theme.white};
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`

export const BrandStyled = styled.div`
  display: flex;
  padding: 8px;
`

export const ColorStyled = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  margin: auto 0;
`

export const BrandTextStyled = styled.div`
  margin-left: auto;
  padding-left: 16px;
  @media screen and (min-width: 750px) {
    padding-right: 16px;
  }
`

// Colour picker
export const PickerLabelStyled = styled.div`
  padding: 8px 16px 0;
`

export const PickerStyled = styled.div`
  display: flex;
  padding: 16px 0;
`

// Text Editior
export const EditorLabel = styled.div`
  padding: 12px 0;
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: rgba(0, 0, 0, 0.54);
`

// FormText
export const FormTextContainerStyled = styled.div`
  padding-top: 24px;
  display: grid;
  width: 100%;
`

type LabelProps = {
  darkMode: boolean
}

export const LabelStyled = styled.label<LabelProps>`
  color: ${theme.grey};
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ${(props) =>
    props.darkMode &&
    `
    color: ${theme.white};
    `}
`

type TextInputProps = {
  disabled?: boolean
  darkMode: boolean
}

export const TextInputStyled = styled.input<TextInputProps>`
  border: none;
  font-size: 14px;
  border-bottom: 1px solid ${theme.dividerGrey};
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
    props.disabled &&
    `
    border: none;
    color: ${theme.disabledTextGrey};
    border-bottom: 1px dotted ${theme.dividerGrey};
    background-color: transparent;
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
`

type CopyProps = {
  isActive?: boolean
}

export const CopyIconStyled = styled.div<CopyProps>`
  position: relative;
  top: 38px;
  display: none;
  left: 8px;
  ${(props) =>
    props.isActive &&
    `
      display: block;
    `}
`

export const CopiedStyled = styled.div`
  position: relative;
  top: -22px;
  left: 2px;
`

// FORM COPY
export const CopyElementStyled = styled.div`
  width: 48px;
  padding-left: 8px;
`

export const ToastStyled = styled.div`
  border: 1px solid ${theme.secondaryGray};
  border-radius: 4px;
  background-color: ${theme.secondaryGray};
  color: ${theme.white};
  font-size: 12px;
  padding: 2px;
  position: absolute;
  left: -10px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  top: 2px;
`
