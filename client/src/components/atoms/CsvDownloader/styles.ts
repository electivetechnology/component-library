import { theme } from 'styles/theme'
import styled from 'styled-components'

export const betaStyles = {
  backgroundColor: `${theme.grayComment} !important`,
  color: `${theme.white} !important`,
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    backgroundColor: `${theme.grayCommentDark} !important`,
    color: `${theme.white} !important`
  }
}

type WrapperProps = {
  icon?: any
  hasChildren?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  color: ${theme.white}
    ${(props) =>
      props.icon &&
      `
    align-content: center;
    padding-right: 8px;
        grid-template-columns: 30px 1fr;
    `};
  ${(props) =>
    props.hasChildren &&
    `
    align-content: center;
    padding-right: 8px;
        grid-template-columns: 30px 1fr;
    `};
`

export const Icon = styled.div`
  padding-right: 8px;
  display: grid;
  align-items: center;
`
