import styled from 'styled-components'
import { theme } from 'styles/theme'
import { makeStyles } from '@material-ui/core'

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

export const ActionButtonStyled = styled.div`
  cursor: pointer;
  margin-top: auto;
  top: 12px;
  position: relative;
  padding: 8px;
`

export const ActionTextStyled = styled.div`
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
  display: inline-flex;
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
  display: inline-flex;
  width: 100%;
  height: auto;
`

type RequiredProp = {
  fontSize?: string
}

export const RequiredStyled = styled.span<RequiredProp>`
  color: ${theme.primaryColorValencia};
  font-size: 12px;
  ${(props) =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
    `}
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
  error: boolean
}

export const TextInputStyled = styled.input<TextInputProps>`
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
`

type CopyProps = {
  isActive?: boolean
}

export const CopyIconStyled = styled.div<CopyProps>`
  position: relative;
  display: none;
  top: 8px;
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
type CopyElementProp = {
  isActive?: boolean
}
export const CopyElementStyled = styled.div<CopyElementProp>`
  width: 48px;
  padding-left: 8px;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    `
      margin: auto 0;
    `}
`

type ToastProps = {
  darkMode: boolean
}
export const ToastStyled = styled.div<ToastProps>`
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
  ${(props) =>
    props.darkMode &&
    `
      color: ${theme.black};
    `}
`

type TextareaProps = {
  disabled?: boolean
  darkMode: boolean
  error: boolean
}

export const TextareaStyled = styled.textarea<TextareaProps>`
  border: none;
  width: 100%;
  font-size: 14px;
  background-color: transparent;
  border-bottom: 1px solid ${theme.dividerGrey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  // hide scroll bar on firefox
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
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

export const DateStyles = makeStyles({
  input: (props: any) => ({
    '&:after': {
      borderBottom: props.darkMode ? `1px solid ${theme.grey}` : `1px solid ${theme.dividerGrey}`,
    },
    '&:before': {
      borderBottom: props.darkMode ? `1px solid ${theme.grey}` : `1px solid ${theme.dividerGrey}`,
    },
    '&.MuiInput-underline:hover:before': {
      borderBottom: props.darkMode ? `1px solid ${theme.white}` : `1px solid ${theme.grey}`,
    },
  }),
})

export const DateWrapperStyled = styled.div`
  position: relative;
  margin-top: 24px;
  padding-top: 8px;
`

type DateLabelProps = {
  darkMode?: boolean
}

export const DateLabelStyled = styled.div<DateLabelProps>`
  position: absolute;
  z-index: 0;
  top: -2px;
  background-color: transparent;
  color: ${theme.black};
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ${(props) =>
    props.darkMode &&
    `
    color: ${theme.white};
    `}
`

export const FormPhoneStyled = styled.div`
  padding-top: 8px;
`

export const ButtonWrapperStyled = styled.div`
  display: grid;
  margin: 16px 0;
  padding-top: 8px;
`

// Form Select
export const SelectStyled = styled.div`
  display: inline-flex;
  width: 100%;
`

// Form row
export const FormRowStyled = styled.div`
  display: grid;
  width: 100%;
  @media screen and (min-width: 750px) {
    display: inline-flex;
  }
  `
