import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

export const CloseWrapper = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
`

export const useStyles = makeStyles({
  icon: {
    fontSize: 20
  }
})
