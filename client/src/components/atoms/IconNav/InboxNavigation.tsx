import React from 'react'
import NavSection from './NavSection'
import NavIcon from './NavIcon'
import NavIcons from './NavIcons'
import InboxIcon from '@material-ui/icons/Inbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'

const InboxNavigation: React.FC = () => {
  return (
    <NavIcons layout='vertical'>
      <NavSection initial='b' position='start'>
        <NavIcon id='a' toolTipText='Inbox' placement='right'>
          <InboxIcon />
        </NavIcon>
        <NavIcon id='b' toolTipText='Accepted' placement='right'>
          <CheckCircleIcon />
        </NavIcon>
        <NavIcon id='c' toolTipText='Rejected' placement='right'>
          <CancelIcon />
        </NavIcon>
      </NavSection>
    </NavIcons>
  )
}

export default InboxNavigation
