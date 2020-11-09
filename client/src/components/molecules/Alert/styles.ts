import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { theme } from 'styles/theme'

export const CloseWrapper = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
`

export const useStyles = makeStyles({
  success: {
    backgroundColor: theme.secondaryBlue
  },
  error: {
    backgroundColor: theme.primaryColorValencia
  },
  info: {
    backgroundColor: theme.secondaryGray
  },
  warning: {
    backgroundColor: theme.secondaryYellow
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 8
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '400px'
  }
})
