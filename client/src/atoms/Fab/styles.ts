import { theme } from 'styles/theme'
import styled from 'styled-components'
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles({
  component: {
    color: theme.white,
    backgroundColor: theme.primaryColor,
    '&:hover': {
      backgroundColor: theme.primaryColorDark
    }
  },
  helpFab: {
    color: theme.white,
    backgroundColor: theme.secondary,
    '&:hover': {
      backgroundColor: theme.secondary
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
