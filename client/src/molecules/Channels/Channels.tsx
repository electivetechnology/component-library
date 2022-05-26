import React, { FunctionComponent } from 'react'
import { InlineStyle, IconOutlineStyled, iconStyles } from 'molecules/Channels/styles'
import TextSms from '@mui/icons-material/TextsmsOutlined'
import Smartphone from '@mui/icons-material/SmartphoneOutlined'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'

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
        <Smartphone className={classes.messageIcon} />
      </IconOutlineStyled>
      <IconOutlineStyled isActive={webChat}>
        <TextSms className={classes.webIcon} />
      </IconOutlineStyled>
    </InlineStyle>
  )
}

export default Channels
