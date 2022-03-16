import React from 'react'
import withStyles from '@mui/styles/withStyles';
import LinearProgress from '@mui/material/LinearProgress'
import { Wrapper, LinearProgressWithStyled } from 'atoms/Loader/styles'

const LinearProgressStyled = withStyles(LinearProgressWithStyled)(
  LinearProgress
)

const Loader = () => {
  return (
    <Wrapper data-testid='Loader'>
      <LinearProgressStyled />
    </Wrapper>
  )
}

export default Loader
