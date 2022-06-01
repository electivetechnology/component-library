import makeStyles from '@mui/styles/makeStyles'
import styled from 'styled-components'
import { theme } from 'styles/theme'

export const CloseWrapper = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
`

export const useStyles = makeStyles({
  // success: {
  //   backgroundColor: theme.accent2Secondary
  // },
  // error: {
  //   backgroundColor: theme.primaryColor
  // },
  // info: {
  //   backgroundColor: theme.secondaryGray
  // },
  // warning: {
  //   backgroundColor: theme.warning
  // },
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
