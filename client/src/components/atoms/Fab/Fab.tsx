import React, { FunctionComponent } from 'react'
import Fab from '@material-ui/core/Fab'
import { IconWrapper, useStyles } from './styles'

type Props = {
  icon: any
  isActive?: boolean
  isHelpPage?: boolean
}

const FabComponent: FunctionComponent<Props> = ({
  icon,
  isActive,
  isHelpPage = false,
}) => {
  const classes = useStyles()
  const styles = isHelpPage ? classes.helpFab : classes.component;
  return (
    <Fab data-testid="Fab" color="primary" className={styles}>
      <IconWrapper isActive={isActive}>{icon}</IconWrapper>
    </Fab>
  )
}

export default FabComponent
