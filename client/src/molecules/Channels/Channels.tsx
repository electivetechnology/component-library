import React, { FC } from 'react'
import { InlineStyle, IconOutlineStyled, iconStyles } from 'molecules/Channels/styles'
import TextSms from '@material-ui/icons/TextsmsOutlined'
import Smartphone from '@material-ui/icons/SmartphoneOutlined'
import PhoneOutlined from '@material-ui/icons/PhoneOutlined'

type Props = {
  sms: boolean
  phone: boolean
  webChat: boolean
}

const Channels: FC<Props> = ({ sms, phone, webChat }) => {
  const classes = iconStyles({ sms, phone, webChat })

  return (
    <InlineStyle data-testid='Channels'>
      <IconOutlineStyled isActive={phone}>
        <PhoneOutlined className={classes.phoneIcon} />
      </IconOutlineStyled>
      <IconOutlineStyled isActive={sms}>
        <Smartphone className={classes.messageIcon} />
      </IconOutlineStyled>
      <IconOutlineStyled isActive={webChat}>
        <TextSms className={classes.webIcon} />
      </IconOutlineStyled>
    </InlineStyle>
  )
}

export default Channels
