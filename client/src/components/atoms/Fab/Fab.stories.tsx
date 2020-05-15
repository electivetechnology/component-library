import React from 'react';
import Fab from 'components/atoms/Fab/Fab';
import Save from '@material-ui/icons/Save'

export default {
  title: 'atoms/Fab',
  component: Fab,
};

export const Default = () => <Fab icon={''}/>;

export const Icon = () => <Fab icon={<Save/>}/>;

export const Active = () => <Fab icon={<Save/>} isActive={true}/>;

export const InActive = () => <Fab icon={<Save/>} isActive={false}/>;

export const HelperPage = () => <Fab icon={<Save/>} isHelpPage={true}/>;

export const NotHelperPage = () => <Fab icon={<Save/>} isHelpPage={false}/>;

export const ActiveHelper = () => <Fab icon={<Save/>} isActive={true} isHelpPage={true}/>;
