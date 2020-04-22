import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'components/atoms/Button/Button';
import Save from '@material-ui/icons/Save'

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button text={'Primary'} theme={'primary'} onClick={action('clicked')}/>;

export const Secondary = () => <Button text={'Secondary'} theme={'secondary'} onClick={action('clicked')}/>;

export const Beta = () => <Button text={'Beta'} theme={'beta'} onClick={action('clicked')}/>;

export const Disabled = () => <Button disabled={true} text={'Disabled'} theme={'primary'} onClick={action('clicked')}/>;

export const FullWidth = () => <Button fullWidth={true} text={'FullWidth'} theme={'primary'} onClick={action('clicked')}/>;

export const Icon = () => <Button icon={<Save/>} text={'Icon'} theme={'primary'} onClick={action('clicked')}/>;
