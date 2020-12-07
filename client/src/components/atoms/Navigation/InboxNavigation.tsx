import React  from 'react'
import { DeviderStyled } from './styles'
import IconContainer from './IconContainer'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'
import InboxIcon from '@material-ui/icons/Inbox'

const InboxNavigation: React.FC = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <IconContainer toolTipText='Inbox' placement='right'>
        <InboxIcon />
      </IconContainer>
      <IconContainer toolTipText='Accepted' placement='right'>
        <CheckCircleIcon />
      </IconContainer>
      <IconContainer toolTipText='Rejected' placement='right'>
        <CancelIcon />
      </IconContainer>
      <DeviderStyled />
    </div>
  )
}

export default InboxNavigation
