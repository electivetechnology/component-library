import styled from 'styled-components'
import { theme } from 'styles/theme'
import { makeStyles } from '@material-ui/core'
import { handleFormBorder } from './base'

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
  border-top: 1px solid ${theme.selected}
  padding-top: 4px;
  margin-top: 8px;
`

type deleteProp = {
  isActive?: boolean
}

export const ActionButtonStyled = styled.div<deleteProp>`
  cursor: pointer;
  margin-top: auto;
  top: 4px;
  position: relative;
  padding: 8px 8px 0;
  display: none;
  ${(props) =>
    props.isActive &&
    `
      display: block;
    `}
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

type ColorProp = {
  disabled: boolean
}

export const ColorStyled = styled.div<ColorProp>`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  margin: auto 0;
  ${(props) =>
    props.disabled &&
    `
      background: linear-gradient(to left top, transparent 47.75%, black 49.5%, black 50.5%, transparent 52.25%);
    `}
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
type FormTextContainerProps = {
  fixedHeight?: boolean
  singleField?: boolean
  hasValue: boolean
}

export const FormTextContainerStyled = styled.div<FormTextContainerProps>`
  display: inline-flex;
  width: 100%;
  height: auto;
  padding-top: 23px;
  ${(props) =>
    props.fixedHeight &&
    `
      padding-top: 4px;
    `}
  ${(props) =>
    props.singleField &&
    `
      height: 46px;
    `}
  ${(props) =>
    props.singleField &&
    props.hasValue &&
    `
      padding-top: 23px;
    `}
`

type RequiredProp = {
  fontSize?: string
  disabled: boolean
}

export const RequiredStyled = styled.span<RequiredProp>`
  color: ${theme.primaryColor};
  font-size: 12px;
  ${(props) =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
    `}
  ${(props) =>
    props.disabled &&
    `
    color: ${theme.disabledButton};
    `}
`

type LabelProps = {
  color: string
}

export const LabelStyled = styled.label<LabelProps>`
  color: ${theme.grey};
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ${(props) =>
    props.color &&
    `
    color: ${props.color};
    `}
`

type TextInputProps = {
  disabled?: boolean
  darkMode: boolean
  error: boolean
  icon?: boolean
}

export const TextInputStyled = styled.input<TextInputProps>`
  border: none;
  font-size: 14px;
  border-bottom: 1px solid ${theme.highlight};
  background-color: transparent;
  width: 100%;
  padding: 6px 0;
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
  ${(props) =>
    props.icon &&
    `
      border-bottom: none;
      &:focus {
        outline: none;
        border-bottom: none;
      }
      &:hover {
        border-bottom: none;
      }
      &:active {
        border-bottom: none;
      }
    `}
`

type TextAreaProps = {
  disabled: boolean
  darkMode: boolean
  error: boolean
  icon?: boolean
  singleField?: boolean
}
export const TextAreaStyled = styled.div<TextAreaProps>`
  ${(props) =>
    props.icon &&
    `
      display: inline-flex;
      width: 100%;
      border-bottom: 1px solid ${theme.highlight};
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
    `}
  ${(props) =>
    props.error &&
    `
      display: inline-flex;
      width: 100%;
      grid-gap: 8px;
    `}
  ${(props) =>
    props.singleField &&
    `
      position: absolute;
      bottom: 0;
      width: 100%;
    `}
  ${(props) =>
    props.darkMode &&
    props.icon &&
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
    props.icon &&
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

type TextEditorProps = {
  disabled: boolean
  darkMode: boolean
  error: boolean
}
export const TextEditorStyled = styled.div<TextEditorProps>`
  paddingbottom: 8px
    ${(props) =>
      props.error &&
      `
      display: inline-flex;
      width: 100%;
      grid-gap: 8px;
    `};
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
      color: ${theme.shadow};
    `}
`

type TextareaProps = {
  disabled?: boolean
  darkMode: boolean
  error: boolean
  icon?: boolean
}

export const TextareaStyled = styled.textarea<TextareaProps>`
  min-height: 60px;
  border: 1px solid transparent;
  width: 100%;
  font-size: 14px;
  background-color: transparent;
  width: 100%;
  border-bottom: 1px solid ${theme.highlight};
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
  ${(props) =>
    props.icon &&
    `
      border-bottom: none;
      &:focus {
        outline: none;
        border-bottom: none;
      }
      &:hover {
        border-bottom: none;
      }
      &:active {
        border-bottom: none;
      }
    `}
`

export const DateStyles = makeStyles({
  input: (props: any) => ({
    '&:after': {
      borderBottom: props.darkMode ? `1px solid ${theme.grey}` : `1px solid ${theme.highlight}`,
    },
    '&:before': {
      borderBottom: props.darkMode ? `1px solid ${theme.grey}` : `1px solid ${theme.highlight}`,
    },
    '&.MuiInput-underline:hover:before': {
      borderBottom: handleFormBorder(theme.grey, props.darkMode, props.disabled)
    }
  })
})

export const DateWrapperStyled = styled.div`
  position: relative;
  margin-top: 24px;
  padding-top: 8px;
`

type DateLabelProps = {
  darkMode?: boolean
  disabled: boolean
}

export const DateLabelStyled = styled.div<DateLabelProps>`
  position: absolute;
  z-index: 0;
  top: -2px;
  background-color: transparent;
  color: ${theme.shadow};
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ${(props) =>
    props.darkMode &&
    `
    color: ${theme.white};
    `}
  ${(props) =>
    props.disabled &&
    `
    color: ${theme.disabledButton};
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

type FormRowProps = {
  hasDelete: boolean
}
export const FormRowStyled = styled.div<FormRowProps>`
  display: grid;
  width: 100%;
  @media screen and (min-width: 750px) {
    display: inline-flex;
    grid-gap: 12px;
  }
  ${(props) =>
    props.hasDelete &&
    `
    width: 90%;
    `}
`
