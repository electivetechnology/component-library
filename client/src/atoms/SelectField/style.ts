import { theme } from 'styles/theme'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const AutoCompleteContainerStyled = styled.div`
  background-image: linear-gradient(
    ${theme.accent1Secondary},
    ${theme.accent3Secondary}
  );
  height: 100px;
`

export const SelectFieldStyled = styled.div`
  padding-top: 24px;
  width: 100%;
`

export const inputBorder = (outlined: boolean, darkMode: boolean) => {
  let borderColour = darkMode ? theme.grey : theme.highlight
  return outlined ? `1px solid ${borderColour}` : 'none'
}

export const inputBorderHover = (outlined: boolean, darkMode: boolean) => {
  let borderColour = darkMode ? theme.white : theme.grey
  return outlined ? `1px solid ${borderColour}` : 'none'
}

export const useLabelStyles = makeStyles({
  label: (props: any) => ({
    color: props.darkMode ? theme.white : (theme.grey),
    fontSize: '14px !important',
    whiteSpace: 'nowrap',
    '&.Mui-focused': {
      color: props.darkMode ? theme.white : theme.grey
    },
    '&.MuiFormLabel-root.Mui-disabled': {
      color: theme.disabledText,
    },
  })
})

export const useInputStyles = makeStyles({
  input: (props: any) => ({
    fontSize: '14px !important',
    color: props.darkMode ? theme.white : theme.shadow,
    whiteSpace: 'nowrap',
    '&.MuiInputBase-input.Mui-disabled': {
      color: theme.disabledText,
    },
  }),
  inputRoot: (props: any) => ({
    color: props.darkMode ? theme.white : theme.grey,
    '&::after': {
      borderBottom: inputBorder(props.outlined, props.darkMode)
    },
    '&::before': {
      borderBottom: inputBorder(props.outlined, props.darkMode)
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: props.disabled ? 'unset' : inputBorderHover(props.outlined, props.darkMode)
    },
    '&:focus': {
      borderBottom: props.disabled ? 'unset' : inputBorderHover(props.outlined, props.darkMode)
    },
    '&:active': {
      borderBottom: props.disabled ? 'unset' : inputBorderHover(props.outlined, props.darkMode)
    }
  }),
  root: () => ({
    overflow: 'hidden'
  }),
  popupIndicator: (props: any) => ({
    color: props.darkMode ? `${theme.white}` : `${theme.grey}`,
    backgroundColor: props.darkMode ? 'transparent' : theme.white,
    padding: '2px 2px 0'
  }),
  paper: {
    boxShadow: `0px 9px 13px ${theme.highlight}`,
    borderRadius: '2px'
  }
})
