import React from 'react';
import Avatar from './Avatar';
import { theme } from 'styles/theme'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
};

export const Default = () => <Avatar/>
export const Initial = () => <Avatar>C</Avatar>
export const ColourPrimary = () => <Avatar color={theme.primaryColorValencia}/>
export const FontWeight = () => <Avatar fontWeight={200}>C</Avatar>
export const Width = () => <Avatar width={'200px'}/>
export const Height = () => <Avatar height={'200px'}/>
