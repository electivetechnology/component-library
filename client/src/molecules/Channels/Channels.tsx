import React, { FunctionComponent } from 'react'
import { InlineStyle, IconOutlineStyled, iconStyles } from 'molecules/Channels/styles'
import { TextsmsOutlined , SmartphoneOutlined, PhoneOutlined } from '@material-ui/icons'
type Props = {
  sms: boolean
  phone: boolean
  webChat: boolean
}

const Channels: FunctionComponent<Props> = ({ sms, phone, webChat }) => {
  const classes = iconStyles({ sms, phone, webChat })

  return (
    <InlineStyle data-testid='Channels'>
      <IconOutlineStyled isActive={phone}>
        <PhoneOutlined className={classes.phoneIcon} />
      </IconOutlineStyled>
      <IconOutlineStyled isActive={sms}>
        <SmartphoneOutlined className={classes.messageIcon} />
      </IconOutlineStyled>
      <IconOutlineStyled isActive={webChat}>
        <TextsmsOutlined className={classes.webIcon} />
      </IconOutlineStyled>
    </InlineStyle>
  )
}

export default Channels
