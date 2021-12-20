import React from 'react'
import Channels from 'molecules/Channels/Channels'

export default {
  title: 'molecules/Channels',
  component: Channels
}

export const None = () => <Channels sms={false} webChat={false} phone={false} />
export const SMS = () => <Channels sms={true} webChat={false} phone={false} />
export const WebChat = () => (
  <Channels sms={false} webChat={true} phone={false} />
)
export const Phone = () => <Channels sms={false} webChat={false} phone={true} />
