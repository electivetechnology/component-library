import React from 'react';
import Channels from 'components/molecules/Channels/Channels'

export default {
  title: 'Channels',
  component: Channels,
};

export const None = () => <Channels sms={false} webChat={false} phone={false}/>
export const SMS = () => <Channels sms={true} webChat={false} phone={false}/>
export const WebChat = () => <Channels sms={false} webChat={true} phone={false}/>
export const Phone = () => <Channels sms={false} webChat={false} phone={true}/>
