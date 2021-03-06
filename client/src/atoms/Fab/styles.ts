import { theme } from 'styles/theme'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  component: {
    color: theme.white,
    backgroundColor: theme.primaryColorValencia,
    '&:hover': {
      backgroundColor: theme.primaryColorValenciaDark
    }
  },
  helpFab: {
    color: theme.white,
    backgroundColor: theme.grayComment,
    '&:hover': {
      backgroundColor: theme.grayComment
    }
  }
})

type IconProps = {
  isActive?: boolean
}

export const IconWrapper = styled.div<IconProps>`
  transition: 0.7s;
  padding-top: 4px;
  ${(props) =>
    props.isActive &&
    `
        transform: rotate(45deg);
    `};
`
