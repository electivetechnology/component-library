import React, { useState } from 'react'
import { DeviderStyled } from './styles'
import IconContainer from './IconContainer'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'
import InboxIcon from '@material-ui/icons/Inbox'
import { theme } from 'styles/theme'
import { makeStyles } from '@material-ui/core/styles'

export const iconStyles = makeStyles({
  inboxIcon: (props: any) => ({
    fill: props.inboxSelected ? theme.white : theme.primaryGrey,
    margin: 'auto'
  }),
  acceptIcon: (props: any) => ({
    fill: props.acceptSelected ? theme.white : theme.primaryGrey,
    margin: 'auto'
  }),
  rejectIcon: (props: any) => ({
    fill: props.rejectSelected ? theme.white : theme.primaryGrey,
    margin: 'auto'
  })
})

const InboxNavigation: React.FC = () => {
  const [inboxSelected, setInboxSelected] = useState(false)
  const [acceptSelected, setAcceptSelected] = useState(false)
  const [rejectSelected, setRejectSelected] = useState(false)

  const classes = iconStyles({ inboxSelected, acceptSelected, rejectSelected })

  const handleInboxClick = () => {
    setInboxSelected(!inboxSelected)
  }

  const handleAcceptedClick = () => {
    setAcceptSelected(!acceptSelected)
  }

  const handleRejectedClick = () => {
    setRejectSelected(!rejectSelected)
  }

  return (
    <div style={{ marginLeft: '16px' }}>
      <IconContainer
        onClick={handleInboxClick}
        toolTipText='Inbox'
        placement='right'
        selected={inboxSelected}
      >
        <InboxIcon className={classes.inboxIcon} />
      </IconContainer>
      <IconContainer
        onClick={handleAcceptedClick}
        toolTipText='Accepted'
        placement='right'
        selected={acceptSelected}
      >
        <CheckCircleIcon className={classes.acceptIcon} />
      </IconContainer>
      <IconContainer
        onClick={handleRejectedClick}
        toolTipText='Rejected'
        placement='right'
        selected={rejectSelected}
      >
        <CancelIcon className={classes.rejectIcon} />
      </IconContainer>
      <DeviderStyled />
    </div>
  )
}

export default InboxNavigation
