import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'styles/theme'

export const useStyles = makeStyles({
  success: {
    backgroundColor: theme.secondaryBlue,
  },
  error: {
    backgroundColor: theme.primaryColorValencia,
  },
  info: {
    backgroundColor: theme.secondaryGray,
  },
  warning: {
    backgroundColor: theme.secondaryYellow,
  },
  icon: {
    fontSize: 20,
  },
})
