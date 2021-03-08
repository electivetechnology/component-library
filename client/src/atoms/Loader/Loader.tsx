import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
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
