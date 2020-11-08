import React, { FunctionComponent } from 'react'
import MaterialFab from '@material-ui/core/Fab'
import { IconWrapper, useStyles } from './styles'

type Props = {
  icon: any
  isActive?: boolean
  isHelpPage?: boolean
}

const Fab: FunctionComponent<Props> = ({
  icon,
  isActive,
  isHelpPage = false,
}) => {
  const classes = useStyles()
  const styles = isHelpPage ? classes.helpFab : classes.component;
  return (
    <MaterialFab data-testid="Fab" color="primary" className={styles}>
      <IconWrapper isActive={isActive}>{icon}</IconWrapper>
    </MaterialFab>
  )
}

export default Fab
